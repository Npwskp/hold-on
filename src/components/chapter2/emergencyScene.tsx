import React from 'react'
import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const EmergencyScene = () => {
  return (
    <div 
      className={`w-full flex flex-col items-center justify-center mx-auto ${mali.className} text-black text-lg`}
      style={{
        backgroundImage: 'url(/images/chapter2/EmergencyRoom.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100dvh',
        position: 'relative',
        width: '100%',
        maxWidth: '540px',
        aspectRatio: '16/9'
      }}
    >
      <div className='`flex flex-col justify-center items-center p-8 md:p-14 relative mb-[5vh] w-[85%] aspect-[21/8] bg-white opacity-90 rounded-lg'>
        <p className='text-center'>ลินไม่ใช่คนเจ็บคนเดียว ในตอนนี้มีผู้คน
            มากมายที่ประสบอุบัติเหตุรถเสียหลักพุ่งชน
            คนที่เดินเล่นสงกรานต์ริมถนน 
            ผมรู้ว่าเธอถูกพาเข้าห้องฉุกเฉินไปแล้ว 
            แต่ก็ยังอดกระวนกระวายไม่ได้</p>
      </div>
    </div>
  )
}

export default EmergencyScene