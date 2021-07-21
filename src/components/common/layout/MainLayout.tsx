import React from 'react';
import Header from '../../base/header/Header';
import Footer from '../../base/footer/Footer';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
