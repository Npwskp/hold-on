import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const EndScene1 = () => {
  return (
    <div className={`w-full min-h-[100dvh] ${notoSansThai.className} text-white bg-black flex flex-col items-center justify-center`}>
      <div className='h-[50vh] max-w-[800px] flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center gap-4 md:gap-6 max-w-[800px] px-4 mb-6 animate-fade-in'>
          <div className='flex flex-col gap-1'>
              <p className='text-sm'>ทุกวันนี้ยังมีผู้ป่วยจำนวนมากที่ <b className='text-2xl'>รอคอยการรักษา</b></p>
              <p className='text-sm'>และ <b>ได้รับผลกระทบจากการไม่ได้รับการรักษาอย่างทันท่วงที</b></p>
          </div>
          
          <div className='flex flex-col gap-1 border-l-2 pl-4 ms-12'>
            <p>สิ่งหนึ่งในปัจจัยสำคัญ คือ</p>
            <p className='font-bold text-xl'>การขาดแคลนโลหิต</p>
          </div>
          <p className='text-sm'>ไม่ว่าจะเป็น <b>โลหิตผู้ให้</b> หรือ <b>โลหิตผู้เศษ (Rh-negative)</b></p>
          <div className='flex flex-col gap-1 border-l-2 pl-4 ms-12'>
            <p className='text-sm'>เนื่องจากในประเทศไทยผู้ที่มีโลหิตผู้เศษได้มีเพียง<br/>
            โดยเฉลี่ยในประชากร 1,000 คน จะพบเพียง 3 คน<br/>
            หรือคิดเป็นเพียงร้อยละ 0.3 เท่านั้น</p>
          </div>
        </div>
      </div>
      
      <Link href="/chapter5/scene2" className='relative w-[95vw] max-w-[540px] aspect-square h-[50vh] flex flex-col items-center justify-end cursor-pointer'>
        <Image 
          src="/images/chapter5/Lin.gif"
          alt="Lin character"
          fill
          className="object-cover"
        />
      </Link>
    </div>
  )
}

export default EndScene1