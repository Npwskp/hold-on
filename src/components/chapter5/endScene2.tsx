import React from 'react'
import { Noto_Sans_Thai } from 'next/font/google';
import HamburgerMenu from '../common/HamburgerMenu';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
});

const EndScene2 = () => {
  return (
    <div 
      className={`flex flex-col items-center justify-end mx-auto ${notoSansThai.className} text-white bg-black`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '540px',
        aspectRatio: '16/9'
      }}
    >
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
      <img
          src={"/images/chapter5/TwoHandWithRedRope.gif"}
          alt="Background"
          className="object-cover z-0 absolute inset-0 w-full h-full"
        />
      <HamburgerMenu />
      <div className='flex flex-col justify-center gap-4 md:gap-6 max-w-[800px] px-4 h-full mt-20 md:mt-24 z-10'>
        <div className='flex flex-col gap-1 text-center text-xs md:text-sm w-[90vw] md:w-[400px]'>
            <p>ร่วมเป็นผู้บริจาคเลือด กับศูนย์บริการโลหิตแห่งชาติ สภากาชาดไทย </p>
            <p>เพื่อสร้างโอกาสและความหวังให้แก่ผู้ที่กำลังรอคอยการรักษาเช่นเดียวกับลิน
            เพราะทุกหยดเลือดของคุณ ช่วยให้ใครบางคนมีโอกาสกลับมาใช้ชีวิตได้</p>
        </div>
        <button
          className='bg-red-800 hover:bg-red-700 transition-colors text-white font-bold px-4 py-2 rounded-md cursor-pointer'
          onClick={() => window.open('https://thaibloodcentre.redcross.or.th/mobile-blood-donation-schedule/', '_blank')}
          type="button"
        >
            คลิกเพื่อดูจุดรับบริจาคไกล้บ้านได้เลย
        </button>
      </div>
      <div className='absolute bottom-4 left-[50%] translate-x-[-50%] z-10'>
        <b
          className='text-md cursor-pointer'
          style={{ animation: 'fadeInOut 3s ease-in-out infinite' }}
          onClick={() => window.open('https://thaibloodcentre.redcross.or.th/blog/category/media-main/media/multimedia-and-vdo/', '_blank')}
          >
            ศึกษาข้อมูลเพิ่มเติม
        </b>
      </div>
    </div>
  )
}

export default EndScene2