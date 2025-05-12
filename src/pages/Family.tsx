
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { Heart } from 'lucide-react';

const Family = () => {
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

  return (
    <Layout>
      <section className="page-section pt-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Family" 
            subtitle="Meet the wonderful people who have shaped our lives."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <img 
                src="/lovable-uploads/28cb77dd-e682-44c8-b9d4-ab4b04be096e.png" 
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
                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-wedding-navy/10 rounded-full flex items-center justify-center mr-3">
                        <span className="font-medium">D</span>
                      </div>
                      <div>
                        <span className="block font-medium">David Wilson</span>
                        <span className="text-sm text-gray-600">Groomsman</span>
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
                    <li className="flex items-center">
                      <div className="w-10 h-10 bg-wedding-navy/10 rounded-full flex items-center justify-center mr-3">
                        <span className="font-medium">S</span>
                      </div>
                      <div>
                        <span className="block font-medium">Sofia Rodriguez</span>
                        <span className="text-sm text-gray-600">Bridesmaid</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-wedding-navy/5 p-8 rounded-lg">
              <h3 className="font-script text-3xl text-wedding-navy mb-4">Our New Family</h3>
              <p className="mb-4">
                As we join our lives together, our families become one. We are grateful for the love, 
                support, and guidance they have given us throughout our lives and especially during this 
                exciting new chapter.
              </p>
              <p className="mb-4">
                We look forward to creating new memories and traditions with both sides of our family 
                as we build our future together.
              </p>
              <p className="font-script text-2xl text-wedding-navy mt-6">
                With love,<br />
                Retto & Rossy
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Family;
