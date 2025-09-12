"use client";
import { useCallback, useEffect, useState } from "react";

export function InfoCard() {
  const [frontendWisdoms, setFrontendWisdoms] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/frontend-wisdoms")
      .then((res) => res.json())
      .then((data) => setFrontendWisdoms(data))
      .catch(() => setFrontendWisdoms([]));
  }, []);

  const getRandomFrontendWisdom = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * frontendWisdoms.length);
    return frontendWisdoms[randomIndex];
  }, [frontendWisdoms]);

  // Example usage:
  const [randomWisdom, setRandomWisdom] = useState<string>(frontendWisdoms[0]);

  useEffect(() => {
    setRandomWisdom(getRandomFrontendWisdom());
  }, [getRandomFrontendWisdom]);
  return (
    <div className="w-full bg-gray-900/90 shadow-xl shadow-slate-500/40 border-3 font-inter tracking-widest rounded-xl border-gray-300 font-bold">
      <div className="min-h-4 border-b-2 border-gray-300 py-4 px-6 w-full">
        <span className="rounded-4xl mx-2 border-1 border-red-900 bg-red-600 min-w-4 min-h-4 inline-block relative right-0"></span>
        <span className="rounded-4xl mx-2 border-1 border-green-900 bg-green-600 min-w-4 min-h-4 inline-block"></span>
        <span className="rounded-4xl mx-2 border-1 border-blue-900 bg-blue-600 min-w-4 min-h-4 inline-block"></span>
      </div>
      <div className="block p-5">
        <div className="flex items-center mb-2">
          <span className="text-blue-500 font-mono text-base mr-2">
            function
          </span>
          <span className="text-white font-bold text-lg">WisdomDrop()</span>
        </div>
        <div className="pl-6 text-sm md:text-base text-gray-200 font-mono whitespace-pre-wrap">
          {"{"}
          <br />
          <span className={`inline-block pl-5`}>
            console.
            <span className="text-cyan-400 font-mono text-base">log</span>
            (“
            <span
              className={`transition-opacity duration-700 ease-in ${
                randomWisdom ? "opacity-100" : "opacity-25"
              }`}
            >
              {randomWisdom ? randomWisdom : "Loading...wait..."}
            </span>
            ”)
          </span>
          <br />
          {"}"}
        </div>
      </div>
    </div>
  );
}
