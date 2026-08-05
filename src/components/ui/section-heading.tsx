type SectionHeadingProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  titleId?: string;
  alignment?: "left" | "center";
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  alignment = "left",
}: SectionHeadingProps) {
  const isCentered = alignment === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="font-mono text-xs font-bold tracking-[0.2em] text-mint uppercase">{eyebrow}</p>

      <h2
        id={titleId}
        className="mt-4 text-3xl leading-tight font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
