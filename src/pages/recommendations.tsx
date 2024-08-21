"use client";

import React from 'react';
import Recommendations from '../components/Recommendations';
import Navbar from '@/components/navbar/Navbar';

const RecommendationsPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>All Recommendations</h1>
      <Recommendations />
    </div>
  );
};

export default RecommendationsPage;
