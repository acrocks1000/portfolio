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
          raysColor="#915EFF"
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
      <div className="sticky top-5 z-20">
        <Navbar username={profile ? profile.name : "Home"} />
      </div>
      <div
        className="flex"
        style={{
          maxHeight: "calc(100vh - 128px)",
          height: "calc(100vh - 128px)",
        }}
      >
        <div className="grid grid-rows-[minmax(35%,1fr)_minmax(25%,1fr)] md:grid-rows-[minmax(35%,1fr)_minmax(40%,2fr)] w-dvw gap-4 m-4 h-full">
          <div className="grid md:grid-flow-col grid-cols-6 gap-4">
            <div className="flex flex-col pl-10 justify-center align-baseline h-full flex-start flex-wrap md:col-span-3 font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
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
              <div className="name"></div>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="!m-0"
              >
                <span className="text-xl md:text-4xl">FRONT-END DEVELOPER</span>
              </GradientText>
            </div>
            <div className="h-full w-full flex md:row-span-full md:col-span-2">
              <InfoCard />
            </div>
            <div className="relative w-full h-full md:flex col-span-1 md:row-span-full hidden">
              <Image src={"/desktop.png"} alt={"Desktop"} fill />
            </div>
          </div>
          <div className="grid md:grid-rows-3 md:grid-flow-col gap-4">
            <div className="border border-white md:row-span-2 flex items-center justify-center">
              05
            </div>
            <div className="border border-white md:row-span-2 md:row-start-2 flex items-center justify-center">
              <SkillTiles skills={['angular', 'react', 'git', 'gitlab']}></SkillTiles>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-10 h-dvh max-h-screen">
        <Projects />
      </div>
    </div>
  );
}
