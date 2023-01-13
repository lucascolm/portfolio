import React from "react";


const NavBar = () => {
  return (
   <nav className="fixed left-0 top-0 w-full bg-zinc-800 z-200">
    <div className="container flex items-center justify-center p-6 mx-auto capitalize text-gray-300">
      <a href="#home"
      className="border-b-2 border-transparent hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6 ">
      Home
      </a>
      <a href="#about"
       className="border-b-2 border-transparent hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6 ">
        About me
      </a>
      <a href="#projects"
       className="border-b-2 border-transparent hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6 ">
        Projects
      </a>
      <a href="#about"
       className="border-b-2 border-transparent hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6 ">
        Contact
      </a>
    </div>
   </nav> 
  )
}

export default NavBar