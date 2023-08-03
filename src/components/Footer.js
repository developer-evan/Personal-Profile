import React from 'react';

const Footer = ({ socialLinks, contactInfo, menuItems }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Menu</h4>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${link.icon} text-xl hover:text-gray-300`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">{contactInfo}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
