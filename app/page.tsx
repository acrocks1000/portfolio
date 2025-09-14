"use client";
import GradientText from "@/components/ui/GradientText/gradientText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IUser } from "./model/user";
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
    <div className="relative h-dvh max-h-screen overflow-hidden">
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
        <div className="z-50 grid grid-rows-[50px_minmax(50%,1fr)_minmax(20%,1fr)] md:grid-rows-[100px_minmax(275px,1fr)_minmax(200px,2fr)] w-dvw gap-4 m-4">
          <Navbar username={profile ? profile.name : "Home"}></Navbar>
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
              04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
