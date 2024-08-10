"use client";

import React, { useEffect, useState } from 'react';
import { getRecommendations } from '@/services/api';

interface Recommendation {
  id: number;
  type: string;
  image: string;
  title: string;
  description: string;
  url: string;
}

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = await getRecommendations();
      setRecommendations(data);
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      {recommendations.map((rec) => (
        <div key={rec.id}>
          <img src={rec.image} alt={rec.title} />
          <h3>{rec.title}</h3>
          <p>{rec.description}</p>
          <a href={rec.url}>Download</a>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
