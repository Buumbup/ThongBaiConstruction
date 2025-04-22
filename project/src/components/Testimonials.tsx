import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "คุณJohn Doe",
    role: "เจ้าของบ้าน",
    company: "",
    quote: "We were impressed by Thongbai Karnchang’s professionalism. The project was completed on schedule, with great quality and no budget surprises",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 2,
    name: "คุณเชน",
    role: "เจ้าของโรงงาน",
    company: "Plastic Products Co.",
    quote: "เราร่วมงานกับร้านทองใบการช่างในหลายโครงการ ทั้งงานโครงเหล็กและงานต่อเติมต่าง ๆ ทุกครั้งก็ไม่เคยผิดหวัง งานเรียบร้อย แข็งแรง และตรงเวลา เป็นร้านที่ไว้ใจได้จริง ๆ",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 3,
    name: "คุณสมชิด ทองประดับ",
    role: "เจ้าของบ้าน",
    company: "",
    quote: "งานเหล็กบ้านเราออกมาสวย แข็งแรง และตรงใจมาก ต้องขอบคุณร้านทองใบการช่างที่ใส่ใจทุกรายละเอียด ฟังความต้องการเราทุกขั้นตอน แล้วก็ทำออกมาได้เป๊ะจริง ๆ",
    image: "https://images.pexels.com/photos/3760819/pexels-photo-3760819.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ความคิดเห็นผู้ใช้</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          ดูว่าลูกค้ารู้สึกอย่างไรหลังใช้บริการจากร้านทองใบการช่าง
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute -top-5 left-10 text-yellow-500">
              <Quote size={40} />
            </div>
            
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <p className="text-gray-700 text-lg md:text-xl italic mb-8 pt-6">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
                  <p className="text-gray-600">
                    {testimonials[current].role}
                    {testimonials[current].company && `, ${testimonials[current].company}`}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-8 flex space-x-2">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  current === index ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;