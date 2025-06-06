"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WorkHistory = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div
      id="experience"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="w-[300px] sm:w-[500px] md:w-[750px] flex flex-col mx-auto justify-center items-center">
        <h1 className="w-full flex text-lg md:text-2xl items-end gap-4 mb-4 sm:mb-10">
          02.
          <span className="text-accent-hover w-fill text-xl md:text-3xl flex items-center font-bold gap-2">
            Work Experience{" "}
            <p className="w-[0px] sm:w-[150px] md:w-[275px] h-[2px] bg-accent"></p>
          </span>
        </h1>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 80 }}
          transition={{ duration: 0.5 }}
          className="w-5/6 border-accent hover:border-accent-hover duration-200 border-[2px] flex sm:flex-row flex-col items-center rounded-md p-4 text-accent overflow-hidden"
        >
          <div className="overflow-hidden">
            <Image
              src="/images/BM-LOGO.png"
              width={130}
              height={130}
              alt="block majority logo"
              className="rounded-md mb-2 sm:mb-0"
            />
          </div>
          <div className="flex flex-col px-4">
            <p className="font-bold text-accent-hover text-sm mb-2 sm:mb-0 md:text-lg">
              Junior Software Engineer @{" "}
              <a
                href="https://blockmajority.io/"
                target="_blank"
                className="link-underline-grow text-white"
              >
                Block Majority
              </a>
            </p>
            <p className="italic text-accent-hover text-sm md:text-lg">
              August 2023 ~ present
            </p>
            <ul className="text-sm sm:flex flex-col gap-1 list-disc marker:text-accent-hover pl-4 hidden">
              <li>
                Smart contract development/deployment
                (solidity/truffle/hardhat).
              </li>
              <li>
                Produced responsive websites compatible with multiple browsers
                and display sizes.
              </li>
              <li>
                Optimized web applications for speed, scalability and security.
              </li>
              <li>
                Collected, defined and translated user requirements into project
                designs and implementation plans.
              </li>
              <li>
                Took concepts, produced design mockups and prototypes to
                strengthen designs, enhance user experiences and improve site
                interactions.
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 80 }}
          transition={{ duration: 0.5 }}
          className="w-5/6 border-accent hover:border-accent-hover duration-200 border-[2px] flex sm:flex-row flex-col items-center rounded-md p-4 text-accent overflow-hidden mt-5"
        >
          {" "}
          <div className="overflow-hidden">
            <Image
              src="/images/FLURLABS-LOGO.png"
              width={130}
              height={130}
              alt="flur labs logo"
              className="rounded-md mb-2 sm:mb-0"
            />
          </div>
          <div className="flex flex-col px-4">
            <p className="font-bold text-accent-hover text-sm md:text-lg mb-2 sm:mb-0">
              Front End Developer @{" "}
              <a
                href="https://x.com/FlurLabs"
                target="_blank"
                className="link-underline-grow text-white"
              >
                Flur Labs
              </a>
            </p>
            <p className="italic text-accent-hover text-sm md:text-lg">
              August 2022 ~ December 2022
            </p>
            <ul className="text-sm sm:flex flex-col gap-1 list-disc marker:text-accent-hover pl-4 hidden">
              <li>Dapp development - predominantly frontend.</li>
              <li>
                Smart contract development/deployment (solidity/
                truffle/hardhat).
              </li>
              <li>
                Worked with in-house UI designers to translate figma designs
                into frontend code.
              </li>
              <li>
                Coded using Next.js, HTML, CSS and Javascript to develop
                features for both mobile and desktop platforms.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkHistory;
