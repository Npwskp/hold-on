import { Mali } from 'next/font/google';
import React from 'react'

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const StoryPage1 = () => {
  return (
    <div className= {`w-full min-h-[100dvh] flex flex-col items-center justify-center ${mali.className} text-white text-lg md:text-2xl`}>
        <p>เรื่องราวเกิดขึ้นในช่วงกลางเดือนเมษายน</p>
        <p>ท่ามกลางเสียงหัวเราะและดนตรีดังกระหึ่ม</p>
    </div>
  )
}

export default StoryPage1