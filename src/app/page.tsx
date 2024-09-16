import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import './global.css';
import HeroSection from '@/components/homePage/heroSection/HeroSection';
import LatestsNews from '@/components/homePage/LatestsNews/LatestsNews';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen overflow-hidden flex flex-col'>
      <Navbar />
      <HeroSection></HeroSection>
      <LatestsNews></LatestsNews>
    </div>
  );
};

export default Home;
