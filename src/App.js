
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <About />
    <Skills />
    <Project />
    <Contact />
   </div>
  );
}

export default App;
