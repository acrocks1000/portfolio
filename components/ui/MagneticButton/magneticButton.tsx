"use client";
import { ReactNode, useRef } from "react";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  download,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const styles =
    variant === "primary"
      ? "bg-sage text-slate-deep hover:bg-mist"
      : "border-2 border-sage/50 text-sage hover:border-sage hover:bg-sage/10";

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide will-change-transform ${styles}`}
      style={{
        transition:
          "transform 0.2s ease-out, background-color 0.3s, color 0.3s, border-color 0.3s",
      }}
    >
      {children}
    </a>
  );
}
