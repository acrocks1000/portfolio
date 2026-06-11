import { Reveal } from "../Reveal/reveal";

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="text-sage font-mono text-sm tracking-[0.3em] uppercase mb-3">
        {kicker}
      </p>
      <h2 className="font-display text-4xl md:text-6xl font-semibold text-mist">
        <span className="heading-line">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-mist-soft mt-5 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
