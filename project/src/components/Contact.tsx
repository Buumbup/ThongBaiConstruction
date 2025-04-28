import React, { useState } from 'react';
import { Mail, Phone, MapPin, BookAIcon} from 'lucide-react';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ติดต่อเรา</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          มีงานโปรเจ็คในใจ หรือต้องการข้อมูลเพิ่มเติมใช่ไหม? ติดต่อทีมงานของเราได้เลยวันนี้
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          <div>
            <div className="bg-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">สามารถติดต่อเราได้ที่นี่</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">ที่อยู่ร้าน</h4>
                    <p className="text-gray-300">
                    375 ซอย ลาซาล ถนน ลาซาล<br />
                    ถ.สุขุมวิท 105 แขวงบางนาใต้<br />
                    เขตบางนา กรุงเทพมหานคร 10260
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">อีเมล์ของเรา</h4>
                    <p className="text-gray-300">ThongBai.Ganchang@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">โทรติดต่อ</h4>
                    <p className="text-gray-300">081-837-9679</p>
                    <p className="text-gray-300">094-186-4686</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                    <BookAIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">ID Line</h4>
                    <p className="text-gray-300">081-837-9679</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold text-lg mb-4">เวลาทำการ</h4>
                <div className="text-gray-300 space-y-2">
                  <div className="flex justify-between">
                    <span>วันจันทร์ - ศุกร์:</span>
                    <span>8:00  - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>วันเสาร์:</span>
                    <span>8:00  - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>วันอาทิตย์:</span>
                    <span>8:00  - 17:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;