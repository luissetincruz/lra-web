type SectionHeadingProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  titleId?: string;
  alignment?: "left" | "center";
  tone?: "light" | "dark";
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  alignment = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCentered = alignment === "center";
  const isLight = tone === "light";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`font-mono text-xs font-bold tracking-[0.2em] uppercase ${
          isLight ? "text-brand" : "text-mint"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        id={titleId}
        className={`mt-4 text-3xl leading-tight font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          isLight ? "text-text" : "text-white"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
          isLight ? "text-text-muted" : "text-slate-400"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
