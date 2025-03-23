import React from 'react'
import { Mali } from 'next/font/google'
import LandingPage from './landingPage';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'],
});

const SoundPermission = () => {

  return (
    <div className="relative w-full min-h-[100dvh]">
      <LandingPage />
      <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center cursor-pointer"
      >
        <div className={`text-white text-2xl md:text-4xl text-center font-bold ${mali.className}`}>
          กดที่ไหนก็ได้เพื่อเปิดเสียง<br/>
          Click anywhere to enable sound
        </div>
      </div>
    </div>
  )
}

export default SoundPermission 