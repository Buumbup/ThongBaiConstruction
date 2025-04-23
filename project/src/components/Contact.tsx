import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          มีงานโปรเจ็คในใจ หรือต้องการข้อมูลเพิ่มเติมใช่ไหม? ติดต่อทีมงานของเราได้เลยวันนี้
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <p className="text-gray-300">ThongBai.Contact@gmail.com</p>
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
          
          <div>
            <div className="bg-white text-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">สอบถาม</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">สำเร็จ!</strong>
                  <span className="block sm:inline"> ข้อความของคุณถูกส่งแล้ว เราจะติดต่อกลับหาคุณเร็วๆ นี้</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">ชื่อของคุณ</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="สมชาย ใจดี"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">อีเมล์ ติดต่อ</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">เบอร์โทร ติดต่อ</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="081-234-5678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">หัวข้อที่ต้องการสอบถาม</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="">หัวข้อที่ต้องการสอบถาม</option>
                      <option value="Residential Project">Residential Project</option>
                      <option value="Commercial Project">Commercial Project</option>
                      <option value="Industrial Project">Industrial Project</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">อื่นๆ</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">ข้อความ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="รายละเอียดเพิ่มเติม..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'กำลังส่งข้อความ...' : 'ส่งข้อความ'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;