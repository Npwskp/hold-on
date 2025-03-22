import React from 'react'
import Image from 'next/image'
import HamburgerMenu from '../common/HamburgerMenu'

import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const LandingPage = () => {
  return (
    <div className='w-full min-h-[100dvh] flex justify-center relative'>
      <div
      className="flex flex-col items-center justify-between w-full max-w-[540px]"
      >
        <HamburgerMenu />
        
        <Image
          src="/images/Animated_Logo.gif"
          alt="Animated logo"
          width={1920}
          height={1080}
          className="w-full max-w-[800px] h-auto absolute top-0 md:-top-10"
          unoptimized
        />
        <Image
          src="/images/Animated_Main_Character.gif"
          alt="Animated main character"
          width={1920}
          height={1080}
          className="w-full md:max-w-[540px] aspect-[1/1.5] object-cover object-bottom absolute bottom-0"
          unoptimized
        />
        <div className={`text-center text-white text-2xl md:text-4xl font-bold absolute bottom-[60px] md:bottom-[100px] w-full flex justify-center items-center ${mali.className}`}>
          กดที่หน้าจอเพื่อเริ่มเกม
        </div>
      </div>
    </div>
  )
}

export default LandingPage