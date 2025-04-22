import React from 'react';
import { Clock, Award, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { id: 1, value: '25+', label: 'ปีประสบการณ์', icon: <Clock className="h-8 w-8 text-yellow-500" /> },
    { id: 2, value: '1000+', label: 'โปรเจ็คที่เสร็จแล้ว', icon: <CheckCircle className="h-8 w-8 text-yellow-500" /> },
    { id: 3, value: '90%', label: 'ลูกค้าประจำและบอกต่อ', icon: <Award className="h-8 w-8 text-yellow-500" /> },
    { id: 4, value: '10+', label: 'ทีมงานช่าง', icon: <Users className="h-8 w-8 text-yellow-500" /> },
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
                  <p className="text-sm uppercase font-medium tracking-wider">ปี ประสบการณ์</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">เกี่ยวกับร้านทองใบการช่าง</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
            ก่อตั้งขึ้นในปี พ.ศ. 2545 ร้านทองใบการช่างเริ่มต้นจากร้านงานเหล็กเล็ก ๆ ในชุมชน และเติบโตอย่างมั่นคงจนเป็นหนึ่งในร้านช่างเหล็กที่ได้รับความไว้วางใจในพื้นที่ ด้วยความใส่ใจในคุณภาพงานฝีมือ ความตรงต่อเวลา และความพึงพอใจของลูกค้า เรามุ่งมั่นที่จะส่งมอบงานเหล็กที่แข็งแรง สวยงาม และตอบโจทย์ทุกการใช้งาน ทั้งในบ้าน อาคารพาณิชย์ และโครงการอุตสาหกรรม
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
            ร้านทองใบการช่างมีทีมช่างผู้ชำนาญการ ที่มากด้วยประสบการณ์ ความตั้งใจ และความประณีตในทุกขั้นตอนของงาน ไม่ว่าจะเป็นงานออกแบบหรือติดตั้ง เราทำงานใกล้ชิดกับลูกค้า ตั้งแต่เริ่มต้นแนวคิดไปจนถึงส่งมอบงาน เพื่อให้ผลงานออกมาตรงตามความต้องการ ด้วยความพิถีพิถันและใส่ใจในทุกรายละเอียด
            </p>
            
            <div className="flex flex-wrap space-y-4 md:space-y-0">
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>ช่างมืออาชีพ มีประสบการณ์จริง</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>วัสดุคุณภาพ งานเนี๊ยบทุกขั้นตอน</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>ตรงเวลา ส่งมอบงานตามนัด</span>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-3">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>ราคาชัดเจน ไม่บวกราคาแอบแฝง</span>
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