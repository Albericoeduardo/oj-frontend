import React from 'react';
import Recommendations from '../components/Recommendations';
import CreateRecommendation from '@/components/CreateRecommendation';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Recommendation System</h1>
      <CreateRecommendation />
      <Recommendations />
    </div>
  );
};

export default Home;
