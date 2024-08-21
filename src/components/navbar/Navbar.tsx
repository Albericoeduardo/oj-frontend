import React from 'react'

const Navbar = () => {

    const links = [
        {
            link: '/',
            label: 'Home',
        },
        {
            link: '/team',
            label: 'Equipe',
        },
        {
            link: '/recommendations',
            label: 'Recomendações',
        },
        {
            link: '/news',
            label: 'Notícias',
        },
        {
            link: '/projects',
            label: 'Projetos',
        },
    ]

  return (
    <nav className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-700 -rotate-2'>OJ</h1>

        <div className='flex items-center gap-5'>
            {links.map((item, index) => (
                <a key={index} href={item.link}>{item.label}</a>
            ))}
        </div>
    </nav>
  )
}

export default Navbar