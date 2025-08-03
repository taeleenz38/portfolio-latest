"use client";
import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { projects } from "./data/projectsData";

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>("aspx");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div
      id="projects"
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <motion.h1
        ref={ref1}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 80 }}
        transition={{ duration: 0.5 }}
        className="w-[230px] sm:w-[400px] md:w-[650px] lg:w-[1100px] flex text-lg md:text-2xl items-end gap-4 mb-4 sm:mb-10"
      >
        03.
        <span className="text-accent-hover w-fill text-xl md:text-3xl flex items-center font-bold gap-2">
          Things I&apos;ve Built{" "}
          <p className="w-[0px] sm:w-[150px] md:w-[275px] h-[2px] bg-accent"></p>
        </span>
      </motion.h1>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 80 }}
        transition={{ duration: 0.5 }}
        className="w-[200px] sm:w-[300px] md:w-[650px] lg:w-[1100px] flex text-2xl justify-center items-end gap-4 mb-4 sm:mb-10"
      >
        <Carousel className="w-[650px] lg:w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className={`transition-colors duration-300 border-2 p-4 hover:border-accent-hover ${
                    activeProject === project.id
                      ? "border-accent-hover"
                      : "border-white"
                  }`}
                >
                  <CardContent className="flex flex-col justify-center items-center p-4 hover:border-accent-hover">
                    <Image
                      src={project.image}
                      width={300}
                      height={300}
                      alt={project.alt}
                      className="rounded-md aspect-square cursor-pointer object-contain"
                      onClick={() => setActiveProject(project.id)}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>

      {activeProject !== null && (
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 80 }}
          transition={{ duration: 0.5 }}
          className="w-[230px] sm:w-[300px] md:w-[600px] lg:w-[1100px] h-[160px] flex flex-col"
        >
          <div className="flex">
            <a
              href={projects.find((p) => p.id === activeProject)?.link || "#"}
              target="_blank"
              className="w-fit text-white link-underline-grow"
            >
              {projects.find((p) => p.id === activeProject)?.title}
            </a>
            <span className="ml-1 text-accent-hover">
              [{projects.find((p) => p.id === activeProject)?.year}]
            </span>
          </div>
          <ul className="text-sm flex flex-col gap-1 list-disc marker:text-accent-hover pl-4">
            {projects
              .find((p) => p.id === activeProject)
              ?.description.map((desc, index) => (
                <li key={index} className="text-accent">
                  {desc}
                </li>
              ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
