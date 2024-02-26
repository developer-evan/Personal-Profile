import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {
  const [isReactOpen, setIsReactOpen] = useState(false);
  const [isFrontEndOpen, setIsFrontEndOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleFrontEnd = () => {
    setIsReactOpen(false);
    setIsFrontEndOpen(!isFrontEndOpen);
    setIsToolsOpen(false);
    setIsMobileOpen(false);
  };

  const toggleTools = () => {
    setIsReactOpen(false);
    setIsFrontEndOpen(false);
    setIsToolsOpen(!isToolsOpen);
    setIsMobileOpen(false);
  };

  const toggleMobile = () => {
    setIsReactOpen(false);
    setIsFrontEndOpen(false);
    setIsToolsOpen(false);
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <section id="about" className="bg-slate-300 p-2 my-auto py-8 ">
      <h1 className="font-semibold mb-4 text-4xl">About Me</h1>
      <div className="flex justify-center items-center  ">
        
        <div className="w-full max-w-5xl   flex flex-wrap bg-slate-300">
          <div className="w-full md:w-1/2 md:pr-6 order-2">
            
           
            <p className="text-gray-800 text-start">
              I'm a Front End Engineer and Software Engineer with a focus on
              creating responsive and highly interactive web/mobile
              applications. I am well versed in best practices for front end
              development using JavaScript (React, Vanilla) and Mobile
              Development (React Native) and User Interaction. I have built
              frontend projects that aim at changing the world.
            </p>
            
            <div className="mt-6">
              <p className="font-semibold text-gray-800">
              Proficiencies :
              </p>
              <div className="flex flex-wrap mb-4">
                <button
                  className={`mb-2 mr-4 focus:outline-none ${isFrontEndOpen ? "text-sky-600 font-medium" : "text-slate-500"}`}
                  onClick={toggleFrontEnd}
                >
                  Languages 
                </button>
                <button
                  className={` mb-2 mr-4 focus:outline-none ${isMobileOpen ? "text-sky-600 font-medium" : "text-slate-500"}`}
                  onClick={toggleMobile}
                >
                  Frameworks & Libraries
                </button>
                <button
                  className={` mb-2 focus:outline-none ${isToolsOpen ? "text-sky-600 font-medium" : "text-slate-500"}`}
                  onClick={toggleTools}
                >
                  Tools & Others
                </button>
              </div>

              {isFrontEndOpen && (
                <ul className="list-disc list-inside ml-4 flex flex-wrap gap-2 items-start">
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">HTML</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">CSS</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">JavaScript</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">TypeScript</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Dart</li>
                </ul>
              )}

              {isMobileOpen && (
                <ul className="list-disc list-inside ml-4 items-start flex flex-wrap gap-2">
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">React Native</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Flutter</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">React</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Angular</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Next</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Tailwind CSS</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Bootstrap</li>
                </ul>
              )}

              {isToolsOpen && (
                <ul className="list-disc list-inside ml-4  flex flex-wrap gap-2 items-start">
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Git</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">GitHub</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Firebase</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Netlify</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Vercel</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Trello</li>
                  <li className="list-none text-start bg-sky-500 text-white px-2  py-1 rounded-xl">Jira</li>
                </ul>
              )}
            </div>
          </div>
         
          <div className="flex justify-center items-center mx-auto order-1">
            <img
              src="./assets/passp.png"
              alt="about"
              width={350}
              height={350}
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
