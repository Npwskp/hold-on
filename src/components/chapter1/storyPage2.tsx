import React from 'react'
import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const StoryPage2 = () => {
  return (
    <div className='min-h-[100dvh] flex flex-row justify-center mx-auto w-full max-w-[540px]'>
      <div 
        className={`flex flex-col items-center justify-center ${mali.className} text-black text-lg`}
        style={{
          backgroundImage: 'url(/images/chapter1/SongkranSceneCut.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100dvh',
          position: 'relative',
          width: '540px',
        }}
      >
        <div className='`flex flex-col justify-center items-center p-8 md:p-14 relative mb-[5vh] w-[85%] aspect-[21/8] bg-white opacity-90 rounded-lg'>
          <p className='text-center'>ไอร้อนจากแสงแดด ปะทะใบหน้าของผม ก่อนถูกชะล้างด้วยน้ำเย็นฉ่ำ ที่อบอวนด้วยกลิ่นหอมจางๆ</p>
        </div>
      </div>
    </div>
  )
}

export default StoryPage2