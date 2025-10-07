import { useState, useEffect } from 'react';
import { Moon, Sun} from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

// Mail, Linkedin, Github, ExternalLink, Calendar, MapPin 

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    setDarkMode(savedMode === 'true');
  } else {
    // Default is already dark, so no need to change unless system prefers light
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) setDarkMode(false);
  }
}, []);


  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
        ) : (
          <Moon className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
        )}
      </button>

      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © 2025 Shifa Shafi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
