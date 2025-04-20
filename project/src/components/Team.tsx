import React from 'react';
import TeamMember from './TeamMember';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'James Wilson',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
        email: 'james@buildright.com',
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Chief Architect',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@buildright.com',
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Project Manager',
      image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@buildright.com',
      }
    },
    {
      id: 4,
      name: 'Rebecca Martinez',
      position: 'Interior Designer',
      image: 'https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
        email: 'rebecca@buildright.com',
      }
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Meet the talented professionals who make our success possible. Our team brings decades of
            combined experience and passion to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;