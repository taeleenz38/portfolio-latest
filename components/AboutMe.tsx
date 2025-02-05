import React from "react";

const AboutMe = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[850px] flex flex-col mx-auto">
        <h1>About Me</h1>
        <div className="w-full flex justify-between">
          <div className="w-[69%]">summary</div>
          <div className="w-[30%]">picture</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
