import React from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
   <section id="about">
     <div className="flex justify-center items-center h-screen bg-slate-300">
      <div className="w-full max-w-5xl p-6 bg-slate-300 rounded-lg shadow-md flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-6">
          <h1 className="text-sky-600 text-4xl">About</h1>
          <div className="flex justify-between items-center mb-4">

            <img
              src="./assets/abouu.jpg"
              alt="about"
              width={350}
              height={350}
              className="md:hidden rounded-md shadow-md"
            />
          </div>
          <p className="text-gray-800 text-start">
            I'm a Senior Front End Engineer with a focus on developing cutting-edge web applications.
            My expertise lies in frontend development, software architecture, and creating scalable solutions. 
            I excel at designing user-friendly interfaces that offer exceptional experiences.
            I'm adaptable to both small and large teams and have the ability to choose the best tools for each project.
            My commitment to high-quality code and consistent design principles ensures enhanced reusability across projects.</p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              What sets me apart from other candidates:
            </p>

          </div>
          <button className="bg-sky-600 flex items-center text-white p-2 mt-6">
            Check out my Projects <FaArrowRight className="ml-2" />
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
