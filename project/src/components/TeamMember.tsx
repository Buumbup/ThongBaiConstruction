import React from 'react';
import { Facebook, Mail } from 'lucide-react';

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    position: string;
    image: string;
    socials: {
      Facebook: string;
      email: string;
    };
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-yellow-500 font-medium mb-3">{member.position}</p>
        <div className="flex space-x-3 mt-4">
          <a 
            href={member.socials.Facebook} 
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} className="text-gray-700" />
          </a>
          <a 
            href={`mailto:${member.socials.email}`} 
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} className="text-gray-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;