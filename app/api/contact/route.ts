import { NextResponse } from "next/server";

type Payload = {
  nome: string;
  email: string;
  telefone?: string;
  assunto?: string;
  mensagem: string;
  recaptchaToken?: string;
};

// Simple in-memory rate limiter (per-instance). Fine for light traffic.
const limiter = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_PER_WINDOW = 6;

function ipFromRequest(req: Request) {
  // In Next.js edge / server environment, headers.get('x-forwarded-for') may exist behind proxies
  try {
    const xff = req.headers.get("x-forwarded-for");
    if (xff) return xff.split(",")[0].trim();
  } catch (e) {
    // ignore
  }
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
  return res.json();
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

  const { nome, email, mensagem } = body;
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

  // Optional reCAPTCHA verification if secret is provided
  const recaptchaSecret =
    process.env.RECAPTCHA_SECRET || process.env.NEXT_PUBLIC_RECAPTCHA_SECRET;
  if (recaptchaSecret && body.recaptchaToken) {
    try {
      // @ts-ignore
      const verification = await verifyRecaptcha(
        recaptchaSecret,
        body.recaptchaToken
      );
      if (!verification.success || verification.score < 0.3) {
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
        name: body.nome,
        email: body.email,
        telefone: body.telefone,
        subject: body.assunto,
        message: body.mensagem,
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
