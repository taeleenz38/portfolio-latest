"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import workData, { WorkExperience } from "./data/workData";

interface WorkExperienceItemProps {
  work: WorkExperience;
  index: number;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  work,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
      transition={{ duration: 0.5 }}
      className={`w-5/6 md:h-2/5 p-4 md:p-0 border-white hover:border-accent-hover duration-200 border-[2px] flex sm:flex-row flex-col items-center justify-center md:justify-start rounded-md px-4 md:px-8 text-accent overflow-hidden ${
        index > 0 ? "mt-5" : ""
      }`}
    >
      <div className="w-1/2 md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
        <Image
          src={work.logo}
          width={200}
          height={200}
          alt={`${work.company} logo`}
          className="rounded-md object-cover"
        />
      </div>
      <div className="w-full md:w-3/4 flex flex-col px-4">
        <p className="font-bold text-accent-hover text-sm mb-2 sm:mb-0 md:text-lg">
          {work.role} @{" "}
          <a
            href={work.url}
            target="_blank"
            className="link-underline-grow text-white"
          >
            {work.company}
          </a>
        </p>
        <p className="italic text-accent-hover text-sm mb-3 md:text-lg">
          {work.duration}
        </p>
        <ul className="text-sm sm:flex flex-col gap-1 list-disc marker:text-accent-hover pl-4 hidden">
          {work.responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const WorkHistory = () => {
  return (
    <div
      id="experience"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="w-[300px] sm:w-[500px] md:w-[1100px] h-5/6 flex flex-col mx-auto justify-center items-center">
        <h1 className="w-full flex text-lg md:text-2xl items-end gap-4 mb-4 sm:mb-10">
          02.
          <span className="text-accent-hover w-fill text-xl md:text-3xl flex items-center font-bold gap-2">
            Work Experience{" "}
            <p className="w-[0px] sm:w-[150px] md:w-[275px] h-[2px] bg-accent"></p>
          </span>
        </h1>
        {workData.map((work, index) => (
          <WorkExperienceItem key={index} work={work} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
