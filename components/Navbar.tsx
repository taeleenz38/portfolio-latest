import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-12 text-accent">
      <div>LOGO</div>
      <div className="flex items-center gap-10 text-sm">
        <a href="" className="hover:text-secondary duration-150 font-medium ">
          <span className="text-white">01.</span> About
        </a>
        <a href="" className="hover:text-secondary duration-150 font-medium ">
          <span className="text-white">02.</span> Experience
        </a>
        <a href="" className="hover:text-secondary duration-150 font-medium ">
          <span className="text-white">03.</span> Work
        </a>
        <a href="" className="hover:text-secondary duration-150 font-medium ">
          <span className="text-white">04.</span> Contact
        </a>
        <button className="text-white font-medium border-[1px] rounded-md px-4 py-2 transition-transform hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[2px_2px_0px_0px] duration-300">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
