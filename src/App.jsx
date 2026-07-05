// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* A simple footer to close out the page */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App;