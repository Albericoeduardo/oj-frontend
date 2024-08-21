"use client";

import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { link: '/', label: 'Home' },
        { link: '/team', label: 'Equipe' },
        { link: '/recommendations', label: 'Recomendações' },
        { link: '/news', label: 'Notícias' },
        { link: '/projects', label: 'Projetos' },
    ];

    return (
        <nav className='flex flex-row justify-between items-center p-4'>
            {/* Logo */}
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-700 -rotate-2'>
                OJ
            </h1>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-5'>
                {links.map((item, index) => (
                    <a key={index} href={item.link} className='hover:text-blue-700'>
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
                className='md:hidden flex items-center px-3 py-2 border rounded hover:text-blue-700 hover:border-blue-700'
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
            </button>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 bg-black z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='flex flex-col p-6'>
                    <button 
                        className='text-white self-end'
                        onClick={() => setIsOpen(false)}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                    {links.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.link} 
                            className='text-white text-lg py-2'
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;