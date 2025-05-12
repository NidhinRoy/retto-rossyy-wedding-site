
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { Heart } from 'lucide-react';

const LoveStory = () => {
  return (
    <Layout>
      <section className="page-section pt-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Love Story" 
            subtitle="Every love story is beautiful, but ours is our favorite."
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Story Section */}
            <div className="flex flex-col md:flex-row gap-12 mb-16">
              <div className="w-full md:w-1/2">
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
              <div className="w-full md:w-1/2">
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
            
            {/* Image */}
            <div className="mb-16">
              <img 
                src="/lovable-uploads/4682652b-f58c-4040-8212-5f158b0f6cb4.png" 
                alt="Our love story" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
            
            {/* Quote */}
            <div className="bg-wedding-navy/5 p-8 rounded-lg text-center">
              <blockquote className="font-script text-3xl text-wedding-navy italic">
                "Every love story is beautiful, but ours is my favorite."
              </blockquote>
              <p className="mt-4">— Retto & Rossy</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoveStory;
