import React, { useState, useEffect } from 'react'
import { Mali } from 'next/font/google';
import { StoryPage } from '@/types/story';
import { motion } from 'framer-motion';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'],
});

interface MiddleTextTemplateProps {
  storyData: StoryPage;
}

const MiddleTextTemplate: React.FC<MiddleTextTemplateProps> = ({ storyData }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!storyData.text || !storyData.animation || storyData.animation.type !== 'typewriter') {
      setDisplayedText(storyData.text || '');
      return;
    }

    const lines = storyData.text.split('\n');
    const speed = storyData.animation.speed || 50;
    const delay = storyData.animation.delay || 500;
    let currentLineIndex = 0;
    let currentCharIndex = 0;

    const typeText = () => {
      if (currentLineIndex >= lines.length) {
        return;
      }

      if (currentCharIndex < lines[currentLineIndex].length) {
        // Type next character
        setDisplayedText(prev => {
          const currentLines = prev.split('\n');
          currentLines[currentLineIndex] = lines[currentLineIndex].slice(0, currentCharIndex + 1);
          return currentLines.join('\n');
        });
        currentCharIndex++;
        setTimeout(typeText, speed);
      } else {
        // Move to next line
        currentLineIndex++;
        currentCharIndex = 0;
        setTimeout(typeText, delay);
      }
    };

    setDisplayedText('');
    typeText();
  }, [storyData.text, storyData.animation]);

  return (
    <div className={`w-full max-w-[540px] mx-auto min-h-[100dvh] flex flex-col items-center justify-center ${mali.className} text-white text-lg md:text-2xl p-4`}>
      {displayedText.split('\n').map((line, index) => (
        <motion.p
          key={index}
          className='text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default MiddleTextTemplate;