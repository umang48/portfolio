// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  )
}

export default App;