"use client";

import Navbar from '@/components/navbar/Navbar';
import News from '@/components/News';
import React from 'react';
import '../app/global.css';
import CreateNews from '@/components/CreateNews';

const news = () => {
  return (
    <div>
      <Navbar />
      <h1>All news</h1>
      <CreateNews />
      <News />
    </div>
  )
}

export default news