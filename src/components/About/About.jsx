import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-white bg-zinc-800 py-12">
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">About me</h2>
            <p className="mt-4 text-gray-300">
              Hi! I'm Lucas, I started in the IT world in high school where I
              had my first contact with some languages like C and java.So I
              decided to enter Henry'sBootcamp to become a Fullstack Developer,
              where they have also incorporated me into their staff as a T.A
              (Teacher's Assistant) to help students clear their doubts,
              consolidate concepts and practice code with the aim of preparing
              them even more for their exams. I love challenges, teamwork,
              taking initiative and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-20">
            <div  className=" p-1 my-8 shadow-xl
            bg-gradient-to-r from-blue-400  to-purple-400 rounded-2xl hover:shadow-purple-600/10 hover:border-purple-600/10">
              <div className="block p-6 bg-zinc-800 sm:p-8 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="transparent"
                  className="stroke-1 stroke-amber-500 w-1/4 h-2/6 my-auto mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-5 w-full">
                  <h5 className="text-xl font-bold text-center text-gray-300 w-full">
                    Experience
                  </h5>
                  <p className="mt-2 text-sm text-center text-gray-500">
                    Trainee
                  </p>
                </div>
              </div>
            </div>
            <div className=" p-1 my-8 shadow-xl
            bg-gradient-to-r from-blue-400  to-purple-400 rounded-2xl hover:shadow-purple-600/10 hover:border-purple-600/10" >
                  
              <div className="block p-6 bg-zinc-800 sm:p-8 rounded-xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="stroke-1 stroke-amber-500 w-1/4 h-2/6 my-auto mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <div className="mt-5 w-full">
                  <h5 className="text-xl font-bold text-center text-gray-300 w-full">
                    Languages
                  </h5>
                  <p className="mt-2 text-sm text-center text-gray-500">
                    Spanish - English
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1 my-8 shadow-xl bg-gradient-to-r from-blue-400  to-purple-400 rounded-2xl hover:shadow-purple-600/10 hover:border-purple-600/10">
              <div className="block p-6 bg-zinc-800 sm:p-8 rounded-xl ">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="stroke-1 stroke-amber-500 w-1/4 h-2/6 my-auto mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <div className="mt-5 w-full">
                  <h5 className="text-xl font-bold text-center text-gray-300 w-full">
                    Soft Skills
                  </h5>
                  <p className="mt-2 text-sm text-center text-gray-500">
                    Organized & proactive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
