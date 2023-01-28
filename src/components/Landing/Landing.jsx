import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Email from "../Email/Email";
const Landing = () => {
  return (
    <div clas id="home">
      <NavBar></NavBar>
      <section  className="text-white bg-zinc-800" >
      <div className="px-4 py-28 sm:py-0 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <div className=" image overflow-hidden w-[280px] h-[280px] mx-auto md:h-[280px] md:w-[280px] rounded-full p-1 my-8 shadow-xl  bg-gradient-to-r from-blue-500 to-purple-400  ">
              <img
                src="https://res.cloudinary.com/do3picw1u/image/upload/v1674686967/IMG-20210716-WA0048_3_bjxg6r.jpg"
                alt="img"
                className="h-full w-full  mx-auto rounded-full object-cover"
              />
            </div>
            <p className="max-w-xl mx-auto  sm:leading-relaxed sm:text-xl">
              Hello World! I'm
            </p>
            <h1 className="text-8xl grid font-extrabold text-transparent sm:text-8xl bg-clip-text bg-gradient-to-r from-blue-500  to-purple-400 ">
              Lucas Colman Paganelli
              <span className=" mt-5 text-lg sm:block bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 ">
                FULLSTACK WEB DEVELOPER
              </span>
            </h1>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Email />
      <Footer />
    </div>
  );
};

export default Landing;
