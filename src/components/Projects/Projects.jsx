import React from "react";
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
    <div>
      <section>
        <div>
          <div role="main">
            <h1>Some Projects</h1>
            <p>Click on the thumbnail to open demo in a new tab</p>
          </div>
          <div>
            <div>
              <div>
                <div
                  onClick={() => window.open("https://mascotapps.vercel.app/")}
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-teal-500 rounded-2xl">
                      Frontend
                    </p>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-900 to-transparent">
                      <h2 className="text-xl font-semibold text-gray-100">
                        Crypto quoter
                      </h2>
                      <div className="flex items-center gap-1">
                        <SiHtml5 fill="orange" size={20} />
                        <SiJavascript fill="yellow" size={20} />
                        <SiTailwindcss color="#00bcd4" size={25} />
                      </div>
                    </div>
                  </div>
                  <img src="" alt="" />
                </div>
                <div
                  onClick={() => window.open("https://mascotapps.vercel.app/")}
                >
                  <div>
                    <p>FullStack</p>
                    <div>
                      <h2>Mascotapp</h2>
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
                    src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665205231/Screenshot_2022-10-08_at_01-59-35_Mascotapp_zu2kut.png"
                    alt="sitting place"
                    className="w-full h-[275px] mt-1 md:mt-1 hidden sm:block"
                  />
                </div>
              </div>
              <div>
                <div
                  onClick={() =>
                    window.open(
                      "https://github.com/lucascolm/PI-Countries-main"
                    )
                  }
                >
                  <div>
                    <p>FullStack</p>
                    <div>
                      <h2>CountriesApp - @Henry</h2>
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
                  <img src="" alt="" />
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
