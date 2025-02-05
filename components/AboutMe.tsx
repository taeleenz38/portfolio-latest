import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[1000px] flex flex-col mx-auto gap-8">
        <h1 className="w-full flex text-2xl items-end gap-4">
          01.
          <span className="text-accent-hover text-3xl flex items-center gap-2 font-bold">
            About Me <p className="w-[275px] h-[2px] bg-accent"></p>
          </span>
        </h1>
        <div className="w-full flex justify-between">
          <div className="w-[55%] flex-col text-accent">
            <p className="mb-4">
              Hi, I&apos;m Tae and I specialize in crafting user-centered
              websites with a focus on clean UX/UI. My journey into web
              development began in 2018 when I was looking to create a platform
              for my music instrumentals.
            </p>
            <p className="mb-4">
              By 2021, my curiosity had shifted towards the Web3 landscape,
              exploring everything from NFTs to the wild world of memecoins.
              I&apos;ve been particularly fascinated by the potential of
              blockchain technology, especially in the tokenization of Real
              World Assets (RWA).
            </p>
            <p className="mb-4">
              My main focus these days is building blockchain solutions with
              sleek UX/UI at{" "}
              <a
                href="https://blockmajority.io/"
                target="_blank"
                className="link-underline-grow text-white"
              >
                Block Majority
              </a>{" "}
              for a variety of clients.
            </p>
            <p className="font-extrabold mb-2 text-accent-hover">Technologies / Tech Stack</p>
            <div className="grid grid-cols-3 text-sm font-light">
              <ul className="">
                <li className="mb-2">JavaScript (ES6+)</li>
                <li className="mb-2">React</li>
                <li>Node.js</li>
              </ul>
              <ul className="">
                <li className="mb-2">TypeScript</li>
                <li className="mb-2">Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
              <ul className="">
                <li className="mb-2">shadcn/ui</li>
                <li className="mb-2">Solidity</li>
                <li>Postgres</li>
              </ul>
            </div>
          </div>
          <div className="w-[35%] h-fit rounded-xl overflow-hidden hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_rgba(255,255,255)] duration-200 group">
            <Image
              src="/images/IMG_6593.JPG"
              width={350}
              height={350}
              alt="profile picture"
              className="grayscale group-hover:grayscale-0 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
