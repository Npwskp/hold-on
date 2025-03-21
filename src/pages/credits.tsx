import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Noto_Sans_Thai, Mali } from 'next/font/google';
import HamburgerMenu from '@/components/common/HamburgerMenu';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
}); 

const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '700'],
});

type CreditPage = {
  id: number;
  component: () => React.ReactElement;
};

const FirstCreditPage = () => (
  <div className={`h-[100vh] w-full bg-black text-white ${notoSansThai.className} flex flex-col items-center justify-center`}>
    <HamburgerMenu />
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[540px] px-8 md:px-16">
      <h1 className={`text-3xl font-bold mb-12 ${mali.className}`}>เกี่ยวกับงาน</h1>
      <div className="max-w-2xl">
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-center items-center'>
            <div className='text-2xl font-bold w-full flex flex-col justify-center items-center'> <p>ผลงาน</p> <p>ชิ้นนี้</p></div>
            <p className='text-lg'>
              ถูกพัฒนาขึ้นเพื่อสร้างความ
              ตระหนักถึงปัญหาการ
              ขาดแคลนโลหิตในประเทศไทย
            </p>
          </div>
          <p className="text-md border-l-2 border-white pl-4">
            ผ่านสถานการณ์จำลองที่สะท้อนถึงความสำคัญ
            ของการบริจาคโลหิตต่อชีวิตของผู้ป่วยและ
            สังคม โดยหวังว่าผู้เล่นจะได้รับความรู้ ความ
            เข้าใจ และแรงบันดาลใจในการเป็นส่วนหนึ่งของ
            การช่วยเหลือเพื่อนมนุษย์ผ่านการบริจาคโลหิต
          </p>
          <p className='text-md  pl-4'>
            ขอขอบคุณทุกท่านที่ร่วมเป็นส่วนหนึ่งของ
            ประสบการณ์ครั้งนี้ หวังเป็นอย่างยิ่งว่าเมื่อร่วม
            เดินทางและสร้างแรงบันดาลใจให้กับทุกท่านในการ
            ตระหนักถึงความสำคัญของการบริจาคโลหิต เพราทุก
            หยดเลือดที่ให้ไป อาจหมายถึงชีวิตที่ได้รับกลับคืน
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SecondCreditPage = () => (
  <div className={`h-[100vh] w-full bg-black text-white ${notoSansThai.className} flex flex-col items-center justify-center`}>
    <HamburgerMenu />
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[540px] px-8 md:px-16">
      <h1 className={`text-3xl font-bold mb-8 ${mali.className}`}>เครดิต</h1>
      <div className="w-full px-4 md:px-8 py-1 md:py-4">
        <div>
          <p className="text-lg mb-2 w-full">ผลงานนวัตกรรมสื่อสารเชิงพหุสื่อ</p>
          <div className='flex flex-row justify-start gap-2 w-full'>
            <div>
              <p>จิรัชญา</p>
              <p>กิตติพงษ์</p>
              <p>ณชร</p>
            </div>
            <div>
              <p>เฟื่องทิพย์</p>
              <p>แสงกระจ่าง</p>
              <p>พฤทธิกุล</p>
            </div>
          </div>
          <div className='border-l-2 border-white pl-4 m-8'>
            <p>นิสิตจาก</p>
            <p>วิทยาลัยนวัตกรรมสื่อสารสังคม</p>
            <p>เอกการสื่อสารเพื่อสุขภาพ</p>
            <p>มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
          </div>
          <div className='flex flex-row justify-between items-start gap-2'>
            <div className=''>
                <div>
                  <p>โครงเรื่อง</p>
                  <br/>
                  <br/>
                  <p>บทบรรยาย</p>
                  <p>ภาพประกอบ</p>
                  <p>เสียงประกอบ</p>
                  <p>พัฒนา</p>
                </div>
            </div>
            <div className='flex flex-row justify-start gap-2'>
              <div>
                <p>จิรัชญา</p>
                <p>กิตติพงษ์</p>
                <p>ณชร</p>
                <p>จิรัชญา</p>
                <p>จิรัชญา</p>
                <p>ณชร</p>
                <p>ณพวิทย์</p>
              </div>
              <div>
                <p>เฟื่องทิพย์</p>
                <p>แสงกระจ่าง</p>
                <p>พฤทธิกุล</p>
                <p>เฟื่องทิพย์</p>
                <p>เฟื่องทิพย์</p>
                <p>พฤทธิกุล</p>
                <p>ศุกลปักษ์</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-start gap-2 mt-4'>
            <div>
              ข้อมูล
            </div>
            <div>
              <p>ศูนย์บริการโลหิตแห่งชาติ</p>
              <p>สภากาชาดไทย</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-8">
        ขอขอบคุณทีมงานทุกท่านที่มีส่วนร่วมในผลงานนี้
      </p>
    </div>
  </div>
);

const creditPages: CreditPage[] = [
  { id: 1, component: FirstCreditPage },
  { id: 2, component: SecondCreditPage },
];

export default function Credits() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const progressToNextPage = () => {
    if (currentPageIndex < creditPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const progressToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        progressToNextPage();
      } else if (event.key === 'ArrowLeft') {
        progressToPreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPageIndex]);

  const CurrentPageComponent = creditPages[currentPageIndex].component;

  return (
    <div onClick={progressToNextPage}>
      <CurrentPageComponent />
    </div>
  );
} 