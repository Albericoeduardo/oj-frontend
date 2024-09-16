import React from 'react'

const projectsSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/projectsSectionImg.png")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center text-white">
        <h2 className="text-5xl font-bold mb-4">Nossos projetos</h2>
        <p className="text-xl mb-8">Conheça alguns dos importantes projetos desenvolvidos pelo Observatório</p>
        
        <a href="/projects" className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
          Ver projetos
        </a>
      </div>
    </section>
  )
}

export default projectsSection