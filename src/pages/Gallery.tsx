
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import PhotoGallery from '../components/PhotoGallery';

const Gallery = () => {
  // In a real project, these would be your actual photos
  const photos = [
    {
      src: "/lovable-uploads/361879de-7ecf-4544-b73a-0392b170a41f.png",
      alt: "Retto and Rossy at the beach"
    },
    {
      src: "/lovable-uploads/4682652b-f58c-4040-8212-5f158b0f6cb4.png",
      alt: "Retto and Rossy in the forest"
    },
    {
      src: "/lovable-uploads/71e8be5a-ba84-4ed7-9319-117a6ff4bae3.png",
      alt: "Retto and Rossy photo collage"
    },
    {
      src: "/lovable-uploads/681d650c-fd59-46c1-9ce0-9a5a93ff5f60.png",
      alt: "Retto and Rossy events"
    },
    {
      src: "/lovable-uploads/28cb77dd-e682-44c8-b9d4-ab4b04be096e.png",
      alt: "Retto and Rossy family"
    },
    {
      src: "/lovable-uploads/4520f37f-baff-49be-a027-56fdd3e14305.png",
      alt: "Retto and Rossy contact"
    }
  ];

  return (
    <Layout>
      <section className="page-section pt-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Gallery" 
            subtitle="Browse through the precious moments we've captured together."
          />
          
          <div className="flex flex-col gap-16">
            <div>
              <h3 className="font-script text-3xl text-wedding-navy mb-6 text-center">
                You <span className="text-wedding-gold">&</span> Me
              </h3>
              <PhotoGallery photos={photos} columns={3} />
            </div>
            
            <div>
              <h3 className="font-script text-3xl text-wedding-navy mb-6 text-center">
                Our Adventures
              </h3>
              <PhotoGallery photos={photos.slice().reverse()} columns={3} />
            </div>
            
            <div>
              <h3 className="font-script text-3xl text-wedding-navy mb-6 text-center">
                Engagement Photos
              </h3>
              <PhotoGallery photos={photos} columns={3} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
