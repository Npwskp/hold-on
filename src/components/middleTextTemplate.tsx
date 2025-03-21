import React from 'react'
import { Mali } from 'next/font/google';
import { StoryPage } from '@/types/story';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'], // Specify weights you need
});

interface MiddleTextTemplateProps {
  storyData: StoryPage;
}

const MiddleTextTemplate: React.FC<MiddleTextTemplateProps> = ({ storyData }) => {
  return (
    <div className={`w-full max-w-[540px] mx-auto min-h-[100dvh] flex flex-col items-center justify-center ${mali.className} text-white text-lg md:text-2xl p-4`}>
        {storyData.text && storyData.text.split('\n').map((line, index) => (
          <p key={index} className='text-center'>{line}</p>
        ))}
    </div>
  ) 
}

export default MiddleTextTemplate