"use client";
import { useEffect, useState } from "react";
import { FiTerminal } from "react-icons/fi";

export function WisdomTicker() {
  const [wisdoms, setWisdoms] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/frontend-wisdoms")
      .then((res) => res.json())
      .then((data: string[]) =>
        setWisdoms(data.sort(() => Math.random() - 0.5))
      )
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (wisdoms.length === 0) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % wisdoms.length),
      5000
    );
    return () => clearInterval(id);
  }, [wisdoms]);

  if (wisdoms.length === 0) return null;

  return (
    <div className="glow-card rounded-3xl px-8 py-10 text-center">
      <p className="text-sage font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
        <FiTerminal /> Frontend wisdom #{(index % wisdoms.length) + 1}
      </p>
      <p
        key={index}
        className="ticker-in font-display text-xl md:text-2xl text-mist italic max-w-3xl mx-auto"
      >
        “{wisdoms[index]}”
      </p>
    </div>
  );
}
