import React from "react";
import { SiLinkedin, SiGithub, SiNetlify, SiGmail } from "react-icons/si";
const SideBar = () => {
  return (
    <nav className="flex gap-4 mx-auto mt-4">
      <div
        className="flex justify-center items- center px-1 py-1.5 relative group outline outline-offset-2 outline-1 outline-blue-400 rounded hover:cursor-pointer hover:animate-pulse "
        onClick={() =>
          window.open("https://www.linkedin.com/in/gonzalo-fara-377404212/")
        }
      >
        <SiLinkedin size={28} fill="#60a5fa" />
      </div>

      <div
        className="flex justify-center items- center px-1 py-1.5 relative group outline outline-offset-2 outline-1 outline-blue-400 rounded hover:cursor-pointer hover:animate-pulse "
        onClick={() => window.open("https://github.com/gonzalofara")}
      >
        <SiGithub size={28} fill="#60a5fa" />
      </div>

      <div
        className="flex justify-center items- center px-1 py-1.5 relative group outline outline-offset-2 outline-1 outline-blue-400 rounded hover:cursor-pointer hover:animate-pulse "
        onClick={() =>
          window.open("https://app.netlify.com/teams/fonsofara/sites")
        }
      >
        <SiNetlify size={28} fill="#60a5fa" />
      </div>
      <a
        href="#contact"
        className="flex justify-center items- center px-1 py-1.5 relative group outline outline-offset-2 outline-1 outline-blue-400 rounded hover:cursor-pointer hover:animate-pulse "
      >
        <SiGmail size={28} fill="#60a5fa" />
      </a>
    </nav>
  );
};

export default SideBar;