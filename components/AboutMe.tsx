"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  // Refs for each section you want to animate
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refTech = useRef(null);

  // Detect if elements are in view
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInViewTech = useInView(refTech, { once: true });

  return (
    <div id="about" className="w-screen h-screen flex justify-center items-center">
      <div className="w-[320px] sm:w-[500px] md:w-[1100px] flex flex-col mx-auto gap-4 sm:gap-8">
        <h1 className="w-full flex text-lg md:text-2xl items-end gap-4">
          01.
          <span className="text-accent-hover text-xl md:text-3xl flex items-center gap-2 font-bold">
            About Me <p className="w-[0px] sm:w-[275px] h-[2px] bg-accent"></p>
          </span>
        </h1>
        <div className="w-full flex flex-col-reverse md:flex-row md:justify-between">
          <div className="w-[300px] sm:w-[400px] mx-auto md:mx-0 mt-4 md:mt-0 md:w-[53%] flex-col text-accent">
            <motion.p
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
              transition={{ duration: 0.5 }}
              className="mb-4 hidden md:block"
            >
              Hi, I&apos;m Tae—a full-stack developer passionate about building
              intuitive digital experiences that bridge the gap between complex
              technology and user-friendly interfaces. My journey started in 2018
              when I dove into web development to create a platform for my music
              instrumentals, discovering my love for crafting seamless user
              experiences.
            </motion.p>
            <motion.p
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
              transition={{ duration: 0.5 }}
              className="mb-4 hidden md:block"
            >
              Fast forward to 2021, and I found myself deep in the Web3
              ecosystem—exploring DeFi protocols, NFT marketplaces, and the
              fascinating world of blockchain infrastructure. This experience
              taught me the importance of making complex blockchain interactions
              feel as simple as traditional web applications.
            </motion.p>
            <motion.p
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
              transition={{ duration: 0.5 }}
              className="mb-4 hidden md:block"
            >
              Today, I work as a front-end developer at{" "}
              <a
                href="https://blockmajority.io/"
                target="_blank"
                className="link-underline-grow text-white"
              >
                Block Majority
              </a>
              , where I build user interfaces for blockchain applications that
              prioritize both functionality and user experience. I specialize in
              creating applications that make Web3 accessible to everyone, from
              DeFi platforms to RWA tokenization systems.
            </motion.p>
            <motion.p
              ref={refTech}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isInViewTech ? 1 : 0,
                y: isInViewTech ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-2 text-accent-hover"
            >
              Technologies / Tech Stack
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isInViewTech ? 1 : 0,
                y: isInViewTech ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 text-sm font-light"
            >
              <ul className="">
                <li className="mb-2">JavaScript</li>
                <li className="mb-2">React</li>
                <li className="mb-2">Node.js</li>
                <li>GraphQL</li>
              </ul>
              <ul className="">
                <li className="mb-2">TypeScript</li>
                <li className="mb-2">Next.js</li>
                <li className="mb-2">shadcn/ui</li>
                <li>GitHub</li>

              </ul>
                              <ul className="">
                  <li className="mb-2">Tailwind CSS</li>
                  <li className="mb-2">Solidity</li>
                  <li className="mb-2">Postgres</li>
                  <li>
                    <span className="block sm:hidden">GCP</span>
                    <span className="hidden sm:block">Google Cloud Platform</span>
                  </li>
                </ul>
            </motion.div>
          </div>
          <div className="sm:w-[350px] md:w-[38%] mx-auto md:mx-0 mt-1 h-fit rounded-md overflow-hidden hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_rgba(255,255,255)] duration-200 group">
            <Image
              src="/images/IMG_6593.JPG"
              width={450}
              height={450}
              alt="profile picture"
              className="group-hover:brightness-80 object-contain transition-all duration-200"
              style={{
                filter:
                  "brightness(0.6) sepia(1) hue-rotate(130deg) saturate(4)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
