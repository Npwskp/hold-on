import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import Image from 'next/image';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const Fact3 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${notoSansThai.className} text-white text-md md:text-xl relative`}>
      <Image
        src={"/images/fact/fact3.gif"}
        alt="Background"
        fill
        unoptimized
        priority={true}
        className="object-cover z-0 absolute inset-0"
      />
      <div className='flex flex-col justify-center gap-4 md:gap-6'>
        <p>ประเทศของเรา<u>จำเป็นต้องมี</u></p>
        <div className='flex flex-col gap-1 text-2xl md:text-4xl'>
          <b>โลหิตสำรองคงคลังต่อวัน</b>
          <b>ไม่ต่ำกว่า 3,000 ยูนิต</b>
        </div>
        <div className='flex flex-col gap-1 text-md md:text-xl'>
          <b>แต่ทุกวันนี้ศูนย์บริจาคโลหิตแห่งชาติ</b>
          <b>มีโลหิตสำรองต่อวันไม่ถึง 1,000 ยูนิต</b>
        </div>
        <div className='flex flex-col gap-1 border-l-2 pl-4 md:pl-8 text-md md:text-lg max-w-[320px] md:max-w-[540px]'>
          ในขณะที่ต้องส่งให้กับโรงพยาบาลต่างๆทั่วประเทศ
          สำรองไว้ในคลัง หากเกิดกรณีฉุกเฉินที่ต้องใช้เลือด
          พร้อมกับจำนวนมากจะทำให้เรามีเลือดไม่พอใช้
        </div>
      </div>
    </div>
  )
}

export default Fact3