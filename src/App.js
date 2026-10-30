
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');

    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    revealElements.forEach((element) => element.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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
