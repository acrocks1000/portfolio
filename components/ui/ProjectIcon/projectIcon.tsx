import { SiAngular, SiReact, SiElectron, SiNextdotjs } from "react-icons/si";
import { FiMonitor, FiCode } from "react-icons/fi";
import { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  angular: SiAngular,
  react: SiReact,
  electron: SiElectron,
  nextjs: SiNextdotjs,
  monitor: FiMonitor,
};

export function ProjectIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? FiCode;
  return <Icon className={className} aria-hidden="true" />;
}
