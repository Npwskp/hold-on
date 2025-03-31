import React from 'react'
import Image from 'next/image'

import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const LandingPage = () => {
  return (
    <div className='w-full min-h-[100dvh] flex justify-center'>
      <div
        className="flex flex-col items-center justify-center w-full max-w-[540px]"
    >
        <Image
          src="/images/Warning.png"
          alt="Warning"
          width={500}
          height={500}
          className="w-[70dvw] md:w-[350px]"
        />
        <div className={`text-center text-white text-md md:text-xl w-full flex flex-col justify-center items-center ${mali.className} px-12`}>
          <p>
            เรื่องราวในเกมนี้เป็นเรื่องสมมุติ ตัวละคร เหตุการณ์
            และสถานที่ในเกมนี้ถูกสร้างขึ้นเพื่อความบันเทิง
            โปรดใช้วิจารณญาณในการเล่น
          </p>
          <br />
          <p>
            อาจมีเนื้อหาซึ่งอาจส่งผลกระทบต่อความรู้สึก
            กับผู้เล่นที่มีความอ่อนไหว
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage