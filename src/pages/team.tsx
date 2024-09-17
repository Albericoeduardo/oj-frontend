"use client";

import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import '../app/global.css';
import PersonCard from '@/components/teamPage/personCard/PersonCard';

const team = () => {

  const coordinationData = [
    {
      image: '/imgTest.png',
      name: 'Valdirene Cassia',
      role: 'Coordenadora',
      description: 'Descrição da coordenadora',
      lattesUrl: 'https://www.google.com'
    }
  ]

  const teamData = [
    {
      image: '/imgTest.png',
      name: 'Time Person',
      role: 'Time',
      description: 'Descrição da Time',
      lattesUrl: 'https://www.google.com'
    },
    {
      image: '/imgTest.png',
      name: 'Time Person',
      role: 'Time',
      description: 'Descrição da Time',
      lattesUrl: 'https://www.google.com'
    },
    {
      image: '/imgTest.png',
      name: 'Time Person',
      role: 'Time',
      description: 'Descrição da Time',
      lattesUrl: 'https://www.google.com'
    }
  ]

  return (
    <div>
      <Navbar />
      <h1>Coordanação</h1>
      <div className='flex content-between justify-between'>
        {coordinationData.map((person, index) => (
          <PersonCard
            key={index}
            image={person.image}
            name={person.name}
            role={person.role}
            description={person.description}
            lattesUrl={person.lattesUrl}
          />
        ))}
      </div>
      <h1>Time</h1>
      <div>
        {teamData.map((person, index) => (
          <PersonCard 
            key={index}
            image={person.image}
            name={person.name}
            role={person.role}
            description={person.description}
            lattesUrl={person.lattesUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default team