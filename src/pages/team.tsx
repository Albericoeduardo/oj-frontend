"use client";

import Navbar from '@/components/navbar/Navbar';
import Team from '@/components/Team';
import React from 'react';
import '../app/global.css';

const team = () => {
  return (
    <div>
      <Navbar />
      <h1>All team</h1>
      <Team />
    </div>
  )
}

export default team