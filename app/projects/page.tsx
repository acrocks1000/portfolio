"use client";
import { Navbar } from "@/components/ui/NavBar/navbar";
import LightRays from "@/components/ui/LightRays/lightRays";
import { Projects } from "../projects";

export default function ProjectsPage() {
  return (
    <div className="relative text-white min-h-screen">
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
        <Navbar username="Projects" />
      </div>

      <div className="pt-20">
        <Projects />
      </div>

      {/* Footer */}
      <footer className="border-t border-[#740580] border-opacity-20 py-8 px-4 text-center text-gray-400">
        <p>&copy; 2026 Developer. All rights reserved. Built with React & Next.js</p>
      </footer>
    </div>
  );
}
