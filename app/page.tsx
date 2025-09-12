"use client";
import GradientText from "@/components/ui/GradientText/gradientText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IUser } from "./model/user";
import GlitchText from "@/components/ui/GlitchText/glitchText";
import LightRays from "@/components/ui/LightRays/lightRays";
import { Navbar } from "@/components/ui/NavBar/navbar";
import { InfoCard } from "@/components/ui/InfoCard/infoCard";

export default function Home() {
  const [profile, setProfile] = useState<IUser | null>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div className="relative">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={2}
        rayLength={5}
        followMouse={false}
        mouseInfluence={0.1}
        noiseAmount={0.5}
        distortion={0.05}
        className="custom-rays absolute"
      />
      <div className="flex text-white">
        <div className="z-50 grid grid-rows-[50px_minmax(50%,1fr)_minmax(40%,1fr)] md:grid-rows-[100px_minmax(275px,1fr)_minmax(400px,2fr)] w-dvw gap-4 m-4">
          <Navbar username={profile ? profile.name : "Home"}></Navbar>
          <div className="grid md:grid-flow-col grid-cols-6 gap-4">
            <div className="flex flex-col h-full p-4 md:col-span-3">
              <GlitchText
                speed={3}
                enableShadows={true}
                enableOnHover={true}
                className="uppercase"
              >
                {profile ? profile.name : "NAME"}
              </GlitchText>
              <div className="name"></div>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                <span className="text-xl md:text-4xl">FRONT-END DEVELOPER</span>
              </GradientText>
            </div>
            <div className="h-full w-full flex md:row-span-full md:col-span-2">
              <InfoCard/>
            </div>
            <div className="border-1 border-white flex col-span-1 md:row-span-full">
              03
            </div>
          </div>
          <div className="grid md:grid-flow-col md:grid-rows-4 gap-4">
            <div className="border-1 border-white md:row-span-2 md:row-start-2 md:row-end-5">
              04
            </div>
            <div className="border-1 border-white md:row-span-3 md:row-end-4">
              05
            </div>
            <div className="border-1 border-white md:row-start-2 md:row-end-5">
              06
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
