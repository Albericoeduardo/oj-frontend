import React from 'react'
import NewsCard from './components/NewsCard'

const LatestsNews = () => {

  const newsData = [
    {
      imageUrl: '/heroSectionImg.png',
      description: "Detalhes sobre a nova lei sancionada em Palmas...",
      alt: "Lei, de autoria do deputado Fabion, que institui o Dia Estadual do Católico, é sancionada",
    },
    {
      imageUrl: '/heroSectionImg.png',
      description: "O projeto oferece aulas preparatórias para estudantes...",
      alt: "UniCatólica recebe projeto 'TO no Enem' com aulões preparatórios e gratuitos",
    },
    {
      imageUrl: '/heroSectionImg.png',
      description: "Procedimentos veterinários em macacos na universidade...",
      alt: "UniCatólica realiza procedimentos em macacos",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 font-amatic">Notícias</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <NewsCard 
              key={index}
              imageUrl={news.imageUrl} 
              description={news.description}
              alt={news.alt}
            />
          ))}
        </div>

        <button className="mt-6 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
          Saiba mais
        </button>
      </div>
    </section>
  );
}

export default LatestsNews