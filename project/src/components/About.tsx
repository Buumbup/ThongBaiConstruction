import React from 'react';
import { Clock, Award, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { id: 1, value: '25+', label: 'Years Experience', icon: <Clock className="h-8 w-8 text-yellow-500" /> },
    { id: 2, value: '150+', label: 'Projects Completed', icon: <CheckCircle className="h-8 w-8 text-yellow-500" /> },
    { id: 3, value: '30+', label: 'Industry Awards', icon: <Award className="h-8 w-8 text-yellow-500" /> },
    { id: 4, value: '85+', label: 'Team Members', icon: <Users className="h-8 w-8 text-yellow-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Construction team" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg shadow-xl">
                  <p className="text-2xl md:text-3xl font-bold">25+</p>
                  <p className="text-sm uppercase font-medium tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About BuildRight Construction</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 1998, BuildRight Construction has grown from a small local contractor to one of the most respected construction firms in the region. Our commitment to quality, safety, and client satisfaction has established our reputation for excellence.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              We employ a team of highly skilled professionals who bring expertise, dedication, and craftsmanship to every project. From concept to completion, we work closely with our clients to ensure their vision is realized with precision and care.
            </p>
            
            <div className="flex flex-wrap space-y-4 md:space-y-0">
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Licensed & Insured Professionals</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Quality Materials & Workmanship</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>On-Time Project Completion</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Transparent Pricing & Contracts</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map(stat => (
            <div key={stat.id} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <p className="text-3xl font-bold text-yellow-500 mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;