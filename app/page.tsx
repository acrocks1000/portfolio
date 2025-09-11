"use client";
import GradientText from "@/components/ui/GradientText/gradientText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IUser } from "./model/user";
import GlitchText from "@/components/ui/GlitchText/glitchText";

export default function Home() {
  const [profile, setProfile] = useState<IUser | null>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div className="flex text-white h-dvh">
      <div className="grid grid-rows-[50px_minmax(50%,1fr)_minmax(40%,1fr)] md:grid-rows-[150px_minmax(275px,1fr)_minmax(400px,1fr)] w-dvw gap-4 m-4">
        <div className="border-1 border-white">00</div>
        <div className="grid md:grid-flow-col md:grid-rows-1 gap-4">
          <div className="border-1 border-white">
            <div className="flex flex-col h-full p-4">
              <GlitchText
                speed={3}
                enableShadows={true}
                enableOnHover={false}
                className="custom-class"
              >
                {profile ? profile.name.toUpperCase() : "NAME"}
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
          </div>
          <div className="border-1 border-white row-span-3 md:row-span-full col-span-2">
            02
          </div>
          <div className="border-1 border-white row-span-3 md:row-span-full">
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
  );
}
