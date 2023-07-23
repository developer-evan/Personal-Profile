
import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Home from './sections/Home'
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
     <About/>
    </div>
  );
}

export default App;
