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

interface Project {
  id: string;
  image: string;
  alt: string;
  title: string;
  year: string;
  link: string;
  description: string[];
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>("myriad");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const projects: Project[] = [
    {
      id: "myriad",
      image: "/images/LEON.png",
      alt: "myriad industries",
      title: "Myriad Industries",
      year: "2024",
      link: "https://myriad-industries-leon.vercel.app/",
      description: [
        "A minimal portfolio website for Leon Koumouris (architect and university tutor).",
        "Responsive website compatible with multiple browsers and display sizes.",
        "Built using Cursor, Next.js, Javascript + Tailwind CSS",
      ],
    },
    {
      id: "dlabs",
      image: "/images/DLABS.png",
      alt: "delicious labs",
      title: "Delicious Labs",
      year: "2022",
      link: "https://delicious-labs-sandy.vercel.app/",
      description: [
        "Main website for Delicious Labs, a Web3 collective.",
        "Responsive website compatible with multiple browsers and display sizes.",
        "Implements horizontal scrolling instead of the traditional scroll direction.",
        "Built using VSCode, Next.js, Javascript + Tailwind CSS",
      ],
    },
    {
      id: "bored",
      image: "/images/BORED.png",
      alt: "bored token (memecoin)",
      title: "Bored Token",
      year: "2022",
      link: "https://boredtoken-steel.vercel.app/",
      description: [
        "Official website for Bored Token - ERC20 token launched by flur.eth (founder of Flur Labs).",
        "Responsive website compatible with multiple browsers and display sizes.",
        "Built using VSCode, Next.js, Javascript + Tailwind CSS",
      ],
    },
    {
      id: "fttc",
      image: "/images/FTTC.jpg",
      alt: "fttc token (memecoin)",
      title: "FTTC Token",
      year: "2022",
      link: "https://ftx-classic-amber.vercel.app/",
      description: [
        "Official website for FTX Classic - ERC20 token launched by flur.eth (founder of Flur Labs).",
        "Responsive website compatible with multiple browsers and display sizes.",
        "Built using VSCode, Next.js, Javascript + Tailwind CSS",
      ],
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <motion.h1
        ref={ref1}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 40 }}
        transition={{ duration: 0.5 }}
        className="w-[900px] flex text-2xl items-end gap-4 mb-10"
      >
        03.
        <span className="text-accent-hover w-fill text-3xl flex items-center font-bold gap-2">
          Things I&apos;ve Built <p className="w-[275px] h-[2px] bg-accent"></p>
        </span>
      </motion.h1>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 40 }}
        transition={{ duration: 0.5 }}
        className="w-[900px] flex text-2xl items-end gap-4 mb-10"
      >
        <Carousel className="w-[900px]">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className={`transition-colors duration-300 border-2 hover:border-accent-hover ${
                    activeProject === project.id
                      ? "border-accent-hover"
                      : "border-white"
                  }`}
                >
                  <CardContent className="flex flex-col justify-center items-center p-4 hover:border-accent-hover">
                    <Image
                      src={project.image}
                      width={400}
                      height={400}
                      alt={project.alt}
                      className="rounded-md aspect-square cursor-pointer"
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 40 }}
          transition={{ duration: 0.5 }}
          className="w-[800px] h-[160px] flex flex-col"
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
