"use client";

import Navbar from '@/components/navbar/Navbar';
import News from '@/components/News';
import React from 'react';
import '../app/global.css';

const news = () => {
  return (
    <div>
      <Navbar />
      <h1>All news</h1>
      <News />
    </div>
  )
}

export default news