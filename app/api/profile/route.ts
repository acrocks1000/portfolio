import { NextResponse } from "next/server";
import { IUser } from "@/app/model/user";

const profile: IUser = {
  name: "Abhinav Chaudhary",
  jobTitle: "Senior Frontend Engineer",
  tagline: "I craft interfaces that feel fast, look sharp, and work for everyone.",
  cvLink: "/Resume_Abhinav.pdf",
  email: "abhinavchaudhary0002@gmail.com",
  phone: "+91-8351097335",
  location: "Bangalore, India",
  bio: "I'm a frontend engineer who cares about the details — the 16ms frame budget, the focus ring nobody notices until they need it, the state machine that doesn't fall apart under pressure. Four years in, I've shipped enterprise Angular platforms, React side projects, Electron desktop tools, and everything between.",
  identity: [
    "4+ years experience",
    "TypeScript-first",
    "Accessibility advocate",
    "Performance obsessed",
  ],
  skills: [
    {
      group: "Interfaces & Frameworks",
      blurb: "Component architecture that scales past the demo.",
      items: ["Angular", "React", "Next.js", "Tailwind CSS", "Three.js", "Electron"],
    },
    {
      group: "State & Reactivity",
      blurb: "Predictable data flow, even when the app isn't simple.",
      items: ["NgRx", "RxJS", "Signals", "Redux", "TypeScript"],
    },
    {
      group: "Craft & Delivery",
      blurb: "Fast frames, clean pipelines, interfaces everyone can use.",
      items: ["SSR", "Micro Frontends", "WCAG 2.1", "Jest & Cypress", "CI/CD", "AI-assisted dev"],
    },
  ],
  marquee: [
    "TypeScript",
    "Angular",
    "React",
    "Next.js",
    "Three.js",
    "RxJS",
    "NgRx",
    "Micro Frontends",
    "SSR",
    "Accessibility",
    "Performance",
    "Electron",
  ],
  social: {
    linkedin: "https://linkedin.com/in/acrocks1000",
    github: "https://github.com/acrocks1000",
  },
};

export async function GET() {
  return NextResponse.json(profile);
}
