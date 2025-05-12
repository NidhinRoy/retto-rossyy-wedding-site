
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '../components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="font-script text-6xl text-wedding-navy mb-4">404</h1>
        <p className="text-xl text-wedding-navy/80 mb-6">Oops! Page not found</p>
        <p className="max-w-md text-center mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-wedding-gold px-6 py-3 rounded-full text-wedding-navy font-medium hover:bg-wedding-gold/90 transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
