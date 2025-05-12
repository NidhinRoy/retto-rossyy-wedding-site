
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const SinglePageNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navLinks: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Family', href: '#family' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // For active section
      const sections = navLinks.map(link => link.href.substring(1));
      let currentActive = 'home';
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in view
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = sectionId;
          }
        }
      });
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="font-script text-3xl text-wedding-navy" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}>
              Retto <span className="text-wedding-gold">&</span> Rossy
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  activeSection === link.href.substring(1) && "active"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-wedding-navy" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link block",
                  activeSection === link.href.substring(1) && "active"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default SinglePageNavbar;
