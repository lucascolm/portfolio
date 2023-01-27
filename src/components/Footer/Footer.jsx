import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

  /* <div className="flex justify-center text-color-amber-500">
        <p>&copy; 2022 All rights reserved..</p>
      </div> */

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-8 pb-8 sm:px-6 lg:px-8">
        <div className="mt-20 border-t border-white/25 pt-8 sm:flex sm:items-center sm:justify-between">
          <nav className="flex justify-center gap-4 text-sm font-medium sm:justify-start">
            <a href="#home" className="hover:opacity-75"> Home </a>
            <a href="#about" className="hover:opacity-75"> About me </a>
            <a href="#projects" className="hover:opacity-75"> Projects </a>
            <a href="#contact" className="hover:opacity-75"> Contact </a>
          </nav>
          <div className="mt-6 flex justify-center gap-6 sm:mt-0 sm:justify-end">
            <div
            className="rounded-full border border-white/25 p-2 hover:opacity-75 hover:cursor-pointer" 
            onClick={()=>window.open("https://www.linkedin.com/in/lucas-colman-paganelli-2a9086186/")}>   
              <SiLinkedin/>
           </div>
           <div className="rounded-full border border-white/25 p-2 hover:opacity-75 hover:cursor-pointer"
           onClick={()=>window.open("https://github.com/lucascolm")}>
           <SiGithub/>
           </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
