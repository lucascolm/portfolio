import React from "react";
import "../Languages/Languages.css";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiJsonwebtokens,
  SiRedux,
  SiMaterialui,
  SiReact,
  SiTailwindcss,
  SiLeaflet,
  SiWechat,
  SiStripe,
  SiAuth0,
  SiPaypal,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiSequelize,
  SiPostgresql,
  SiMinutemailer,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { GrStorage } from "react-icons/gr";
const Projects = () => {
  return (
    <div id="projects" className=" bg-zinc-800">
      <section className="flex justify-center items-center bg-zinc-800 md:py-14 relative ">
        <div className="mx-auto md:px-8 px-4 ">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className=" text-3xl font-bold text-center text-amber-400 ">
              Some Projects
            </h1>
            <p className="text-base leading-normal text-center text-white dark:text-white mt-2 lg:w-1/2 md:w-10/12 w-11/12">
              Click on the thumbnail to open demo in a new tab
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-6 mt-8">
            <div className=" mt-1 sm:mt-0">
              <div className="sm:flex items-center justify-between gap-x-1">
                <div className="sm:w-1/2 relative  hover:cursor-pinter contrast-50 hover:contrast-100"
                  onClick={() => window.open("https://github.com/lucascolm/sistema_acreditaciones_back")}
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-mediun leading-3 text-black absolute top-8 right-2 bg-amber-500 rounded-2xl">
                      Fullstack</p>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-900 to-transparent">
                      <h2 className="text-xl font-semibold text-gray-100">Sistema de acreditaciones</h2>
                      <div className="flex items-center gap-1">
                      <SiReact color="#00bcd4" size={22} />
                      <SiRedux color="#673ab7" size={22} />
                      <SiCss3 color="#00bcd4" size={20} />
                      <SiNodedotjs color="#ffc107" size={22} />
                      <SiExpress color="#673ab7" size={22} />
                      <SiPostgresql color="#3850d6" size={22} />
                      <SiSequelize color="#0097a7" size={22} />
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-[275px] mt-1 md:mt-1 hidden sm:block"
                  src="https://res.cloudinary.com/do3picw1u/image/upload/v1674685142/acc_m2tzua.png" alt="" />
                </div>
                <div
                className="sm:w-1/2 relative mt-1 sm:mt-0 hover:cursor-pointer contrast-50 hover:contrast-100"
                  onClick={() => window.open("https://mascotapp.vercel.app/")}
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-amber-500 rounded-2xl"
                    >FullStack</p>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-900 to-transparent">
                      <h2 className="text-xl font-semibold text-gray-100" 
                      >Mascotapp</h2>
                      <div className="flex item-center gap-1">
                        <SiReact color="#00bcd4" size={22} />
                        <SiRedux color="#673ab7" size={22} />
                        <SiJsonwebtokens color="#e91e63" size={22} />
                        <SiLeaflet color="#8bc34a" size={22} />
                        <SiWechat color="#7bdcb5" size={22} />
                        <SiStripe color="#03a9f4" size={20} />
                        <SiAuth0 color="#ff9800" size={20} />
                        <SiPaypal color="#4fc3f7" size={20} />
                        <GrStorage className="lstorage" size={20} />
                        <SiTailwindcss color="#00bcd4" size={22} />
                        <SiMaterialui color="#004dcf" size={22} />
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <SiNodedotjs color="#ffc107" size={22} />
                        <SiTypescript color="#00bcd4" size={22} />
                        <SiExpress color="#673ab7" size={22} />
                        <SiPostgresql color="#3850d6" size={22} />
                        <SiSequelize color="#0097a7" size={22} />
                        <SiMinutemailer color="#8bc34a" size={22} />
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/do3picw1u/image/upload/v1674662601/masco_ioxgfl.png"
                    alt="sitting place"
                    className="w-full h-[275px] mt-1 md:mt-1 hidden sm:block"
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-1 hover:cursor-pointer contrast-50 hover:contrast-100"
                  onClick={() =>
                    window.open(
                      "https://github.com/lucascolm/PI-Countries-main"
                    )
                  }
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-amber-500 rounded-2xl"
                    >FullStack</p>
                    <div className="absolute bottom-0 left-0 md:p-4 p-4 w-full bg-gradient-to-r from-gray-900  to-transparent">
                      <h2 className="text-xl font-semibold 5 text-gray-50">
                        CountriesApp - @Henry</h2>
                      <div className="flex items-center gap-1">
                        <SiReact color="#00bcd4" size={22} />
                        <SiRedux color="#673ab7" size={22} />
                        <SiCss3 color="#00bcd4" size={20} />
                        <SiNodedotjs color="#ffc107" size={22} />
                        <SiExpress color="#673ab7" size={22} />
                        <SiPostgresql color="#3850d6" size={22} />
                        <SiSequelize color="#0097a7" size={22} />
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-[275px] mt-1 md:mt-1 hidden sm:block"
                  src="https://res.cloudinary.com/do3picw1u/image/upload/v1674686617/countries_zc4ksy.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
