import React, { useState, useEffect } from 'react'
import { Mali } from 'next/font/google';
import { StoryPage } from '@/types/story';
import { motion } from 'framer-motion';
import Image from 'next/image';

const mali = Mali({
  subsets: ['thai', 'latin'], 
  weight: ['400', '700'],
});

interface MiddleTextTemplateProps {
  storyData: StoryPage;
  onComplete?: () => void;
  stopTypingSound?: () => void;
}

const MiddleTextTemplate: React.FC<MiddleTextTemplateProps> = ({ storyData, onComplete, stopTypingSound }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [typewriterTimeout, setTypewriterTimeout] = useState<NodeJS.Timeout | null>(null);

  const completeTypewriter = () => {
    if (typewriterTimeout) {
      clearTimeout(typewriterTimeout);
    }
    setDisplayedText(storyData.text || '');
    setIsComplete(true);
    stopTypingSound?.();
    onComplete?.();
  };

  useEffect(() => {
    // Cleanup function to clear timeouts and stop sounds
    const cleanup = () => {
      if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
      }
      stopTypingSound?.();
    };

    // Reset state for new page
    setDisplayedText('');
    setIsComplete(false);

    // If no typewriter animation, show text immediately
    if (!storyData.text || !storyData.animation || storyData.animation.type !== 'typewriter') {
      setDisplayedText(storyData.text || '');
      setIsComplete(true);
      stopTypingSound?.();
      onComplete?.();
      return cleanup;
    }

    // Start typewriter animation
    const lines = storyData.text.split('\n');
    const speed = storyData.animation.speed || 50;
    const delay = storyData.animation.delay || 500;
    let currentLineIndex = 0;
    let currentCharIndex = 0;

    const typeText = () => {
      if (currentLineIndex >= lines.length) {
        setIsComplete(true);
        stopTypingSound?.();
        onComplete?.();
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
        const timeout = setTimeout(typeText, speed);
        setTypewriterTimeout(timeout);
      } else {
        // Move to next line
        currentLineIndex++;
        currentCharIndex = 0;
        const timeout = setTimeout(typeText, delay);
        setTypewriterTimeout(timeout);
      }
    };

    typeText();

    return cleanup;
  }, [storyData.id, storyData.text, storyData.animation]);

  return (
    <div 
      className="w-full max-w-[540px] mx-auto min-h-[100dvh] flex flex-col items-center justify-center relative"
      onClick={!isComplete ? completeTypewriter : undefined}
    >
      {storyData.backgroundImage && (
        <Image
          src={storyData.backgroundImage}
          alt="Background"
          fill
          priority={true}
          className="object-cover z-0 absolute inset-0"
        />
      )}
      <div className={`${mali.className} text-white text-lg md:text-2xl p-4 relative z-10`}>
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
    </div>
  );
};

export default MiddleTextTemplate;