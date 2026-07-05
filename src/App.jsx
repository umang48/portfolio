// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* We will build and add the Projects, Skills, and Contact sections here next */}
      </main>
    </div>
  )
}

export default App;