import React from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <div className="flex justify-center items-center h-screen bg-slate-300">
        <div className="w-full max-w-5xl p-4 bg-slate-300 rounded-lg shadow-md flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-6">
            <h1 className="text-sky-600 mb-2 text-4xl">About</h1>
            <div className="flex justify-center items-center mb-4">
              <img
                src="./assets/abouu.jpg"
                alt="about"
                width={350}
                height={350}
                className="md:hidden rounded-md shadow-md"
              />
            </div>
            <p className="text-gray-800 text-start">
              I'm a Front End Engineer and Software Engineer with a focus on
              creating responsive and highly interactive web/mobile
              applications. I am well versed in best practices for front end
              development using JavaScript (React, Vanilla) and Mobile
              Development (React Native) and User Interaction. I have built
              frontend projects that aim at changing the world..
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                What sets me apart from other candidates:
              </p>
            </div>
            <button className="bg-sky-600 rounded-xl  text-white hover:bg-white hover: hover:text-sky-600 hover:border hover:border-sky-600  p-2 mt-6">
              <a href="#work-projects" className="items-center  hover:text-sky-600 flex">
                Check out my Projects <FaArrowRight className="ml-2" />
              </a>
            </button>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img
              src="./assets/abouu.jpg"
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
