import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Home() {
  return (
    <div className="items-center justify-center mb-36">
      <p className="mt-28">Lets Build something together</p>
      <h1 className="text-5xl font-bold py-8">
        Hello I'm <span className="text-sky-600">Evans</span>
      </h1>
      <h1 className="text-5xl font-bold">Full Stack Engineer</h1>
      <p className="pt-8">
        I’m focused on building responsive fullstack web applications while
        learning & exploring other technologies.
      </p>
      <div className="flex justify-center mt-14">
        <div className=" bg-sky-600 text-3xl text-white  rounded-full w-14 h-14 p-4 mx-2 flex justify-center items-center shadow-md hover:translate-y-2">
          <FaFacebook />
        </div>
        <div className="bg-sky-600 text-3xl text-white  rounded-full w-14 h-14 p-4 mx-2 flex justify-center items-center shadow-md hover:translate-y-2">
          <FaGithub />
        </div>
        <div className="bg-sky-600 text-3xl text-white rounded-full w-14 h-14 p-4 mx-2 flex justify-center items-center shadow-md hover:translate-y-2">
          <FaLinkedinIn />
        </div>
        <div className=" bg-sky-600 text-3xl text-white  rounded-full w-14 h-14 p-4 mx-2 flex justify-center items-center shadow-md hover:translate-x-2">
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default Home;
