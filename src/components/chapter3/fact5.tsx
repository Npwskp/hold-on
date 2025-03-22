import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import Image from 'next/image';
const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const Fact5 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${notoSansThai.className} text-white text-md md:text-xl relative`}>
      <Image
        src={"/images/fact/fact5.gif"}
        alt="Background"
        fill
        unoptimized
        priority={true}
        className="object-cover z-0 absolute inset-0"
      />
      <div className='flex flex-col justify-center gap-4 md:gap-6 text-xl md:text-3xl'>
        <b>ตามหลัก WHO ผู้บริจาคโลหิต</b>
        <div className='flex flex-col gap-1 text-2xl md:text-4xl'>
          <b>ต้องเป็นอาสาสมัคร 100%</b>
          <b>ไม่รับญาติบริจาค</b>
        </div>
        <div className='flex flex-col gap-1 border-l-2 pl-4 md:pl-8 text-sm md:text-xl max-w-[320px] md:max-w-[540px]'>
          <p>เนื่องจากปัจจัยด้านอารมณ์</p>
          <p>เช่น ร่างกายไม่พร้อมบริจาคแต่ฝืนบริจาค</p>
          <p>อาจส่งผลทำให้เลือดที่ได้ไม่มีคุณภาพ</p>
        </div>
      </div>
    </div>
  )
}

export default Fact5