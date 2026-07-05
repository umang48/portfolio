// src/components/Skills.jsx
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technical Arsenal</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-white transition-colors duration-300 shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;