// src/components/Projects.jsx
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Featured Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;