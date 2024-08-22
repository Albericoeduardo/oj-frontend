"use client";

import React, { useState } from 'react'
import { Links } from './types/Links';
import MobileMenuButton from './components/MobileMenuButton';
import MobileDrawer from './components/MobileDrawer';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links: Links[] = [
        { link: '/', label: 'Home' },
        { link: '/team', label: 'Equipe' },
        { link: '/recommendations', label: 'Recomendações' },
        { link: '/news', label: 'Notícias' },
        { link: '/projects', label: 'Projetos' },
    ];

    return (
        <nav className='flex flex-row justify-between items-center p-4'>
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-700 -rotate-2'>
                OJ
            </h1>
            <div className='hidden md:flex items-center gap-5'>
                {links.map((item, index) => (
                    <a key={index} href={item.link} className='hover:text-blue-700'>
                        {item.label}
                    </a>
                ))}
            </div>
            <MobileMenuButton onClick={() => setIsOpen(!isOpen)} />
            <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} links={links} />
        </nav>
    );
};

export default Navbar;