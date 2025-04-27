import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Noto_Sans_Thai, Mali, Sarabun } from 'next/font/google';
import HamburgerMenu from '@/components/common/HamburgerMenu';
import Image from 'next/image';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
}); 

const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const sarabun = Sarabun({
  subsets: ['thai'],
  weight: ['300', '700'],
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
  <div className={`h-[100vh] w-full bg-black text-white ${sarabun.className} flex flex-col items-center justify-center`}>
    <HamburgerMenu />
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[540px] px-8 md:px-16">
      <h1 className={`text-2xl font-bold px-2 md:px-6 mb-4 text-start w-full`}>เครดิต</h1>
      <div className="w-full px-2 md:px-6 py-1 md:py-2">
        <div>
          <div className="text-md mb-4 w-full">
            <p>ผลงานนี้เป็นผลงานนวัตกรรมสื่อสารนิพนธ์</p>
            <p>ของ จิรัชญา เฟื่องทิพย์ , กิตติพงษ์ แสงกระจ่าง  และ
            ณชร พฤทธิกุล นิสิตจากวิทยาลัยนวัตกรรมสื่อสารสังคม
            เอกการสื่อสารเพื่อสุขภาพ มหาวิทยาลัยศรีนครินทรวิโรฒ </p>
          </div>
          <div className='flex flex-row justify-between items-start gap-2'>
            <div className=''>
                <div className='flex flex-col gap-6'>
                  <div>
                    <p>โครงเรื่อง</p>
                    <br/>
                    <br/>
                  </div>
                  <p>บทบรรยาย</p>
                  <p>ภาพประกอบ</p>
                  <p>เสียงประกอบ</p>
                </div>
            </div>
            <div className='flex flex-row justify-start gap-2'>
              <div className='flex flex-col gap-6'>
                <div>
                  <p>จิรัชญา</p>
                  <p>กิตติพงษ์</p>
                  <p>ณชร</p>
                </div>
                <p>จิรัชญา</p>
                <p>จิรัชญา</p>
                <p>ณชร</p>
              </div>
              <div className='flex flex-col gap-6'>
                <div>
                  <p>เฟื่องทิพย์</p>
                  <p>แสงกระจ่าง</p>
                  <p>พฤทธิกุล</p>
                </div>
                <p>เฟื่องทิพย์</p>
                <p>เฟื่องทิพย์</p>
                <p>พฤทธิกุล</p>
              </div>
            </div>
          </div>
          <p className='text-center w-full'> ( ขอบคุณเสียงประกอบจาก envato.co ) </p>
          <div className='flex flex-row justify-between items-start gap-2'>
            <div className=''>
                <div className='flex flex-col gap-6'>
                  <p>พัฒนา</p>
                </div>
            </div>
            <div className='flex flex-row justify-start gap-2'>
                <p className='me-1'>ณพวิทย์</p>
                <p className='me-4'>ศุกลปักษ์</p>
            </div>
          </div>
        </div>
      </div>

      <p className='text-center mt-4 mb-4 font-bold'>
        ขอบคุณหน่วยงานที่ให้ความอนุเคราะห์ข้อมูล
      </p>
      <div className='flex flex-row justify-center items-center gap-4 md:gap-8'>
        <Image src={"/images/credits/LogoCosci.png"} alt="Blood Logo" width={100} height={100} />
        <Image src={"/images/credits/HealthCommuEng.png"} alt="Blood Logo" width={90} height={90} />
        <Image src={"/images/credits/CreditsBloodLogo.png"} alt="Blood Logo" width={130} height={130} />
      </div>
      <p className="text-center mt-4">
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

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        progressToNextPage();
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