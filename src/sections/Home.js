import React from "react";
// link
// import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="bg-gray-100 py-12 px-3 md:py-16 ">
      <div className="items-center justify-center mb-36">
        <p className="mt-28">Lets Build something together</p>
        <h1 className="text-5xl font-bold py-8">
          Hello I'm <span className="text-sky-600">Evans</span>
        </h1>
        <h1 className="text-5xl font-bold">Software Engineer</h1>
        <p className="pt-8">
          I’m focused on building responsive frontend Web and Mobile
          applications while learning & exploring other technologies.
        </p>
        <div className="flex justify-center mt-14">
          {/* <div className=" bg-sky-600 text-3xl text-white  rounded-full w-14 h-14 p-4 mx-2 flex justify-center items-center shadow-md hover:translate-y-2">
            <a href="/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div> */}
          <p className="bg-sky-600 text-white pr-16 rounded-full  mx-2 flex justify-center items-center shadow-md transform transition-transform hover:scale-105">
            <a
              href="https://github.com/developer-evan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 px-2 md:px-4 py-2"
            >
              <FaGithub className="text-3xl" />
              <span className="sm:inline">GitHub</span>
            </a>
          </p>

          <p className="bg-sky-600 text-white pr-12 rounded-full mx-2 flex justify-center items-center shadow-md transform transition-transform hover:scale-105">
            <a
              href="https://www.linkedin.com/in/evans-mogeni-a48636235/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 px-2 md:px-4 py-2"
            >
              <FaLinkedinIn className="text-3xl" />
              <span className="sm:inline">LinkedIn</span>
            </a>
          </p>
          {/* <a href="/" target="_blank" rel="noreferrer">
            <div className=" bg-sky-600 text-3xl text-white  rounded-full w-14 h-14 p-4 mx-2 flex justify-center items-center shadow-md hover:translate-y-2">
              <FaInstagram />
            </div>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
