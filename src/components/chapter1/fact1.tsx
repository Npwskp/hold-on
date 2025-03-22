import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import Image from 'next/image';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const Fact1 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${notoSansThai.className} text-white text-md md:text-xl relative`}>
      <Image
        src={"/images/fact/fact1.gif"}
        alt="Background"
        fill
        priority={true}
        className="object-cover z-0 absolute inset-0"
      />
      <div className='flex flex-col justify-center gap-4 md:gap-6'>
        <p>จากสถิติพบว่าคนไทย</p>
        <div className='flex flex-col gap-1 text-lg md:text-2xl'>
          <b>เสียชีวิตจากอุบัติเหตุบนท้องถนนมากที่สุด</b>
          <b>ในช่วง <u>เทศกาลปีใหม่</u> และ <u>เทศกาลสงกรานต์</u></b>
        </div>
        <div className='flex flex-col gap-1'>
          <p>โดยเฉลี่ยมีคนบาดเจ็บมากกว่า 3,000 คน</p>
          <p>และเสียชีวิตจากอุบัติเหตุกว่า 300 - 400 คน </p>
        </div>
        <div className='flex flex-col gap-1 border-l-2 pl-4 md:pl-8 text-xl md:text-3xl'>
          <b>นำไปสู่การขาดแคลนเลือดสำรอง</b>
          <b>ในช่วงเทศกาลของทุกปี</b>
        </div>
      </div>
    </div>
  )
}

export default Fact1