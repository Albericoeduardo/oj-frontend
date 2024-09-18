"use client";

import React, { useEffect, useRef, useState } from 'react'

const CarouselSection = () => {

  const slides = [
    {
      backgroundImage: '/francisBaconBGIMG.png',
      authorImage: '/francisBaconProfileImg.png',
      quote: "Gostaria de viver para estudar e não de estudar para viver.",
      author: "Francis Bacon",
    },
    {
      backgroundImage: '/hannahArendtBGIMG.png',
      authorImage: '/hannahArendtProfileImg.png',
      quote: "Não existe mal extremo e radical. Só o bem consegue ser extremo e radical.",
      author: "Hannah Arendt",
    },
    {
      backgroundImage: '/salvadorDaliBGIMG.png',
      authorImage: '/salvadorDaliProfileImg.png',
      quote: "Um verdadeiro artista não é aquele que é inspirado, mas aquele que inspira os outros.",
      author: "Salvador Dalí",
    },
  ];      

  const [currentSlide, setCurrentSlide] = useState(0);
  const startTouchX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startTouchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endTouchX = e.changedTouches[0].clientX;
    const deltaX = startTouchX.current - endTouchX;

    if (deltaX > 50) {
      goToNextSlide();
    } else if (deltaX < -50) {
      goToPreviousSlide();
    }
  };

  return (
    <section
        className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
    >
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative z-10 text-center text-white">
        <img
            src={slides[currentSlide].authorImage}
            alt={slides[currentSlide].author}
            className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <p className="text-2xl italic mb-4">{slides[currentSlide].quote}</p>
        <h3 className="text-lg">{slides[currentSlide].author}</h3>

        <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
            <span
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
                onClick={() => setCurrentSlide(index)}
            ></span>
            ))}
        </div>
        </div>
    </section>
  )
}

export default CarouselSection