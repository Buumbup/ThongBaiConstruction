import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A 15-story office building with state-of-the-art facilities and sustainable design.'
  },
  {
    id: 2,
    title: 'Luxury Residential Tower',
    category: 'residential',
    image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Premium condominiums with high-end finishes and panoramic city views.'
  },
  {
    id: 3,
    title: 'Manufacturing Plant',
    category: 'industrial',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A 50,000 sq ft manufacturing facility designed for maximum efficiency and safety.'
  },
  {
    id: 4,
    title: 'Community Recreation Center',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Multi-purpose facility with sports courts, swimming pool, and event spaces.'
  },
  {
    id: 5,
    title: 'Custom Family Home',
    category: 'residential',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Bespoke 4-bedroom residence with custom finishes and smart home technology.'
  },
  {
    id: 6,
    title: 'Logistics Warehouse',
    category: 'industrial',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Large-scale distribution center with advanced logistics systems.'
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            View our portfolio of completed projects across residential, commercial, and industrial sectors.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap gap-2 md:gap-4 p-1 bg-gray-100 rounded-lg">
            {['all', 'residential', 'commercial', 'industrial'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-md capitalize transition-colors ${
                  activeFilter === filter 
                    ? 'bg-yellow-500 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;