import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import './global.css';
import HeroSection from '@/components/heroSection/HeroSection';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
