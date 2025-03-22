import React from 'react'
import Image from 'next/image'
import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const EndChapterScence = () => {
  return (
    <div className={`dialogue-container flex flex-col items-center justify-end mx-auto w-full max-w-[540px] ${mali.className}`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        aspectRatio: '16/9'
      }}
    >
        <Image
            src="/images/chapter4/Sunrise.png"
            alt="Background"
            fill
            priority={true}
            className="object-cover z-0 absolute inset-0"
        />
        <div className={`text-black text-lg md:text-xl z-10 w-full h-full flex items-center justify-center mb-[50vh] ${mali.className}`}> พระอาทิตย์ขึ้นวันนั้นก็สวยจริงๆนั่นแหละ </div>
    </div>
  )
}

export default EndChapterScence