export function SkillsMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 bg-pine -rotate-1 scale-[1.02] border-y border-sage/15">
      <div className="marquee-track gap-12 items-center">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-mist font-display text-2xl md:text-3xl font-medium whitespace-nowrap"
          >
            {item}
            <span
              className="w-2 h-2 rounded-full bg-sage inline-block"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
