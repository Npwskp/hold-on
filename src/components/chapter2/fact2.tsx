import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import Image from 'next/image';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const Fact2 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${notoSansThai.className} text-white text-md md:text-xl relative`}>
      <Image
        src={"/images/fact/fact2.gif"}
        alt="Background"
        fill
        priority={true}
        className="object-cover z-0 absolute inset-0"
      />
      <div className='flex flex-col justify-center gap-4 md:gap-6'>
        <p>ก่อนนำไปใช้รักษาผู้ป่วย โลหิตบริจาคทุกยูนิต</p>
        <div className='flex flex-col gap-1 text-xl md:text-3xl'>
          <b>จะได้รับการตรวจคัดกรองการติดเชื้อ</b>
        </div>
        <div className='flex flex-col gap-1'>
          <p>เพื่อให้โลหิตมีความปลอดภัยต่อผู้ป่วยที่รับโลหิต</p>
          <p>โดยใช้มาตรฐานขององค์การอนามัยโลก</p>
        </div>
        <div className='flex flex-col gap-1 border-l-2 pl-4 md:pl-8 text-sm md:text-lg max-w-[320px] md:max-w-[540px]'>
          หมู่เลือดพิเศษหรือ (Rh-Negative) เป็นหมู่เลือดพบน้อยมากในคนไทย
          โดยมีอัตราส่วนร้อยละ 0.3 หรือ 1,000 คน จะพบเพียง 3 คนเท่านั้น และ
          หากผู้ป่วยที่มีหมู่โลหิต Rh-Negative ต้องใช้โลหิตในการรักษา ก็จำเป็นจะ
          ต้องได้รับโลหิตที่มีหมู่โลหิต Rh-Negative ด้วยกันเท่านั้น
        </div>
      </div>
    </div>
  )
}

export default Fact2