import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import Image from 'next/image';
const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const Fact6 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${notoSansThai.className} text-white text-md md:text-xl relative`}>
      <Image
        src={"/images/fact/fact6.gif"}
        alt="Background"
        fill
        priority={true}
        className="object-cover -z-10 absolute inset-0"
      />
      <div className='flex flex-col justify-center gap-4 md:gap-6 px-8 md:px-12 mt-2'>
        <div className='flex flex-col gap-1 text-lg md:text-2xl'>
          <p>ทางศูนย์บริจาคโลหิตแห่งชาติ</p>
        </div>
        <div className='flex flex-col gap-1 border-l-2 pl-4 md:pl-8 text-2xl md:text-3xl max-w-[320px] md:max-w-[540px]'>
          <b>ได้มีการกำหนดคุณสมบัติ</b>
          <b>พร้อมวิธีการเตรียมตัวก่อนการบริจาคไว้</b>
        </div>
        <div className='flex flex-col gap-1 text-lg md:text-2xl'>
          <p>ถ้าคุณสมบัติไม่ครบและเตรียมตัวมาไม่พร้อม</p>
          <p>ก็ไม่สามารถบริจาคได้</p>
        </div>
      </div>
    </div>
  )
}

export default Fact6