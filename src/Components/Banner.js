import React from "react";
import logo from "../Assets/Images/Abbas Ali.png"
import resume from "../Assets/Resume/Resume_Of_Abbas_Ali.pdf"


const Banner = () => {
  return (
    <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={logo} className="shadow-2xl rounded-full lg:w-1/3" alt=""/>
      <div className="lg:w-1/2">
        <h1 className="lg:text-5xl font-bold text-2xl">Full Stack Developer</h1>
        <p className="py-6 lg:w-4/5">As a web developer, I'm always passionate about new technologies & skills. I'm always looking for new skills & experiences...</p>
        <a className="btn btn-primary" href={resume} download="Abbas Ali.pdf">Resume</a>
        <a className="btn btn-primary ml-4" href="#contact">Contact</a>
      </div>
    </div>
  </div>
  );
};

export default Banner;
