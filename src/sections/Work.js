import React from 'react';

const Work = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Designed and developed my personal portfolio website using React and Tailwind CSS.',
      url: 'https://developer-evan-profile.vercel.app/',
    },
    // {
    //   title: 'E-Commerce App',
    //   description: 'Built a full-stack e-commerce application with Next, Node.js, and MongoDB.',
    //   url: 'https://online-shoe-shop.vercel.app/',
    // },
    {
      title: 'Fitness and Health Monitoring  App',
      description: 'Developed a mobile  application to enhance workout for fitness and health monitoring with React Native and Firebase.',
      url: ' https://drive.google.com/file/d/1YahaDYO8bnsoepGUaQNPO7-JCO4E7ZCO/view?usp=sharing',
    },
    {
      title: 'Vessel Global Systems Website',
      description: 'Designed and developed a website for a company using Next and Tailwind CSS.',
      url: 'https://www.vesselsystems.co.ke/'
    },
    {
title: 'Cumulus  Website',
description: 'Designed and developed a website for a company using Next Typescript and Tailwind CSS.',
url: 'https://cumuluske.co.ke/'
    },
    {
      title: 'Unity Solutions Writers Website',
      description: 'I developed a writers website with admin and user dashboard using React.js and Tailwind CSS, integrating it with a Rest API. ',
      url: 'https://unitysolutionstutors.com/'

    }
   
  ];
  return (
    <section id="work-projects" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Work & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
