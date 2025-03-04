import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const Fact4 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${notoSansThai.className} text-white text-md md:text-xl`}>
      <div className='flex flex-col justify-center gap-4 md:gap-6 text-2xl md:text-4xl'>
        <b>เลือดในคลัง 77%</b>
        <div className='flex flex-col gap-1 text-xl md:text-3xl'>
          <p>นำไปใช้รักษาผู้ป่วยที่</p>
          <b>สูญเสียเลือดเฉียบพลันจากอุบัติเหตุ</b>
        </div>
        <div className='flex flex-col gap-1 border-l-2 pl-4 md:pl-8 text-sm md:text-xl max-w-[320px] md:max-w-[540px]'>
          <p>ต้องสำรองไว้ระหว่างการผ่าตัด 2-3 ยูนิต</p>
          <p>ในกรณีที่มีอาการรุนแรง 5-10 ยูนิต</p>
        </div>
        <div className='flex flex-col gap-1 text-2xl md:text-4xl'>
          <b>ถ้าโลหิตไม่เพียงพอ</b>
          <b>ต้องเลื่อนการรักษาออกไป</b>
        </div>
        <b className='text-xl md:text-3xl'><u>ซึ่งอาจส่งผลต่อการฟื้นฟูร่างกายในอนาคต</u></b>
      </div>
    </div>
  )
}

export default Fact4