import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/95 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HardHat className="h-9 w-9 text-yellow-500" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">ThongBaiContr.</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="#home">หน้าหลัก</Link>
            <Link href="#services">บริการ</Link>
            <Link href="#projects">ผลงาน</Link>
            <Link href="#about">เกี่ยวกับเรา</Link>
            <Link href="#team">ทีม</Link>
            <Link href="#testimonials">ความคิดเห็นผู้ใช้</Link>
          </nav>
          
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded transition-colors"
            >
              สอบถาม
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 hover:text-yellow-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" onClick={() => setIsOpen(false)}>หน้าหลัก</Link>
              <Link href="#services" onClick={() => setIsOpen(false)}>บริการ</Link>
              <Link href="#projects" onClick={() => setIsOpen(false)}>ผลงาน</Link>
              <Link href="#about" onClick={() => setIsOpen(false)}>เกี่ยวกับเรา</Link>
              <Link href="#team" onClick={() => setIsOpen(false)}>ทีม</Link>
              <Link href="#testimonials" onClick={() => setIsOpen(false)}>ความคิดเห็นผู้ใช้</Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded transition-colors inline-block w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                สอบถาม
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;