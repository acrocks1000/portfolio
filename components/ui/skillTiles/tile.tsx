'use client';
import { FaAngular, FaReact } from "react-icons/fa";
import { SiGit, SiGitlab, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

export function Tile({ icon }: { icon: string }) {
  function getIcon(target: string) {
    const t = target.toLowerCase().trim();
    if (t === "angular") {
      return <FaAngular className="w-25 h-25 hover:fill-amber-500" />;
    } else if (t === "react") {
      return <FaReact className="w-25 h-25 hover:fill-amber-500" />;
    } else if (t === "git") {
      return <SiGit className="w-25 h-25 hover:fill-amber-500" />;
    } else if (t === "gitlab") {
      return <SiGitlab className="w-25 h-25 hover:fill-amber-500" />;
    } else if (t === "typescript" || t === "ts") {
      return <SiTypescript className="w-25 h-25 hover:fill-amber-500" />;
    } else if (t === "js" || t === "javascript") {
      return <SiJavascript className="w-25 h-25 hover:fill-amber-500" />;
    } else if (t === "html" || t === "html5") {
      return <SiHtml5 className="w-25 h-25 hover:fill-amber-500" />;
    } else if (t === "css" || t === "css3") {
      return <SiCss3 className="w-25 h-25 hover:fill-amber-500" />;
    }
    return null;
  }
  return (
    <div>
      <div className="w-30 h-30">{getIcon(icon)}</div>
    </div>
  );
}
