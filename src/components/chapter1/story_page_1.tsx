import { Mali } from 'next/font/google';
import React from 'react'

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const StoryPage1 = () => {
  return (
    <div className= {`w-full min-h-[100dvh] flex flex-col items-center justify-center ${mali.className}`}>
        <p className='text-white text-lg md:text-2xl'>เรื่องราวเกิดขึ้นในช่วงกลางเดือนเมษายน</p>
        <p className='text-white text-lg md:text-2xl'>ท่ามกลางเสียงหัวเราะและดนตรีดังกระหึ่ม</p>
    </div>
  )
}

export default StoryPage1