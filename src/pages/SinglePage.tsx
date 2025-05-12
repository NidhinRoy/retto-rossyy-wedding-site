
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import Countdown from '../components/Countdown';
import PhotoGallery from '../components/PhotoGallery';
import TimelineEvent from '../components/TimelineEvent';
import { Link } from 'react-router-dom';
import { Heart, Calendar, MapPin, Clock, Mail, Phone, Home, Send, Check, ArrowRight, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const SinglePage = () => {
  // Set your wedding date here
  const weddingDate = new Date('2023-06-25T10:30:00');
  
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

  // Photos from the provided Google Drive link
  const photos = [
    {
      src: "/lovable-uploads/google-drive-1.jpg",
      alt: "Retto and Rossy wedding photo"
    },
    {
      src: "/lovable-uploads/google-drive-2.jpg",
      alt: "Retto and Rossy wedding photo"
    },
    {
      src: "/lovable-uploads/google-drive-3.jpg",
      alt: "Retto and Rossy wedding photo"
    },
    {
      src: "/lovable-uploads/google-drive-4.jpg",
      alt: "Retto and Rossy wedding photo"
    },
    {
      src: "/lovable-uploads/google-drive-5.jpg",
      alt: "Retto and Rossy wedding photo"
    },
    {
      src: "/lovable-uploads/google-drive-6.jpg",
      alt: "Retto and Rossy wedding photo"
    }
  ];

  // Family members data
  const familyMembers = [
    {
      side: "Groom",
      members: [
        { name: "Michael", relation: "Father", },
        { name: "Grace", relation: "Mother", },
        { name: "Emily", relation: "Sister", },
      ]
    },
    {
      side: "Bride",
      members: [
        { name: "Ravi", relation: "Father", },
        { name: "Anita", relation: "Mother", },
        { name: "Arjun", relation: "Brother", },
        { name: "Karan", relation: "Brother", },
      ]
    }
  ];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout fullHeight>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/lovable-uploads/google-drive-1.jpg')",
            filter: "brightness(0.85)"
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-script text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Retto <span className="text-wedding-gold">&</span> Rossy
            </h1>
            <p className="text-white text-xl md:text-2xl mb-8">are getting married</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-white mb-12">
              <div className="flex items-center">
                <Calendar className="mr-2" size={20} />
                <span>June 25, 2023</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/50"></div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span>St. Mary's Church, Kottayam</span>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('events')}
              className="inline-block bg-wedding-gold text-wedding-navy px-6 py-3 rounded-full font-medium
                hover:bg-wedding-gold/90 transition-colors duration-300"
            >
              Event Details
            </button>
          </div>
        </div>
        
        {/* Countdown */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <Countdown weddingDate={weddingDate} />
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('our-story')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </section>
      
      {/* Our Story */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Love Story" 
            subtitle="Every love story is beautiful, but ours is our favorite."
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/google-drive-2.jpg" 
                alt="Retto and Rossy love story" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full">
                  <h3 className="font-script text-3xl text-wedding-navy mb-4">Retto's Story</h3>
                  <div className="prose">
                    <p className="mb-4">
                      I went to church that Sunday for peace, not love - but then I 
                      saw Rossy. Her smile lit up the room. After the service, a
                      clumsy coffee joke got her laughing, and from that moment,
                      I was hooked. Week by week, our bond deepened until I
                      knew: she was the one. 
                    </p>
                    <p className="mb-4">
                      Under the old oak tree after choir, I
                      proposed - and she said yes. God led me to her, and I'll
                      thank Him every day for it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-script text-3xl text-wedding-navy mb-4">Rossy's Story</h3>
                <div className="prose">
                  <p className="mb-4">
                    I almost skipped church that day, but fate had other plans. I
                    noticed Retto during the sermon - calm, kind, different.
                    After a sweet, silly coffee chat, he became part of my world.
                    His love grew in the quiet ways he cared. 
                  </p>
                  <p className="mb-4">
                    When he proposed
                    under the oak tree, my heart already belonged to him. In
                    that sacred place where we met, we later said "I do"
                    forever blessed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mb-16">
            <h3 className="font-script text-3xl text-wedding-navy mb-6 text-center">
              Our Journey Together
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-wedding-gold rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">First Meeting</h4>
                  <p className="text-sm text-gray-600">January 15, 2021</p>
                  <p className="mt-1">We first met at Sunday church service.</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-wedding-gold rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">First Date</h4>
                  <p className="text-sm text-gray-600">February 14, 2021</p>
                  <p className="mt-1">Coffee and conversation at the local café.</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-wedding-gold rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Officially a Couple</h4>
                  <p className="text-sm text-gray-600">April 10, 2021</p>
                  <p className="mt-1">We decided to make our relationship official.</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-wedding-gold rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">The Proposal</h4>
                  <p className="text-sm text-gray-600">December 24, 2022</p>
                  <p className="mt-1">Under the oak tree after choir practice.</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-wedding-gold rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Engagement Party</h4>
                  <p className="text-sm text-gray-600">January 15, 2023</p>
                  <p className="mt-1">Celebrated with family and friends.</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-wedding-gold rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Wedding Day</h4>
                  <p className="text-sm text-gray-600">June 25, 2023</p>
                  <p className="mt-1">The day we say "I do".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section id="gallery" className="py-20 bg-wedding-navy/5">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Gallery" 
            subtitle="Browse through the precious moments we've captured together."
          />
          
          <div>
            <h3 className="font-script text-3xl text-wedding-navy mb-6 text-center">
              Our Moments
            </h3>
            <PhotoGallery photos={photos} columns={3} />
          </div>
        </div>
      </section>
      
      {/* Events */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Wedding Events" 
            subtitle="We're excited to celebrate our special day with you. Here's what to expect."
          />
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="font-script text-3xl text-wedding-navy mb-6">Schedule</h3>
              
              <div className="space-y-0">
                <TimelineEvent 
                  time="10:00 AM" 
                  title="Guest Arrival & Seating" 
                />
                
                <TimelineEvent 
                  time="10:30 AM" 
                  title="Church Ceremony Begins" 
                  description="The ceremony will begin promptly, please arrive on time."
                />
                
                <TimelineEvent 
                  time="11:15 AM" 
                  title="Vows & Ring Exchange" 
                />
                
                <TimelineEvent 
                  time="11:30 AM" 
                  title="Official Pronouncement (They're Married!)" 
                />
                
                <TimelineEvent 
                  time="12:00 PM" 
                  title="Wedding Photos at the Church Garden" 
                  description="Group photos with family and friends."
                />
                
                <TimelineEvent 
                  time="1:00 PM" 
                  title="Reception Lunch at Church Hall" 
                />
                
                <TimelineEvent 
                  time="2:00 PM" 
                  title="Couple's First Dance & Toasts" 
                />
                
                <TimelineEvent 
                  time="3:00 PM" 
                  title="Cake Cutting & Celebration" 
                />
                
                <TimelineEvent 
                  time="4:00 PM" 
                  title="Thank You Speech by Retto & Rossy" 
                />
                
                <TimelineEvent 
                  time="5:00 PM" 
                  title="Farewell & Couple's Send-off" 
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/google-drive-3.jpg" 
                  alt="Wedding events" 
                  className="w-full h-auto"
                />
                
                <div className="p-6">
                  <h3 className="font-script text-3xl text-wedding-navy mb-4">Ceremony & Reception</h3>
                  
                  <div className="flex items-start mb-4">
                    <Calendar className="mr-3 text-wedding-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Date</h4>
                      <p>Sunday, June 25, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <Clock className="mr-3 text-wedding-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Time</h4>
                      <p>Ceremony begins at 10:30 AM</p>
                      <p>Reception follows at 1:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-3 text-wedding-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p>St. Mary's Church</p>
                      <p>Near Vazhappally Church</p>
                      <p>Changanassery, Kottayam, Kerala</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Additional Information</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Parking is available at the church grounds</li>
                      <li>Dress code: Semi-formal</li>
                      <li>Children are welcome</li>
                      <li>Please RSVP by June 10, 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-script text-3xl text-wedding-navy mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    title="St. Mary's Church Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.922700176538!2d76.53909871478002!3d9.36492149330817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d859cf7c915%3A0xc528a57189e00b9e!2sSt.%20Mary&#39;s%20Church!5e0!3m2!1sen!2sin!4v1653947247856!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Family */}
      <section id="family" className="py-20 bg-wedding-navy/5">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Family" 
            subtitle="Meet the wonderful people who have shaped our lives."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <img 
                src="/lovable-uploads/google-drive-4.jpg" 
                alt="Retto and Rossy with family" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <Heart className="text-wedding-gold mr-3" size={24} fill="currentColor" />
                  <h3 className="font-script text-3xl text-wedding-navy">Retto's Family</h3>
                </div>
                
                <div className="prose">
                  <p>
                    "I come from a simple, close-knit family. My dad,
                    Michael, is the most hardworking man I know, and my
                    mom, Grace, has the kindest soul. I have an older
                    sister, Emily, who's a little bossy but has the biggest
                    heart. Sunday dinners at home are full of jokes,
                    prayers, and a lot of food. When I brought Rossy
                    home, they loved her right away — like they had been
                    waiting for her too."
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-lg mb-3">The Wedding Party - Groom's Side</h4>
                  <ul className="space-y-4">
                    {familyMembers[0].members.map((member, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-wedding-navy/10 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">{member.name[0]}</span>
                        </div>
                        <div>
                          <span className="block font-medium">{member.name}</span>
                          <span className="text-sm text-gray-600">{member.relation}</span>
                        </div>
                      </li>
                    ))}
                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-wedding-navy/10 rounded-full flex items-center justify-center mr-3">
                        <span className="font-medium">J</span>
                      </div>
                      <div>
                        <span className="block font-medium">Jake Thompson</span>
                        <span className="text-sm text-gray-600">Best Man</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Heart className="text-wedding-gold mr-3" size={24} fill="currentColor" />
                  <h3 className="font-script text-3xl text-wedding-navy">Rossy's Family</h3>
                </div>
                
                <div className="prose">
                  <p>
                    "My family is everything to me. My father, Ravi, and my
                    mother, Anita, raised me with so much love and faith. I
                    have two older brothers — Arjun and Karan — who have
                    always been a little overprotective, but I know it's
                    because they care. Our home was always full of laughter,
                    late-night talks, and loud celebrations. When Retto
                    came into my life, my family saw right away that he was
                    someone who would treasure me just as much as they do."
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-lg mb-3">The Wedding Party - Bride's Side</h4>
                  <ul className="space-y-4">
                    {familyMembers[1].members.map((member, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-wedding-navy/10 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">{member.name[0]}</span>
                        </div>
                        <div>
                          <span className="block font-medium">{member.name}</span>
                          <span className="text-sm text-gray-600">{member.relation}</span>
                        </div>
                      </li>
                    ))}
                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-wedding-navy/10 rounded-full flex items-center justify-center mr-3">
                        <span className="font-medium">M</span>
                      </div>
                      <div>
                        <span className="block font-medium">Maya Patel</span>
                        <span className="text-sm text-gray-600">Maid of Honor</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Contact Us" 
            subtitle="We'd love to hear from you! Drop us a message or RSVP below."
          />
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/google-drive-5.jpg" 
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

export default SinglePage;
