import { NextResponse } from "next/server";
import { IProject } from "@/app/model/user";

// icon: key resolved to a react-icons component on the client
const projects: IProject[] = [
  {
    id: 1,
    title: "StateCraft",
    description: "E-commerce front built to stress-test NgRx state management",
    longDescription:
      "A mock e-commerce application built with Angular and NgRx to demonstrate clean, scalable state management across cart, inventory, and user modules. Feature stores, effects, and selectors keep complex UI state predictable; TailwindCSS and reactive forms handle the storefront.",
    icon: "angular",
    tags: ["Angular", "NgRx", "RxJS", "TailwindCSS"],
    link: null,
    github: "https://github.com/acrocks1000/StateCraft",
    featured: true,
    year: 2025,
  },
  {
    id: 2,
    title: "Wordle Clone",
    description: "Faithful NYT Wordle remake — daily puzzles, live on Vercel",
    longDescription:
      "A clone of NYT Wordle built with Next.js and React: daily word puzzles, colored feedback for correct/misplaced/incorrect letters, responsive grid UI, and word-list API integration. Deployed on Vercel.",
    icon: "react",
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    link: "https://wordleclone-chi.vercel.app",
    github: "https://github.com/acrocks1000/wordle_clone",
    featured: true,
    year: 2025,
  },
  {
    id: 3,
    title: "Smart Renamer",
    description: "Electron desktop app that untangles messy media filenames",
    longDescription:
      "Cross-platform desktop app built with Electron that cleans up messy media filenames. Detects patterns — anime episodes, seasons, posters — suggests human-readable names, and applies changes with one-click approve/reject. Handles nested folders and always preserves extensions.",
    icon: "electron",
    tags: ["Electron", "Node.js", "Desktop", "Pattern matching"],
    link: null,
    github: "https://github.com/acrocks1000/smart_rename",
    featured: true,
    year: 2025,
  },
  {
    id: 4,
    title: "DDC Monitor Controller",
    description: "TypeScript service + app controlling real monitors over DDC-CI",
    longDescription:
      "A Node.js/TypeScript DDC-CI controller for Windows: detects monitors, sets brightness and contrast via WMI, switches inputs (HDMI/DP/DVI), sends raw VCP codes, and exposes it all through a RESTful API — with a companion TypeScript app on top. Hardware control, typed end to end.",
    icon: "monitor",
    tags: ["TypeScript", "Node.js", "REST API", "Hardware"],
    link: null,
    github: "https://github.com/acrocks1000/monitor-controller",
    featured: false,
    year: 2026,
  },
  {
    id: 5,
    title: "This Portfolio",
    description: "Next.js 15 + Three.js — the site you're looking at",
    longDescription:
      "Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. The hero runs a mouse-reactive Three.js particle field; sections animate in with IntersectionObserver; data flows through typed API routes. Designed and built from scratch.",
    icon: "nextjs",
    tags: ["Next.js", "Three.js", "React 19", "Tailwind 4"],
    link: null,
    github: "https://github.com/acrocks1000/portfolio",
    featured: false,
    year: 2026,
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
