"use client";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IProject } from "@/app/model/user";
import { ProjectIcon } from "../ProjectIcon/projectIcon";

export function ProjectCard({
  project,
  onSelect,
}: {
  project: IProject;
  onSelect: (p: IProject) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${
      -y * 10
    }deg) translateY(-4px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onSelect(project)}
      className="glow-card group cursor-pointer rounded-3xl p-7 will-change-transform h-full flex flex-col"
      style={{ transition: "transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
    >
      <div className="flex items-start justify-between mb-5">
        <span className="w-14 h-14 rounded-2xl bg-pine/60 border border-sage/20 flex items-center justify-center group-hover:scale-110 group-hover:border-sage/50 transition-all">
          <ProjectIcon name={project.icon} className="text-2xl text-sage" />
        </span>
        {project.featured && (
          <span className="text-[10px] font-bold tracking-widest uppercase bg-sage text-slate-deep px-3 py-1.5 rounded-full">
            Featured
          </span>
        )}
      </div>
      <h3 className="font-display text-2xl font-semibold text-mist mb-2 group-hover:text-sage transition-colors">
        {project.title}
      </h3>
      <p className="text-mist-soft text-sm mb-5 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1 bg-moss/20 text-sage rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-5 text-xs font-mono text-moss flex items-center gap-2">
        {project.year}
        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1 text-sage">
          view details <FiArrowUpRight />
        </span>
      </p>
    </div>
  );
}
