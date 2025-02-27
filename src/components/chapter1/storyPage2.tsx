import React from 'react'
import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const StoryPage2 = () => {
  return (
    <div className= {`w-full min-h-[100dvh] flex flex-col items-center justify-center ${mali.className} text-white text-lg md:text-2xl`}>
        <p>ไอร้อนจากแสงแดด ปะทะใบหน้าของผม</p>
        <p>ก่อนถูกชะล้างด้วยน้ำเย็นฉ่ำ</p>
        <p>ที่อบอวนด้วยกลิ่นหอมจางๆ</p>
    </div>
  )
}

export default StoryPage2