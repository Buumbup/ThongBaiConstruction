import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://wallpapercat.com/w/full/0/5/d/704512-1920x1280-desktop-hd-thomas-shelby-peaky-blinders-wallpaper-photo.jpg")',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-gray-900/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          เติมเต็มทุกความต้องการ <span className="text-yellow-400">สร้างสรรค์ทุกความสำเร็จ</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          วางใจในบริการก่อสร้างของเรา ด้วยประสบการณ์กว่า 25 ปี ที่มุ่งมั่นสร้างสรรค์ที่อยู่อาศัย อาคารพาณิชย์ และต่อเติมโครงสร้างอย่างมืออาชีพและซื่อสัตย์
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition-colors duration-300 inline-flex items-center"
            >
              ปรึกษาฟรี <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#projects"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-md transition-colors duration-300"
            >
              รับชมผลงานของเรา
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#services">
          <div className="rounded-full bg-white/20 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;