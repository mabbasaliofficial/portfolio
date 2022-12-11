import React from "react";
import logo from "../Assets/Images/Abbas Ali.png"
import resume from "../Assets/Resume/Resume_Of_Abbas_Ali.pdf"


const Banner = () => {
  return (
    <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={logo} className="shadow-2xl rounded-full w-1/3" alt=""/>
      <div className="w-1/2">
        <h1 className="text-5xl font-bold">Full Stack Developer</h1>
        <p className="py-6">I am a Full Stack Web Developer. I have experience in both front-end and back-end development. I can develop high-quality web applications that are responsive, powerful, modern style, and visually attractive.</p>
        <a className="btn btn-primary ml-4" href={resume} download={resume}>Resume</a>
        <button className="btn btn-primary ml-4">Contact</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;
