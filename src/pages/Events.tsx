
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import TimelineEvent from '../components/TimelineEvent';
import { MapPin, Calendar, Clock } from 'lucide-react';

const Events = () => {
  return (
    <Layout>
      <section className="page-section pt-24">
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
                  src="/lovable-uploads/681d650c-fd59-46c1-9ce0-9a5a93ff5f60.png" 
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
    </Layout>
  );
};

export default Events;
