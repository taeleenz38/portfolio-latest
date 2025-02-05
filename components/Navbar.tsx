"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [elementsVisible, setElementsVisible] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 5) {
        setIsHidden(true);
      } else if (scrollTop < lastScrollTop || scrollTop <= 5) {
        setIsHidden(false);
      }
      // Add shadow when scrolled down even by 1 pixel
      setHasShadow(scrollTop > 0);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const delays = [0, 100, 200, 300, 400, 500];
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

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 bg-primary flex justify-between items-center py-4 px-12 text-accent transition-all duration-300 ${
        isHidden ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
      } ${hasShadow ? "shadow-md shadow-white" : ""}`}
    >
      <a href="/" onClick={handleScrollToTop}>
        <Image
          src="/images/LOGO.svg"
          width={75}
          height={75}
          alt="logo"
          className={`${
            elementsVisible[0]
              ? "translate-y-0 opacity-100"
              : "translate-y-[-30px] opacity-0"
          } transition-all duration-250 text-2xl font-bold text-white hover:cursor-pointer`}
        />
      </a>
      <div className="flex items-center gap-10 text-sm">
        <a
          href=""
          className={`hover:text-secondary duration-150 font-medium ${
            elementsVisible[1]
              ? "translate-y-0 opacity-100"
              : "translate-y-[-30px] opacity-0"
          } transition-all duration-300`}
        >
          <span className="text-white">01.</span> About
        </a>
        <a
          href=""
          className={`hover:text-secondary duration-150 font-medium ${
            elementsVisible[2]
              ? "translate-y-0 opacity-100"
              : "translate-y-[-30px] opacity-0"
          } transition-all duration-300`}
        >
          <span className="text-white">02.</span> Experience
        </a>
        <a
          href=""
          className={`hover:text-secondary duration-150 font-medium ${
            elementsVisible[3]
              ? "translate-y-0 opacity-100"
              : "translate-y-[-30px] opacity-0"
          } transition-all duration-300`}
        >
          <span className="text-white">03.</span> Work
        </a>
        <a
          href=""
          className={`hover:text-secondary duration-150 font-medium ${
            elementsVisible[4]
              ? "translate-y-0 opacity-100"
              : "translate-y-[-30px] opacity-0"
          } transition-all duration-300`}
        >
          <span className="text-white">04.</span> Contact
        </a>
        <button
          className={`text-white font-medium border-white border-[1px] rounded-md px-4 py-2 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[3px_3px_0px_rgba(255,255,255)] duration-300 ${
            elementsVisible[5]
              ? "translate-y-0 opacity-100"
              : "translate-y-[-30px] opacity-0"
          } transition-all duration-300`}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
