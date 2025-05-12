
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, Home, Send, Check } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attending: 'yes',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        message: '',
        attending: 'yes',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <section className="page-section pt-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Contact Us" 
            subtitle="We'd love to hear from you! Drop us a message or RSVP below."
          />
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/4520f37f-baff-49be-a027-56fdd3e14305.png" 
                alt="Retto and Rossy contact" 
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-script text-2xl text-wedding-navy mb-4">Retto Michael</h3>
                  
                  <div className="flex items-start mb-3">
                    <Phone className="mr-3 text-wedding-gold shrink-0 mt-1" size={18} />
                    <p>+91 98470 12345</p>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <Mail className="mr-3 text-wedding-gold shrink-0 mt-1" size={18} />
                    <p>retto.michael12@gmail.com</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Home className="mr-3 text-wedding-gold shrink-0 mt-1" size={18} />
                    <p>
                      House No. 12, St. Mary's Lane,<br />
                      Near Vazhappally Church,<br />
                      Changanassery, Kottayam, Kerala – 686101
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-script text-2xl text-wedding-navy mb-4">Rossy Ravi</h3>
                  
                  <div className="flex items-start mb-3">
                    <Phone className="mr-3 text-wedding-gold shrink-0 mt-1" size={18} />
                    <p>+91 94960 67890</p>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <Mail className="mr-3 text-wedding-gold shrink-0 mt-1" size={18} />
                    <p>rossy.ravi88@gmail.com</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Home className="mr-3 text-wedding-gold shrink-0 mt-1" size={18} />
                    <p>
                      Rose Villa, Kurishupally Road,<br />
                      Perunna, Changanassery,<br />
                      Kottayam, Kerala – 686102
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-script text-3xl text-wedding-navy mb-6">Get in Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="attending" className="block mb-2 font-medium">Will you attend?</label>
                    <select
                      id="attending"
                      name="attending"
                      value={formData.attending}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                    >
                      <option value="yes">Yes, I will attend</option>
                      <option value="no">Sorry, I cannot attend</option>
                      <option value="maybe">Maybe, I'm not sure yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                      placeholder="Enter your message or any questions you might have"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center w-full py-3 px-6 rounded-full font-medium transition-colors duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-wedding-gold text-wedding-navy hover:bg-wedding-gold/90'
                    }`}
                  >
                    {isSubmitting ? (
                      <>Processing <span className="animate-pulse ml-2">...</span></>
                    ) : (
                      <>
                        {formData.attending === 'yes' ? <Check size={18} className="mr-2" /> : <Send size={18} className="mr-2" />}
                        {formData.attending === 'yes' ? 'RSVP Now' : 'Send Message'}
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4">Follow our wedding hashtag</p>
                <h3 className="font-script text-3xl text-wedding-navy">#RettoAndRossy2023</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
