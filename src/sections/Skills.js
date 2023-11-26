import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'Frontend Web Development',
      description: 'Proficient in HTML, CSS, and JavaScript. Experienced with React, Next, Angular and Tailwind CSS.',
    },
    // {
    //   title: 'UI/UX Design',
    //   description: 'Skilled in creating intuitive and visually appealing user interfaces.',
    // },
    {
      title: 'Mobile Development',
      description: 'Experienced in mobile app development using React Native. Proficient in creating engaging user interfaces, integrating APIs, and leveraging device features to develop robust and user-friendly mobile applications.',
    },

  ];
  return (
    <section id="skills" className="bg-gray-100 py-32 md:py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
