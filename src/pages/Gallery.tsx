
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import PhotoGallery from '../components/PhotoGallery';

const Gallery = () => {
  // Using the newly uploaded images
  const photos = [
    {
      src: "/lovable-uploads/49410170-268d-4fe7-9559-87978c2ba0bf.png",
      alt: "Couple in forest with white and green outfits"
    },
    {
      src: "/lovable-uploads/57a6d026-da94-4366-8f6e-d29d3051b033.png",
      alt: "Couple in formal wear with saree"
    },
    {
      src: "/lovable-uploads/6a24179e-c50a-472d-bd5b-c7cf20579956.png",
      alt: "Couple walking in forest path"
    },
    {
      src: "/lovable-uploads/4da5e79c-2b4c-4b25-9198-cf55e09f8233.png",
      alt: "Couple walking among trees"
    },
    {
      src: "/lovable-uploads/a29801c5-b1d8-428c-b304-5aa4f433f471.png",
      alt: "Couple on beach pointing"
    },
    {
      src: "/lovable-uploads/sally.jpg",
      alt: "Wedding photo - couple"
    },
    {
      src: "/lovable-uploads/robert.jpg",
      alt: "Wedding photo - couple"
    },
    {
      src: "/lovable-uploads/black.jpg",
      alt: "Wedding photo - couple"
    },
    {
      src: "/lovable-uploads/zakas.jpg",
      alt: "Wedding photo - couple"
    }
  ];

  const engagementPhotos = [
    {
      src: "/lovable-uploads/sabrina.jpg",
      alt: "Engagement photo - couple"
    },
    {
      src: "/lovable-uploads/samy.jpg",
      alt: "Engagement photo - couple"
    },
    {
      src: "/lovable-uploads/roman.jpg",
      alt: "Engagement photo - couple outdoors"
    },
    {
      src: "/lovable-uploads/polana.jpg",
      alt: "Engagement photo - couple"
    },
    {
      src: "/lovable-uploads/paris.jpg",
      alt: "Engagement photo - couple"
    },
    {
      src: "/lovable-uploads/ricky.jpg",
      alt: "Engagement photo - couple"
    }
  ];

  const adventurePhotos = [
    {
      src: "/lovable-uploads/romeo.jpg",
      alt: "Adventure photo - vacation"
    },
    {
      src: "/lovable-uploads/rosemary.jpg",
      alt: "Adventure photo - outdoors"
    },
    {
      src: "/lovable-uploads/randolph.jpg",
      alt: "Adventure photo - beach"
    },
    {
      src: "/lovable-uploads/riana.jpg",
      alt: "Adventure photo - travel"
    },
    {
      src: "/lovable-uploads/rafa.jpg",
      alt: "Adventure photo - travel"
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
              <PhotoGallery photos={adventurePhotos} columns={3} />
            </div>
            
            <div>
              <h3 className="font-script text-3xl text-wedding-navy mb-6 text-center">
                Engagement Photos
              </h3>
              <PhotoGallery photos={engagementPhotos} columns={3} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
