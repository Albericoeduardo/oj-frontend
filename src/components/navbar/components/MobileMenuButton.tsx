import React from 'react';

interface MobileMenuButtonProps {
    onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => (
    <button 
        className='md:hidden flex items-center px-3 py-2 border rounded hover:text-blue-700 hover:border-blue-700'
        onClick={onClick}
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
);

export default MobileMenuButton;
