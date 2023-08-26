
import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Home from './sections/Home'
import Skills from './sections/Skills';
import Work from './sections/Work';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App scroll-smooth">
    <Navbar/>
     <Home/>
     <About/>
     <Skills />
     <Work/>
     <Footer/>
    
    </div>
  );
}

export default App;
