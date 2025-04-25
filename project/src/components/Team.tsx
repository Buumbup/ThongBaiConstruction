import React from 'react';
import TeamMember from './TeamMember';
import BoomImage from "../assets/boom.jpg"; 
import DadImage from "../assets/dad.jpg";

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'ช่างทองใบ',
      position: 'เจ้าของกิจการ',
      image: DadImage,
      socials: {
        Facebook: '#',
        email: 'ThongBai.Ganchang@gmail.com',
      }
    },
    {
      id: 2,
      name: 'คุณชินภัทร',
      position: 'พนักงานติดต่อสอบถาม',
      image: BoomImage,
      socials: {
        Facebook: '#',
        email: 'ThongBai.Contact@gmail.com',
      }
    },
    
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ทีมงาน</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          รวมทีมช่างมากประสบการณ์ ที่ทำงานด้วยความตั้งใจและความรักในสิ่งที่ทำ เพื่อให้งานทุกชิ้นออกมาดีที่สุด
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