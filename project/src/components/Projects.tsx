import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'งานโครงสร้างเหล็ก',
    category: 'โครงสร้างเหล็กและหลังคา',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'โครงสร้างเหล็กที่แข็งแรงและยืดหยุ่น ออกแบบมาเพื่อรองรับการใช้งานที่มั่นคงและยาวนาน'
  },
  {
    id: 2,
    title: 'งานซ่อมแซมโครงสร้างและหลังคา',
    category: 'งานก่อสร้างและงานปูน',
    image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'บริการซ่อมแซมโครงสร้างและหลังคาอย่างครบวงจร ทั้งการเสริมความแข็งแรงของโครงสร้าง และการแก้ไขปัญหารั่วซึม เพื่อยืดอายุการใช้งานของอาคาร'
  },
  {
    id: 3,
    title: 'มุ้งลวดบานเลื่อน บานเปิด',
    category: 'งานมุ้งลวดและประตูหน้าต่าง',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'มุ้งลวดคุณภาพสูง ดีไซน์สวยงาม ใช้งานสะดวก มีทั้งแบบบานเลื่อน บานเปิด และม้วนเก็บ เพื่อรองรับทุกการใช้งาน'
  },
  {
    id: 4,
    title: 'โครงหลังคา',
    category: 'โครงสร้างเหล็กและหลังคา',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'โครงหลังคาอเนกประสงค์สำหรับบ้าน โรงงาน และโรงจอดรถ มั่นคง ปลอดภัย และคงทนในระยะยาว'
  },
  {
    id: 5,
    title: 'งานเทพื้นคอนกรีต เทคาน เทเสา ก่ออิฐ ฉาบปูน',
    category: 'งานก่อสร้างและงานปูน',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'งานเทพื้น เทคาน และเทเสา ด้วยมาตรฐานวิศวกรรมที่แม่นยำ มั่นคง ทนทาน และตอบโจทย์งานก่อสร้างทุกรูปแบบ'
  },
  {
    id: 6,
    title: 'ประตูรั้วเหล็กดัด ประตูหน้าต่างเหล็กดัด',
    category: 'งานมุ้งลวดและประตูหน้าต่าง',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'ประตูรั้วและหน้าต่างเหล็กดัดที่แข็งแรง ปลอดภัย และสวยงาม เพิ่มทั้งฟังก์ชันและความโดดเด่นให้กับบ้านและอาคาร'
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ทั้งหมด');
  
  const filteredProjects = activeFilter === 'ทั้งหมด' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ผลงานของเรา</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          ชมผลงานที่ผ่านมาในงานโครงสร้างเหล็กและหลังคา งานก่อสร้างและงานปูน และงานมุ้งลวดและประตูหน้าต่าง
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap gap-2 md:gap-4 p-1 bg-gray-100 rounded-lg">
            {['ทั้งหมด', 'งานก่อสร้างและงานปูน', 'โครงสร้างเหล็กและหลังคา', 'งานมุ้งลวดและประตูหน้าต่าง'].map((filter) => (
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