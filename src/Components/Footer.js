import React from 'react';
import { FaGithub, FaLinkedin} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-lime-900 mt-10 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover" href='#about'>About</a> 
    <a className="link link-hover" href='#contact'>Contact</a> 
    <a className="link link-hover" href='#projects'>Projects</a> 
    <a className="link link-hover" href='#skills'>Skills</a>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <a className='text-3xl' href='https://www.linkedin.com/in/mabbasaliofficial'><FaLinkedin/></a> 
      <a className='text-3xl' href='https://www.github.com/mabbasaliofficial'><FaGithub/></a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by Abbas Ali</p>
  </div>
</footer>
    );
};

export default Footer;