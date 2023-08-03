import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
