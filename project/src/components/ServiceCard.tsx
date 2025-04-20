import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <a 
        href="#contact" 
        className="inline-flex items-center text-yellow-500 font-medium group-hover:text-yellow-600 transition-colors"
      >
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default ServiceCard;