
import React from 'react';
import Navbar from './Navbar';
import SinglePageNavbar from './SinglePageNavbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  fullHeight?: boolean;
  singlePage?: boolean;
}

const Layout = ({ children, fullHeight = false, singlePage = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {singlePage ? <SinglePageNavbar /> : <Navbar />}
      <main className={`flex-1 ${fullHeight ? '' : 'pb-8'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
