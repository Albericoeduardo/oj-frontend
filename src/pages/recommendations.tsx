"use client";

import React from 'react';
import Recommendations from '../components/Recommendations';
import Navbar from '@/components/navbar/Navbar';
import '../app/global.css';

const recommendations = () => {
  return (
    <div>
      <Navbar />
      <h1>All Recommendations</h1>
      <Recommendations />
    </div>
  );
};

export default recommendations;
