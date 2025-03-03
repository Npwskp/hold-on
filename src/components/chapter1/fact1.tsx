import React from 'react'
import { Mali } from 'next/font/google';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

const Fact1 = () => {
  return (
    <div className={`w-full min-h-[100dvh] flex flex-col items-center justify-center ${mali.className} text-white text-lg md:text-2xl`}>
        <p>จากสถิติพบว่าคนไทย</p>
        <p>เสียชีวิตจากอุบัติเหตุบนท้องถนนมากที่สุด</p>
        <p>ในช่วงเทศกาลปีใหม่ และ เทศกาลสงกรานต์</p>
        <p>โดยเฉลี่ยมีคนบาดเจ็บมากกว่า 3,000 คน</p>
        <p>และเสียชีวิตจากอุบัติเหตุกว่า 300-400 คน </p>
        <p>นำไปสู่การขาดแคลนเลือดสำรอง</p>
        <p>ในช่วงเทศกาลของทุกปี</p>
    </div>
  )
}

export default Fact1