import React from 'react';
import { Building2, Home, Warehouse, HardHat, PencilRuler, Truck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and additions tailored to your lifestyle and preferences.',
      icon: <Home className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 2,
      title: 'Commercial Buildings',
      description: 'Offices, retail spaces, and hospitality projects designed for functionality and impact.',
      icon: <Building2 className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 3,
      title: 'Industrial Facilities',
      description: 'Warehouses, factories, and production facilities built for efficiency and durability.',
      icon: <Warehouse className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 4,
      title: 'Project Management',
      description: 'Full-service oversight of your construction project from concept to completion.',
      icon: <HardHat className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 5,
      title: 'Design & Planning',
      description: 'Expert architectural planning and design services to bring your vision to life.',
      icon: <PencilRuler className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 6,
      title: 'Material Supply',
      description: 'Quality construction materials sourced from trusted suppliers at competitive prices.',
      icon: <Truck className="h-12 w-12 text-yellow-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We offer comprehensive construction solutions tailored to meet your specific needs, 
            from concept to completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;