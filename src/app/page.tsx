import React from 'react';
import Recommendations from '../components/Recommendations';
import CreateRecommendation from '@/components/CreateRecommendation';
import Navbar from '@/components/navbar/Navbar';
import './global.css';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <h1>Recommendation System</h1>
      <CreateRecommendation />
      <Recommendations />
    </div>
  );
};

export default Home;
