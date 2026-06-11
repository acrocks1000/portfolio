"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto max-w-5xl px-6 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-darker/85 backdrop-blur-md shadow-lg shadow-black/30 py-3 mx-4 md:mx-auto border border-sage/10"
            : "py-2"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-full bg-pine border border-sage/30 flex items-center justify-center font-display font-bold text-sage group-hover:bg-moss transition-colors">
            A
          </span>
          <span className="font-display text-lg font-semibold text-mist tracking-tight">
            Abhinav Chaudhary
          </span>
        </a>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-mist-soft hover:text-sage transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-sage after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          className="md:hidden text-sage text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl bg-slate-darker/95 backdrop-blur-md shadow-lg shadow-black/30 border border-sage/10 p-6">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-mist hover:text-sage transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
