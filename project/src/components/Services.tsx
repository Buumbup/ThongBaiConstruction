import React from 'react';
import { Building2, Home, Warehouse, HardHat, PencilRuler, Truck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'งานโครงสร้างเหล็ก',
      description: 'รับออกแบบและติดตั้งงานโครงสร้างเหล็กทุกประเภท เช่น โครงหลังคาเหล็ก, ประตูรั้วเหล็ก, ราวบันไดเหล็ก, งานเหล็กดัด',
      icon: <Home className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 2,
      title: 'งานโครงหลังคา',
      description: 'รับติดตั้งโครงหลังคาเหล็กทุกรูปแบบ เช่น หลังคาโรงงาน, หลังคาบ้านพักอาศัย, หลังคาโรงจอดรถ',
      icon: <Building2 className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 3,
      title: 'งานปูน',
      description: 'รับเหมางานปูนทุกชนิด เช่น งานก่ออิฐฉาบปูน, งานเทพื้นคอนกรีต, งานเทคาน, งานเทเสา',
      icon: <Warehouse className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 4,
      title: 'มุ้งลวด',
      description: 'รับติดตั้งมุ้งลวดทุกชนิด เช่น มุ้งลวดบานเลื่อน, มุ้งลวดบานเปิด, มุ้งลวดม้วนเก็บ',
      icon: <HardHat className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 5,
      title: 'ประตูเหล็กดัด',
      description: 'รับออกแบบและติดตั้งประตูเหล็กดัดทุกรูปแบบ เช่น ประตูรั้วเหล็กดัด, ประตูหน้าต่างเหล็กดัด',
      icon: <PencilRuler className="h-12 w-12 text-yellow-500" />,
    },
    {
      id: 6,
      title: 'บูรณะซ่อมแซม',
      description: 'รับเหมางานบูรณะซ่อมแซมบ้านและอาคารทุกประเภท เช่น งานซ่อมแซมโครงสร้าง, งานซ่อมแซมหลังคา',
      icon: <Truck className="h-12 w-12 text-yellow-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">บริการของเรา</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          เราให้บริการก่อสร้างแบบครบวงจร ตั้งแต่การออกแบบจนถึงงานก่อสร้างแล้วเสร็จ โดยปรับให้เหมาะกับความต้องการของคุณโดยเฉพาะ
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