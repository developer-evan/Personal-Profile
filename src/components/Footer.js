import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp,FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const menuItems = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Work & Projects", link: "#work-projects" },
    { title: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaTwitter/>,
     url: "https://twitter.com/yourusername" },
    { icon: <FaGithub/>,   url: "https://github.com/yourusername" },
    { icon: <FaWhatsapp/>,   url: "https://github.com/yourusername" },
    { icon: <FaFacebook/>,   url: "https://github.com/yourusername" },
    { icon: <FaLinkedin/>,   url: "https://github.com/yourusername" },
  ];

  const contactInfo = [
    {
      icon:<FaEnvelope/>,
      contact: "ivanmogeni254@gmail.com "
    },
    { 
      icon:<FaPhone/>,
      contact: "(123) 456-7890" },
  ];
  return (
    <section id="contact">
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-6 md:mb-0 items-start text-start">
          <h4 className="text-lg font-semibold mb-4">Menu</h4>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:underline ">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4 mb-6 md:mb-0 items-start text-start">
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li key={index} className="text-lg">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  {/* <i
                    className={`fab ${link.icon} text-xl hover:text-gray-300`}
                  ></i> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4 items-start text-start ">
          <h4 className="text-lg font-semibold   mb-4">Contact</h4>
          {contactInfo.map((info, index) => (
            <p key={index} className="text-gray-400 flex gap-2 items-center ">
             {info.icon} {info.contact}
            </p>
          ))}
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
