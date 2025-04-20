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
    name: "Jennifer Reynolds",
    role: "Property Developer",
    company: "Urban Properties Inc.",
    quote: "BuildRight delivered our office complex on time and under budget. Their attention to detail and proactive communication made the entire process seamless.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 2,
    name: "Robert Chang",
    role: "CEO",
    company: "Pacific Investments",
    quote: "We've partnered with BuildRight on multiple commercial projects, and they've consistently exceeded our expectations. Their craftsmanship is outstanding.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Homeowner",
    company: "",
    quote: "Our custom home was a dream come true thanks to BuildRight. They listened to our needs and delivered a beautiful, high-quality result that we love.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Hear from our satisfied clients about their experience working with BuildRight Construction.
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