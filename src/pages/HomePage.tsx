import React from 'react';
import HomeBannerSlider from '../components/home/HomeBannerSlider';
import MainLayout from '../components/common/layout/MainLayout';
import HomeProductGrid from '../components/home/HomeProductGrid';


const HomePage = () => {
  return (
    <MainLayout>
      <HomeBannerSlider />
      <HomeProductGrid />
    </MainLayout>
  );
};

export default HomePage;
