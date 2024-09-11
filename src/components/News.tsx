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
      {news.map((item) => (
        <div
          key={item.id}
          className="flex border rounded-lg shadow-md overflow-hidden bg-white my-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-[140px] h-[130px] object-cover"
          />
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News