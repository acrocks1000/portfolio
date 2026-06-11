"use client";
import { FiMapPin } from "react-icons/fi";
import { IExperience } from "@/app/model/user";
import { Reveal } from "../Reveal/reveal";

export function ExperienceTimeline({ items }: { items: IExperience[] }) {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-moss/40" />
      <div className="space-y-12">
        {items.map((exp, i) => {
          const left = i % 2 === 0;
          return (
            <Reveal key={exp.id} delay={i * 100}>
              <div
                className={`relative flex flex-col md:flex-row ${
                  left ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* dot */}
                <span
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full border-4 border-slate-deep z-10 ${
                    exp.current ? "bg-sage animate-pulse" : "bg-moss"
                  }`}
                />
                <div className="md:w-1/2" />
                <div
                  className={`md:w-1/2 pl-12 md:pl-0 ${
                    left ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glow-card rounded-3xl p-7">
                    <p className="font-mono text-xs text-sage mb-2 tracking-wider">
                      {exp.period}
                      {exp.current && (
                        <span className="ml-2 bg-sage/15 text-sage px-2 py-0.5 rounded-full">
                          current
                        </span>
                      )}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-mist">
                      {exp.role}
                    </h3>
                    <p className="text-mist-soft font-medium text-sm mb-4 flex items-center gap-1.5">
                      {exp.company}
                      <span className="inline-flex items-center gap-1 text-moss">
                        <FiMapPin className="text-xs" /> {exp.location}
                      </span>
                    </p>
                    <ul className="space-y-2.5 mb-5">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-mist-soft text-sm leading-relaxed flex gap-2.5"
                        >
                          <span className="text-sage mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-sage inline-block" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 bg-pine/60 text-sage rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
