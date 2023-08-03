
import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Home from './sections/Home'
import Skills from './sections/Skills';
import Work from './sections/Work';
import Footer from './components/Footer';

const skillsData = [
  {
    title: 'Web Development',
    description: 'Proficient in HTML, CSS, and JavaScript. Experienced with React and Tailwind CSS.',
  },
  {
    title: 'UI/UX Design',
    description: 'Skilled in creating intuitive and visually appealing user interfaces.',
  },
  // Add more skills as needed
];
const projectsData = [
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
  // Add more projects as needed
];

const menuItems = [
  { title: 'Home', link: '#' },
  { title: 'About', link: '#about' },
  { title: 'Skills', link: '#skills' },
  { title: 'Work & Projects', link: '#work-projects' },
  { title: 'Contact', link: '#contact' },
];

const socialLinks = [
  { icon: 'fa-twitter', url: 'https://twitter.com/yourusername' },
  { icon: 'fa-github', url: 'https://github.com/yourusername' },
  // Add more social media links as needed
];

const contactInfo = 'contact@example.com • Phone: (123) 456-7890';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
     <About/>
     <Skills skills={skillsData} />
     <Work projects={projectsData}/>
     <Footer menuItems={menuItems} socialLinks={socialLinks} contactInfo={contactInfo} />
    
    </div>
  );
}

export default App;
