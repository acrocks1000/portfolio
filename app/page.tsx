"use client";
import GradientText from "@/components/ui/GradientText/gradientText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IUser } from "./model/user";
import LightRays from "@/components/ui/LightRays/lightRays";
import { Navbar } from "@/components/ui/NavBar/navbar";
import { InfoCard } from "@/components/ui/InfoCard/infoCard";
import { Projects } from "./projects";
import { SkillTiles } from "@/components/ui/skillTiles/skillTiles";

export default function Home() {
  const [profile, setProfile] = useState<IUser | null>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div className="relative text-white">
      {/* Fixed LightRays background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#740580"
          raysSpeed={1.5}
          lightSpread={2}
          rayLength={5}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.5}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>
      <div className="fixed top-5 z-20 w-full">
        <Navbar username={profile ? profile.name : "Home"} />
      </div>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Left: Hero Text */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col pl-4 md:pl-10 font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] text-white">
              {profile ? (
                <div>
                  Hi, I&apos;m&nbsp;
                  <div className="inline-block text-[#915EFF] capitalize">
                    {profile.name}
                  </div>
                </div>
              ) : (
                "Hello"
              )}
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="!m-0 mt-2"
              >
                <span className="text-xl md:text-4xl">FRONT-END DEVELOPER</span>
              </GradientText>
            </div>
            <div className="pl-4 md:pl-10 text-gray-300 text-lg max-w-lg">
              <p>Crafting beautiful, responsive web experiences with modern technologies. Passionate about clean code, performance optimization, and bringing designs to life.</p>
            </div>
            <div className="pl-4 md:pl-10 flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-[#F2C447] to-[#FF1D68] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#740580] transition-all">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-[#740580] text-white font-bold rounded-lg hover:bg-[#740580] hover:bg-opacity-10 transition-all">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Info Card & Desktop Image */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex justify-center">
              <InfoCard />
            </div>
            <div className="relative w-full hidden md:flex h-64">
              <Image src={"/desktop.png"} alt={"Desktop"} fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#F2C447] to-[#FF1D68] bg-clip-text text-transparent">
              Skillset
            </span>
          </h2>
          <div className="flex justify-center mb-16">
            <SkillTiles skills={['angular', 'react', 'git', 'gitlab', 'js', 'html', 'typescript']}></SkillTiles>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#740580] rounded-lg bg-[#740580] bg-opacity-5 hover:bg-opacity-10 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[#F2C447]">Frontend</h3>
              <p className="text-gray-300">Expert in React, Angular, and modern CSS. Building responsive, performant UIs with focus on user experience.</p>
            </div>
            <div className="p-6 border border-[#740580] rounded-lg bg-[#740580] bg-opacity-5 hover:bg-opacity-10 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[#FF1D68]">TypeScript</h3>
              <p className="text-gray-300">Writing strongly-typed, maintainable code. Ensuring scalability and catching bugs early with TS.</p>
            </div>
            <div className="p-6 border border-[#740580] rounded-lg bg-[#740580] bg-opacity-5 hover:bg-opacity-10 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[#F2C447]">Version Control</h3>
              <p className="text-gray-300">Proficient with Git workflows, GitLab CI/CD pipelines, and collaborative development practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-[#740580] to-opacity-5">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#FF1D68] to-[#F2C447] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I&apos;m a passionate front-end developer with 5+ years of experience building web applications that users love. My journey in web development started with a curiosity about how things work on the internet, and it evolved into a career dedicated to creating seamless digital experiences.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I believe in clean code, attention to detail, and continuous learning. Whether it&apos;s optimizing performance, implementing new features, or refactoring legacy code, I approach every challenge with enthusiasm and professionalism.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-[#F2C447] bg-[#F2C447] bg-opacity-5">
                <h3 className="text-2xl font-bold text-black mb-2">50+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="p-6 border-l-4 border-[#FF1D68] bg-[#FF1D68] bg-opacity-5">
                <h3 className="text-2xl font-bold text-[#FF1D68] mb-2">30+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="p-6 border-l-4 border-[#740580] bg-[#740580] bg-opacity-5">
                <h3 className="text-2xl font-bold text-[#740580] mb-2">5+</h3>
                <p className="text-gray-300">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-[#F2C447] to-[#FF1D68] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-4 text-lg">A selection of recent works and case studies</p>
        </div>
        <div className="h-dvh max-h-screen">
          <Projects />
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-[#F2C447] to-[#FF1D68] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="space-y-8">
            <div className="p-6 border border-[#740580] rounded-lg bg-[#740580] bg-opacity-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-[#F2C447]">Senior Frontend Developer</h3>
                <span className="text-gray-400 text-sm">2022 - Present</span>
              </div>
              <p className="text-[#FF1D68] font-semibold mb-3">Tech Innovations Inc.</p>
              <p className="text-gray-300">Led development of customer-facing applications, mentored junior developers, and implemented performance optimizations resulting in 40% faster load times.</p>
            </div>
            <div className="p-6 border border-[#740580] rounded-lg bg-[#740580] bg-opacity-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-[#F2C447]">Frontend Developer</h3>
                <span className="text-gray-400 text-sm">2020 - 2022</span>
              </div>
              <p className="text-[#FF1D68] font-semibold mb-3">Digital Solutions Ltd.</p>
              <p className="text-gray-300">Developed responsive web applications using React and Angular. Collaborated with designers and backend teams to deliver high-quality features.</p>
            </div>
            <div className="p-6 border border-[#740580] rounded-lg bg-[#740580] bg-opacity-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-[#F2C447]">Junior Web Developer</h3>
                <span className="text-gray-400 text-sm">2019 - 2020</span>
              </div>
              <p className="text-[#FF1D68] font-semibold mb-3">StartUp Hub</p>
              <p className="text-gray-300">Built responsive websites and web applications. Contributed to the development of internal tools and frameworks used across the organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-gray-300 text-xl mb-12">
            I&apos;m always interested in hearing about new projects and opportunities. Let&apos;s connect!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-[#F2C447] to-[#FF1D68] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#740580] transition-all text-lg">
              Get In Touch
            </button>
            <button className="px-10 py-4 border-2 border-[#740580] text-white font-bold rounded-lg hover:bg-[#740580] hover:bg-opacity-10 transition-all text-lg">
              Download Resume
            </button>
          </div>
          <div className="mt-12 flex gap-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-[#F2C447] transition-colors text-2xl">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-[#F2C447] transition-colors text-2xl">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#F2C447] transition-colors text-2xl">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-[#F2C447] transition-colors text-2xl">Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#740580] border-opacity-20 py-8 px-4 text-center text-gray-400">
        <p>&copy; 2026 {profile?.name || "Developer"}. All rights reserved. Built with React & Next.js</p>
      </footer>
    </div>
  );
}
