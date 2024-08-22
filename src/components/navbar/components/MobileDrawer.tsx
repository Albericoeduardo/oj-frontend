import React from 'react';
import { Links } from '../types/Links';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    links: Links[];
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, links }) => (
    <div className={`fixed inset-0 bg-black z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className='flex flex-col p-6'>
            <button 
                className='text-white self-end'
                onClick={onClose}
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
                    onClick={onClose}
                >
                    {item.label}
                </a>
            ))}
        </div>
    </div>
);

export default MobileDrawer;
