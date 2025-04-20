import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="p-3 bg-yellow-500 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ExternalLink size={24} />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
          {project.category}
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;