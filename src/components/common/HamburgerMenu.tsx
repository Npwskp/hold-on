import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { Mali } from 'next/font/google';
import { useGame } from '@/store/GameContext';

const mali = Mali({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { gameState } = useGame();
  const isEndScene = gameState.currentChapter === 6 && gameState.currentPage === 3;

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleNavigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div className="relative w-full max-w-[540px]" onClick={(e) => e.stopPropagation()}>
      <button 
        className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
        onClick={toggleMenu}
        type="button"
        aria-label="Menu"
      >
        <HiMenu className="w-8 h-8 text-white" />
      </button>

      {isOpen && (
        <div 
          className={`absolute top-16 right-4 bg-black/90 backdrop-blur-sm rounded-xl py-2 min-w-[160px] shadow-lg border border-white/10 ${mali.className} z-20`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => handleNavigate(e, '/')}
            className="w-full px-6 py-3 text-white hover:bg-white/10 text-left transition-colors duration-200 text-lg"
            type="button"
          >
            {isEndScene ? 'หน้าสุดท้าย' : 'หน้าหลัก'}
          </button>
          <button
            onClick={(e) => handleNavigate(e, '/credits')}
            className="w-full px-6 py-3 text-white hover:bg-white/10 text-left transition-colors duration-200 text-lg"
            type="button"
          >
            เครดิต
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu; 