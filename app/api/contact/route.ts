import { NextResponse } from "next/server";

type Payload = {
  nome: string;
  email: string;
  telefone?: string;
  assunto?: string;
  mensagem: string;
  website?: string;
  startedAt?: number;
  recaptchaToken?: string;
};

type RecaptchaVerification = {
  success: boolean;
  score?: number;
};

// Simple in-memory rate limiter (per-instance). Fine for light traffic.
const limiter = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_PER_WINDOW = 6;
const MIN_SUBMIT_DELAY_MS = 1500;
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

function ipFromRequest(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

async function verifyRecaptcha(secret: string, token: string) {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(
      token
    )}`,
  });
  return (await res.json()) as RecaptchaVerification;
}

function sanitizeText(value: string | undefined, maxLength: number) {
  return value?.trim().slice(0, maxLength) ?? "";
}

export async function POST(req: Request) {
  const ip = ipFromRequest(req);

  const entry = limiter.get(ip) || { count: 0, first: Date.now() };
  const now = Date.now();
  if (now - entry.first > WINDOW_MS) {
    entry.count = 0;
    entry.first = now;
  }
  entry.count += 1;
  limiter.set(ip, entry);
  if (entry.count > MAX_PER_WINDOW) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  if (
    typeof body.startedAt !== "number" ||
    Date.now() - body.startedAt < MIN_SUBMIT_DELAY_MS
  ) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const nome = sanitizeText(body.nome, MAX_FIELD_LENGTH);
  const email = sanitizeText(body.email, MAX_FIELD_LENGTH);
  const telefone = sanitizeText(body.telefone, MAX_FIELD_LENGTH);
  const assunto = sanitizeText(body.assunto, MAX_FIELD_LENGTH);
  const mensagem = sanitizeText(body.mensagem, MAX_MESSAGE_LENGTH);

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Basic email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET;
  if (recaptchaSecret) {
    if (!body.recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA token missing" },
        { status: 400 }
      );
    }

    try {
      const verification = await verifyRecaptcha(
        recaptchaSecret,
        body.recaptchaToken
      );
      if (!verification.success || (verification.score ?? 0) < 0.3) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    } catch (e) {
      return NextResponse.json(
        { error: "reCAPTCHA verification error" },
        { status: 500 }
      );
    }
  }

  // Forward to Formspree (server-side) to avoid exposing endpoint in client code
  const FORM_ENDPOINT =
    process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/xqaqnjpd";

  try {
    const forwardRes = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nome,
        email,
        telefone,
        subject: assunto,
        message: mensagem,
      }),
    });

    if (!forwardRes.ok) {
      return NextResponse.json(
        { error: "Failed to deliver message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export const runtime = "nodejs";
