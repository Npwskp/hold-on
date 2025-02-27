import React from 'react'
import Image from 'next/image'

import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const LandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-[100dvh]"
    >
      <Image
        src="/images/Warning.png"
        alt="Warning"
        width={500}
        height={500}
        className="max-md:w-[70dvw] max-md:h-[70dvw]"
      />
      <div className={`text-center text-white text-md md:text-2xl w-full flex flex-col justify-center items-center ${mali.className}`}>
        <p>เรื่องราวในเกมนี้เป็นเรื่องสมมุติ ตัวละคร เหตุการณ์</p>
        <p>และสถานที่ในเกมนี้ถูกสร้างขึ้นเพื่อความบันเทิง</p>
        <p>โปรดใช้วิจารณญาณในการเล่น</p>
        <p>อาจมีเนื้อหาซึ่งอาจส่งผลกระทบต่อความรู้สึก</p>
        <p>กับผู้เล่นที่มีความอ่อนไหว</p>
      </div>
    </div>
  )
}

export default LandingPage