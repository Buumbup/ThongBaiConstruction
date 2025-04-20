import React from 'react';
import { HardHat, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <HardHat className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold tracking-tight">BuildRight</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building excellence through quality construction, innovative design, and exceptional service since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-yellow-500 after:rounded pb-2">Our Services</span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Residential Construction</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Commercial Buildings</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Industrial Facilities</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Project Management</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Design & Planning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-yellow-500 after:rounded pb-2">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-yellow-500 transition-colors">Projects</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-yellow-500 transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-yellow-500 after:rounded pb-2">Contact Info</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3">📍</span>
                <span className="text-gray-400">1234 Construction Ave, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">📞</span>
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">📧</span>
                <a href="mailto:info@buildright.com" className="text-gray-400 hover:text-yellow-500 transition-colors">info@buildright.com</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">🕒</span>
                <span className="text-gray-400">Mon-Fri: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BuildRight Construction. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 p-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;