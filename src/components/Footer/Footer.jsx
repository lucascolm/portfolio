import React from "react";
import { SiLinkedin, SiGithub, SiNetlify } from "react-icons/si";
{
  /* <div className="flex justify-center text-color-amber-500">
        <p>&copy; 2022 All rights reserved..</p>
      </div> */
}
const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white">
      <div>
        <div>
          <nav>
            <a href="#home"> Home </a>
            <a href="#about"> About me </a>
            <a href="#proyects"> Projects </a>
            <a href="#contact"> Contact </a>
          </nav>
          <div>
            <div onClick={()=>window.open("https://www.linkedin.com/in/lucas-colman-paganelli-2a9086186/")}>   
              <SiLinkedin/>
           </div>
           <div onClick={()=>window.open("https://github.com/lucascolm")}></div>
           <SiGithub/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
