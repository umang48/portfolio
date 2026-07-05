// src/components/Hero.jsx
const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Building Modern <span className="text-blue-600">Web Experiences</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          I am a senior web developer with a decade of experience crafting scalable solutions across PHP, CMS platforms, and modern JavaScript frameworks. When I am not coding, I am creating technical tutorials and video content to help others master web technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
            View My Work
          </a>
          <a href="#contact" className="bg-white text-blue-600 border border-gray-200 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;