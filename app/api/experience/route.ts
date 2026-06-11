import { NextResponse } from "next/server";
import { IExperience } from "@/app/model/user";

const experience: IExperience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Happiest Minds Technologies",
    location: "Bangalore, India",
    period: "Aug 2024 — Present",
    current: true,
    points: [
      "Lead frontend on an Angular 19 SSR platform — standalone components, signals, and a 30% cut in page load time.",
      "Folded AI tooling (Copilot, MCP servers) into the team's daily workflow; design-to-code handoff got measurably faster.",
      "Mentor juniors through code reviews and pairing; own the team's standards for state management and accessibility.",
    ],
    tags: ["Angular 19", "SSR", "Signals", "Mentoring"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Happiest Minds Technologies",
    location: "Bangalore, India",
    period: "Sep 2022 — Jul 2024",
    current: false,
    points: [
      "Built an analytics dashboard serving 10,000+ users — RBAC, dynamic filtering, 85%+ test coverage.",
      "Split a monolith into micro frontends with Module Federation; teams shipped independently, 2 days faster per sprint.",
      "Designed a 25+ component accessible UI library on Angular Material & CDK — 40% faster prototyping.",
    ],
    tags: ["Micro Frontends", "NgRx", "Angular Material", "WCAG 2.1"],
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "LinuxWorld Informatics",
    location: "Remote",
    period: "May 2021 — Sep 2021",
    current: false,
    points: [
      "Built a face recognition app (Python + OpenCV) hitting ~92% accuracy on custom datasets.",
      "Shipped a web frontend for managing Kubernetes and Docker environments, used by 50+ trainees.",
    ],
    tags: ["Python", "OpenCV", "Kubernetes", "Docker"],
  },
];

export async function GET() {
  return NextResponse.json(experience);
}
