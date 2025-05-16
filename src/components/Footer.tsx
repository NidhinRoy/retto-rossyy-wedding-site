
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wedding-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-script text-3xl mb-2">Retto & Rossy</h3>
            <p className="text-sm opacity-80">We can't wait to celebrate with you!</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm opacity-80">Wedding Date: November 13, 2025</p>
            <p className="text-sm opacity-80">St. Mary's Syro-Malabar Catholic Metropolitan Cathedral, Changanassery</p>
          </div>
          
          <div className="text-right">
            <p className="text-sm opacity-80">© {currentYear} All Rights Reserved</p>
            <p className="text-sm opacity-80">With love ♥</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
