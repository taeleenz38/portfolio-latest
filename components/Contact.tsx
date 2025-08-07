"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  return (
    <div
      id="contact"
      className="w-screen h-dvh md:h-screen flex justify-center items-center"
    >
      <div className="w-[260px] sm:w-[400px] md:w-[600px] flex flex-col mx-auto justify-center items-center">
        <motion.h1
          ref={ref1}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 80 }}
          transition={{ duration: 0.5 }}
          className="text-md md:text-xl mb-4"
        >
          04. What&apos;s Next?
        </motion.h1>
        <motion.h1
          ref={ref2}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 80 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-6xl text-accent-hover font-bold mb-6"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          ref={ref3}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 80 }}
          transition={{ duration: 0.5 }}
          className="text-center text-accent mb-12 text-sm md:text-md"
        >
          Feel free to reach out - whether you have a question about frontend
          development, want to discuss potential collaborations, or just wish to
          connect, I&apos;m always eager to respond. Let&apos;s talk!
        </motion.p>
        <motion.a
          ref={ref4}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 80 }}
          transition={{ duration: 0.5 }}
          href="mailto:taekyu.lee3@gmail.com"
        >
          <button className="border-[1px] px-3 py-1 md:px-6 md:py-2 text-md md:text-lg lg:px-8 lg:py-4 rounded-md border-white hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[3px_3px_0px_rgba(255,255,255)] duration-200">
            Email Me
          </button>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
