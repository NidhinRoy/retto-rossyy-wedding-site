
import React from 'react';
import Layout from '../components/Layout';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Home = () => {
  // Set your wedding date here
  const weddingDate = new Date('2023-06-25T10:30:00');

  return (
    <Layout fullHeight>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/lovable-uploads/361879de-7ecf-4544-b73a-0392b170a41f.png')",
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
            
            <div className="flex items-center justify-center space-x-4 text-white mb-12">
              <div className="flex items-center">
                <Calendar className="mr-2" size={20} />
                <span>June 25, 2023</span>
              </div>
              <div className="h-4 w-px bg-white/50"></div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span>St. Mary's Church, Kottayam</span>
              </div>
            </div>
            
            <Link 
              to="/events" 
              className="inline-block bg-wedding-gold text-wedding-navy px-6 py-3 rounded-full font-medium
                hover:bg-wedding-gold/90 transition-colors duration-300"
            >
              Event Details
            </Link>
          </div>
        </div>
        
        {/* Countdown */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <Countdown weddingDate={weddingDate} />
          </div>
        </div>
      </section>
      
      {/* Our Story Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Love Story" 
            subtitle="Every love story is beautiful, but ours is our favorite."
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/4682652b-f58c-4040-8212-5f158b0f6cb4.png" 
                alt="Retto and Rossy love story" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="font-script text-3xl text-wedding-navy mb-4">How We Met</h3>
              <p className="mb-4">
                I went to church that Sunday for peace, not love - but then I 
                saw Rossy. Her smile lit up the room. After the service, a
                clumsy coffee joke got her laughing, and from that moment,
                I was hooked. Week by week, our bond deepened until I
                knew: she was the one. Under the old oak tree after choir, I
                proposed - and she said yes. God led me to her, and I'll
                thank Him every day for it.
              </p>
              <Link 
                to="/love-story" 
                className="inline-flex items-center text-wedding-gold hover:underline"
              >
                Read Our Full Story <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section 
        className="py-20 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/71e8be5a-ba84-4ed7-9319-117a6ff4bae3.png')",
        }}
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Gallery" 
            subtitle="Browse through the precious moments we've captured together."
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="/lovable-uploads/71e8be5a-ba84-4ed7-9319-117a6ff4bae3.png" 
                alt="Retto and Rossy gallery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="/lovable-uploads/361879de-7ecf-4544-b73a-0392b170a41f.png" 
                alt="Retto and Rossy gallery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="/lovable-uploads/4682652b-f58c-4040-8212-5f158b0f6cb4.png" 
                alt="Retto and Rossy gallery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/gallery" 
              className="inline-block bg-wedding-gold text-wedding-navy px-6 py-3 rounded-full font-medium
                hover:bg-wedding-gold/90 transition-colors duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="mx-auto text-wedding-gold mb-4" size={40} fill="currentColor" />
            <h2 className="font-script text-5xl text-wedding-navy mb-4">Join Our Celebration</h2>
            <p className="text-lg mb-8">
              We would be honored to have you join us on our special day. Please visit our events page for all the details.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-wedding-navy text-white px-6 py-3 rounded-full font-medium
                hover:bg-wedding-navy/90 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
