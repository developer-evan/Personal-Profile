import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <div className="flex justify-around  bg-slate-300">
      
      <div className="text-start w-1/2">
      <h1 className="text-sky-600 text-4xl p-2">About</h1>
        <p>
          Well, I’ve been working on web app development for two years now,
          while still studying at college. Having my own projects, coded mostly
          in Node JS and React JS, I have learned a lot while working on these
          projects. Now I am looking to get an internship to get some
          experience, and am glad to be interviewing with you here.
        </p>
        <div className="mt-4">
          <p>
            These are some qualities that I think sets me apart from other
            candidates
          </p>
          <p className="flex">
            <FaCheckCircle className="text-sky-600 text-4xl" /> One of the
            things that distinguish me from other candidates is that I am able
            to remain calm and focused no matter how difficult the task. I
            always try to stay positive and find a way out. I am sure that
            everything happens for a reason and that any mistake can be fixed.
          </p>
          {/* <p><FaCheckCircle/></p>
            <p><FaCheckCircle/></p>
            <p><FaCheckCircle/></p> */}
        </div>
        <button className="bg-sky-600 flex items-center text-white  p-2 justify-between mt-3">Check my Projects  <FaArrowRight/></button>
      </div>
      <div className="p-4">
        <img src="./assets/abouu.jpg" alt="about" width={350} height={350} />
      </div>
    </div>
  );
}

export default About;
