import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import Image from 'next/image';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const Fact7 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${notoSansThai.className} text-white text-md md:text-xl relative`}>
      <Image
        src={"/images/fact/fact7.gif"}
        alt="Background"
        fill
        unoptimized
        priority={true}
        className="object-cover -z-10 absolute inset-0"
      />
      <div className='flex flex-col justify-center gap-4 md:gap-6 text-xl md:text-3xl'>
        <div className='flex flex-col gap-1 text-6xl md:text-8xl'>
          <b>เลือด</b>
        </div>
        <div className='flex flex-col gap-1 text-lg md:text-2xl'>
          <p>เป็นยารักษาโรค</p>
          <p>ที่ยังไม่มีนวัตกรรมใดๆมาทดแทนได้</p>
        </div>
        <div className='flex flex-col gap-1 text-xl md:text-3xl'>
          <b>ต้องรับบริจาค</b>
          <b>จากมนุษย์สู่มนุษย์เท่านั้น</b>
        </div>
      </div>
    </div>
  )
}

export default Fact7