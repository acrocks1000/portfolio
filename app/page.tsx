"use client";
import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiAward,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUsers,
} from "react-icons/fi";
import { IExperience, IProject, IUser } from "./model/user";
import { ParticleField } from "@/components/three/ParticleField";
import { Header } from "@/components/ui/Header/header";
import { Reveal } from "@/components/ui/Reveal/reveal";
import { MagneticButton } from "@/components/ui/MagneticButton/magneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading/sectionHeading";
import { SkillsMarquee } from "@/components/ui/SkillsMarquee/skillsMarquee";
import { WisdomTicker } from "@/components/ui/WisdomTicker/wisdomTicker";
import { ProjectCard } from "@/components/ui/ProjectCard/projectCard";
import { ProjectModal } from "@/components/ui/ProjectCard/projectModal";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline/experienceTimeline";
import { CursorGlow } from "@/components/ui/CursorGlow/cursorGlow";

const ROLES = [
  "Senior Frontend Engineer",
  "Interface Craftsman",
  "Performance Nerd",
  "Accessibility Advocate",
];

const NAME = "Abhinav";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const speed = deleting ? 40 : 90;
    const id = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(id);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Home() {
  const [profile, setProfile] = useState<IUser | null>(null);
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    fetch("/api/profile").then((r) => r.json()).then(setProfile);
    fetch("/api/experience").then((r) => r.json()).then(setExperience);
    fetch("/api/projects").then((r) => r.json()).then(setProjects);
  }, []);

  return (
    <div id="top" className="relative">
      <CursorGlow />
      <Header />

      {/* ============ HERO ============ */}
      <section className="grain relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <ParticleField />
        </div>
        {/* deep pine glow */}
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-pine/50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-52 -left-40 w-[30rem] h-[30rem] rounded-full bg-moss/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
          <Reveal>
            <p className="font-mono text-sage text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <span className="inline-block w-10 h-px bg-sage" />
              <FiMapPin className="text-base" />
              {profile?.location ?? "Bangalore, India"}
            </p>
          </Reveal>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold text-mist leading-[1.05] tracking-tight">
            <span className="block">
              Hi, I&apos;m{" "}
              <span className="text-sage italic">
                {NAME.split("").map((ch, i) => (
                  <span
                    key={i}
                    className="letter"
                    style={{ animationDelay: `${0.3 + i * 0.06}s` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            </span>
            <span className="block mt-2 text-3xl sm:text-5xl lg:text-6xl text-mist-soft">
              {role}
              <span className="caret text-sage">_</span>
            </span>
          </h1>
          <Reveal delay={250}>
            <p className="mt-8 text-lg md:text-xl text-mist-soft max-w-xl leading-relaxed">
              {profile?.tagline ??
                "I craft interfaces that feel fast, look sharp, and work for everyone."}
            </p>
          </Reveal>
          <Reveal delay={350}>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <MagneticButton href="#projects">
                View my work <FiArrowDown />
              </MagneticButton>
              <MagneticButton
                href={`mailto:${profile?.email ?? "abhinavchaudhary0002@gmail.com"}`}
                variant="outline"
              >
                Get in touch <FiArrowUpRight />
              </MagneticButton>
            </div>
          </Reveal>

          {/* identity chips — who I am, not job metrics */}
          <Reveal delay={450}>
            <div className="mt-16 flex flex-wrap gap-3">
              {(profile?.identity ?? []).map((chip, i) => (
                <span
                  key={chip}
                  className="float-y px-5 py-2.5 rounded-full border border-sage/25 bg-slate-darker/60 backdrop-blur-sm text-sm font-medium text-mist-soft"
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <span className="text-sage mr-2">●</span>
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* scroll hint */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sage text-xs font-mono tracking-widest flex flex-col items-center gap-2 hover:text-mist transition-colors"
        >
          SCROLL
          <span className="block w-px h-8 bg-sage/40" />
        </a>
      </section>

      {/* ============ MARQUEE ============ */}
      <SkillsMarquee
        items={
          profile?.marquee ?? ["TypeScript", "Angular", "React", "Next.js", "Three.js"]
        }
      />

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading kicker="01 · About" title="Craft over checklist." />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            <Reveal className="md:col-span-3">
              <p className="text-mist-soft text-lg leading-relaxed mb-6">
                {profile?.bio}
              </p>
              <p className="text-mist-soft text-lg leading-relaxed">
                By day I lead frontend work at{" "}
                <span className="text-sage font-semibold">
                  Happiest Minds Technologies
                </span>
                . By night I build things like Electron renamers, Wordle clones,
                and tools that talk to monitor hardware — because the best way
                to stay sharp is to keep shipping.
              </p>
              <div className="mt-8 flex gap-6">
                <a
                  href={profile?.social.github ?? "https://github.com/acrocks1000"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sage font-semibold text-sm hover:text-mist transition-colors underline underline-offset-4"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={profile?.social.linkedin ?? "https://linkedin.com/in/acrocks1000"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sage font-semibold text-sm hover:text-mist transition-colors underline underline-offset-4"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </Reveal>
            <Reveal delay={150} className="md:col-span-2">
              <div className="bg-pine rounded-3xl p-8 text-mist rotate-1 hover:rotate-0 transition-transform duration-300 border border-sage/20">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-5">
                  Recognition
                </p>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <FiAward className="text-sage text-2xl shrink-0 mt-1" />
                    <div>
                      <p className="font-display text-xl font-semibold">
                        Insta Award
                      </p>
                      <p className="text-mist-soft text-sm mt-1">
                        High performance &amp; on-time delivery of critical
                        features.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiUsers className="text-sage text-2xl shrink-0 mt-1" />
                    <div>
                      <p className="font-display text-xl font-semibold">
                        Team Excellence Award
                      </p>
                      <p className="text-mist-soft text-sm mt-1">
                        Company-wide frontend refactor &amp; QA alignment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="py-28 px-6 bg-slate-darker/60">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            kicker="02 · Skills"
            title="Three things I'm good at"
            subtitle="Not a keyword cloud — the actual shape of my work."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(profile?.skills ?? []).map((pillar, i) => (
              <Reveal key={pillar.group} delay={i * 100}>
                <div className="glow-card rounded-3xl p-8 h-full">
                  <p className="font-mono text-xs text-moss mb-3">0{i + 1}</p>
                  <h3 className="font-display text-2xl font-semibold text-sage mb-3">
                    {pillar.group}
                  </h3>
                  <p className="text-mist-soft text-sm leading-relaxed mb-6">
                    {pillar.blurb}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3.5 py-1.5 bg-moss/15 text-mist rounded-full hover:bg-sage hover:text-slate-deep transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            kicker="03 · Experience"
            title="The road so far"
          />
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="py-28 px-6 bg-slate-darker/60">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            kicker="04 · Projects"
            title="Built because I wanted to"
            subtitle="Side projects from my GitHub — each one taught me something."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80}>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <a
                href={`${profile?.social.github ?? "https://github.com/acrocks1000"}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage font-semibold hover:text-mist transition-colors underline underline-offset-4"
              >
                <FiGithub /> All repositories <FiArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WISDOM ============ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <WisdomTicker />
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="relative py-32 px-6 bg-pine overflow-hidden"
      >
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-moss/30 blur-3xl pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[26rem] h-[26rem] rounded-full bg-sage/15 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-mono text-sage text-sm tracking-[0.3em] uppercase mb-4">
              05 · Contact
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight text-mist">
              Let&apos;s build something{" "}
              <span className="italic text-sage">memorable</span>.
            </h2>
            <p className="mt-6 text-mist-soft text-lg max-w-xl mx-auto">
              Open to senior frontend roles, freelance work, and interesting
              conversations about state management at 2am.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href={`mailto:${profile?.email ?? "abhinavchaudhary0002@gmail.com"}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-sage text-slate-deep font-bold rounded-full hover:bg-mist transition-colors"
              >
                <FiMail /> {profile?.email ?? "Email me"}
              </a>
              <a
                href={`tel:${profile?.phone ?? "+918351097335"}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-sage/40 text-sage font-bold rounded-full hover:border-sage hover:bg-sage/10 transition-colors"
              >
                <FiPhone /> {profile?.phone ?? "Call me"}
              </a>
            </div>
            <div className="mt-10 flex gap-8 justify-center text-sm font-semibold">
              <a
                href={profile?.social.github ?? "https://github.com/acrocks1000"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mist-soft hover:text-mist transition-colors"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href={profile?.social.linkedin ?? "https://linkedin.com/in/acrocks1000"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mist-soft hover:text-mist transition-colors"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-slate-darker border-t border-sage/10 py-6 px-6 text-center">
        <p className="text-mist-soft/60 text-sm">
          © 2026 Abhinav Chaudhary · Next.js, TypeScript &amp; Three.js
        </p>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
