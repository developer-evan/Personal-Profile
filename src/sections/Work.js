import React from 'react';

const Work = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Designed and developed my personal portfolio website using React and Tailwind CSS.',
      url: 'https://www.example.com/portfolio',
    },
    {
      title: 'E-Commerce App',
      description: 'Built a full-stack e-commerce application with React, Node.js, and MongoDB.',
      url: 'https://www.example.com/ecommerce',
    },
   
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
