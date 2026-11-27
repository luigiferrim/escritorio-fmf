type LogoProps = {
  className?: string;
  tagline?: boolean;
  tone?: "dark" | "light";
};

// Logo tipográfico empilhado da identidade nova: "Ferri, / Maines / & Fernandes",
// com o "&" pendurado à esquerda de "Fernandes". O texto lido continua
// "Ferri, Maines & Fernandes".
const Logo = ({ className = "", tagline = true, tone = "dark" }: LogoProps) => {
  const tag = tone === "light" ? "text-white/60" : "text-muted-foreground";
  return (
    <span className={`inline-flex flex-col pl-[0.9em] ${className}`}>
      <span className="whitespace-nowrap font-medium leading-[0.94] tracking-[-0.045em]">
        <span className="block">Ferri,</span>{" "}
        <span className="block">Maines</span>{" "}
        <span className="flex">
          <span className="flex w-0 flex-none justify-end">
            <span className="pr-[0.18em] font-light">&amp;</span>
          </span>{" "}
          <span>Fernandes</span>
        </span>
      </span>
      {tagline ? (
        <span
          className={`mono-label mt-4 block whitespace-nowrap !text-[11px] ${tag}`}
        >
          Advogados Associados
        </span>
      ) : null}
    </span>
  );
};

export default Logo;
