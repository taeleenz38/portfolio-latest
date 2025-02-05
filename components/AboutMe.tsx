"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

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
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[900px] flex flex-col mx-auto gap-8">
        <h1 className="w-full flex text-2xl items-end gap-4">
          01.
          <span className="text-accent-hover text-3xl flex items-center gap-2 font-bold">
            About Me <p className="w-[285px] h-[2px] bg-accent"></p>
          </span>
        </h1>
        <div className="w-full flex justify-between">
          <div className="w-[53%] flex-col text-accent">
            <motion.p
              ref={ref1}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 25 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              Hi, I&apos;m Tae and I specialize in crafting user-centered
              websites with a focus on clean UX/UI. My journey into web
              development began in 2018 when I was looking to create a platform
              for my music instrumentals.
            </motion.p>
            <motion.p
              ref={ref2}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 25 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              By 2021, my curiosity had shifted towards the Web3 landscape,
              exploring everything from NFTs to the wild world of memecoins.
              I&apos;ve been particularly fascinated by the potential of
              blockchain technology, especially in the tokenization of Real
              World Assets (RWA).
            </motion.p>
            <motion.p
              ref={ref3}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 25 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
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
            </motion.p>
            <motion.p
              ref={refTech}
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: isInViewTech ? 1 : 0,
                y: isInViewTech ? 0 : 25,
              }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-2 text-accent-hover"
            >
              Technologies / Tech Stack
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: isInViewTech ? 1 : 0,
                y: isInViewTech ? 0 : 25,
              }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 text-sm font-light"
            >
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
            </motion.div>
          </div>
          <div className="w-[38%] mt-2 h-fit rounded-md overflow-hidden hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_rgba(255,255,255)] duration-200 group">
            <Image
              src="/images/IMG_6593.JPG"
              width={350}
              height={350}
              alt="profile picture"
              className="group-hover:brightness-80 transition-all duration-200"
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
