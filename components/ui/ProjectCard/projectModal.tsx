"use client";
import { useEffect } from "react";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import { IProject } from "@/app/model/user";
import { ProjectIcon } from "../ProjectIcon/projectIcon";

export function ProjectModal({
  project,
  onClose,
}: {
  project: IProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="bg-slate-darker border border-sage/15 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl ticker-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-pine/40 px-8 pt-10 pb-8 rounded-t-3xl border-b border-sage/10">
          <span className="inline-flex w-16 h-16 rounded-2xl bg-slate-deep border border-sage/25 items-center justify-center">
            <ProjectIcon name={project.icon} className="text-3xl text-sage" />
          </span>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-deep text-sage border border-sage/20 flex items-center justify-center hover:bg-sage hover:text-slate-deep transition-colors"
            aria-label="Close"
          >
            <FiX />
          </button>
          <h2 className="font-display text-3xl font-semibold text-mist mt-4">
            {project.title}
          </h2>
          <p className="font-mono text-xs text-sage mt-1">{project.year}</p>
        </div>
        <div className="p-8">
          <p className="text-mist-soft leading-relaxed mb-6">
            {project.longDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 bg-moss/20 text-sage rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-sage text-slate-deep font-bold rounded-full hover:bg-mist transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-sage/40 text-sage font-bold rounded-full hover:bg-sage hover:text-slate-deep transition-colors"
            >
              <FiGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
