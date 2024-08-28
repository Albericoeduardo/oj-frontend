"use client";

import React, { useEffect, useState } from 'react'
import { getNews } from '@/services/newsService/newsService';

interface News {
    id: number;
    title: string;
    description: string;
    image: string;
}

const News: React.FC = () => {
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const data = await getNews();
            setNews(data);
        };
        fetchNews();
    }, []);

  return (
    <div>
      {news.map((news) => (
        <div key={news.id}>
          <img src={news.image} alt={news.title} />
          <h3>{news.title}</h3>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  )
}

export default News