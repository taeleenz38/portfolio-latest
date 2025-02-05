"use client";
import React, { useEffect, useState } from "react";

const Landing = () => {
  const [elementsVisible, setElementsVisible] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const delays = [700, 750, 800, 850];
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setElementsVisible((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, delay);
    });
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center z-20">
      <div className="w-[1000px] flex flex-col justify-start gap-y-4">
        <p
          className={`text-white ${
            elementsVisible[0]
              ? "translate-y-0 opacity-100"
              : "translate-y-[50px] opacity-0"
          } text-md font-medium transition-all duration-500`}
        >
          Hi, my name is
        </p>
        <h1
          className={`text-accent-hover text-7xl font-bold ${
            elementsVisible[1]
              ? "translate-y-0 opacity-100"
              : "translate-y-[50px] opacity-0"
          } transition-all duration-500`}
        >
          Tae Lee.
        </h1>
        <h1
          className={`text-accent text-7xl font-bold ${
            elementsVisible[2]
              ? "translate-y-0 opacity-100"
              : "translate-y-[50px] opacity-0"
          } transition-all duration-500`}
        >
          I Craft Web Experiences.
        </h1>
        <p
          className={`w-3/5 text-accent font-medium ${
            elementsVisible[3]
              ? "translate-y-0 opacity-100"
              : "translate-y-[50px] opacity-0"
          } transition-all duration-500`}
        >
          I&apos;m a software engineer who excels in developing (and
          occasionally designing) extraordinary digital experiences. Currently,
          I&apos;m focused on building accessible, human-centered blockchain
          solutions at {" "}
          <a
            href="https://blockmajority.io/"
            target="_blank"
            className="link-underline-grow text-white"
          >
            Block Majority.
          </a>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Landing;
