import React from "react";

const AboutMe = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[900px] flex flex-col justify-start gap-y-4">
        <p className="text-white text-md">Hi, my name is</p>
        <h1 className="text-accent-hover text-7xl font-semibold">Tae Lee.</h1>
        <h1 className="text-accent text-7xl font-semibold">
          I Craft Web Experiences.
        </h1>
        <p className="w-1/2">
          I&apos;m a software engineer who excels in developing (and sometimes
          crafting the design of) extraordinary digital experiences. Currently,
          I&apos;m focused on building accessible, human-centered blockchain
          solutions at Block Majority, helping Web2 companies transition into
          the Web3 space.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;
