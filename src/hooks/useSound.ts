import { useEffect } from 'react';
import SoundManager from '../utils/SoundManager';
import { storySounds } from '../config/soundConfig';

interface UseSoundProps {
  chapterId: number;
  pageId: number;
}

export const useSound = ({ chapterId, pageId }: UseSoundProps) => {
  const soundManager = SoundManager.getInstance();

  useEffect(() => {
    console.log('Sound effect triggered:', { chapterId, pageId });
    
    // Get sound config for current chapter and page
    const chapterSounds = storySounds[chapterId];
    const currentPageSound = chapterSounds?.[pageId];
    const nextPageSound = chapterSounds?.[pageId + 1];

    // Stop all sounds when changing chapters
    if (!chapterSounds) {
      console.log('No sound config for chapter, stopping all sounds');
      soundManager.stopAll();
      return;
    }

    if (currentPageSound) {
      // Check if the BGM is different from the previous page
      const previousPageSound = chapterSounds?.[pageId - 1];
      const isSameBGM = previousPageSound?.bgm?.[0] === currentPageSound.bgm?.[0];

      // Load and play background music only if it's different from previous page
      if (currentPageSound.bgm && !isSameBGM) {
        currentPageSound.bgm.forEach((bgmSrc, index) => {
          const key = `bgm_${chapterId}_${pageId}_${index}`;
          console.log('Loading BGM:', { key, bgmSrc });
          soundManager.loadSound(
            key,
            bgmSrc,
            currentPageSound.volume || 1,
            currentPageSound.loop || true
          );
          soundManager.playBGM(key);
        });
      } else if (!currentPageSound.bgm) {
        // If no BGM is specified for this page, stop any playing BGM
        soundManager.stopBGM();
      }

      // Load and play sound effects
      if (currentPageSound.sfx) {
        currentPageSound.sfx.forEach((sfxSrc, index) => {
          const key = `sfx_${chapterId}_${pageId}_${index}`;
          
          // Special handling for typing sound - always replay on page change
          if (sfxSrc === '/effect/Typing.mp3') {
            console.log('Loading and playing typing SFX:', { key, sfxSrc });
            soundManager.loadSound(
              key,
              sfxSrc,
              currentPageSound.volume || 1,
              false
            );
            soundManager.playSound(key);
          } else {
            // Check if this SFX exists in next page
            const nextPageSfx = nextPageSound?.sfx || [];
            const isSfxInNextPage = nextPageSfx.includes(sfxSrc);
            
            if (!isSfxInNextPage) {
              console.log('Loading and playing SFX:', { key, sfxSrc });
              soundManager.loadSound(
                key,
                sfxSrc,
                currentPageSound.volume || 1,
                false
              );
              // Play the SFX immediately after loading
              soundManager.playSound(key);
            }
          }
        });
      }

      // Stop SFX that don't exist in next page
      if (nextPageSound?.sfx) {
        const currentSfx = currentPageSound.sfx || [];
        const nextPageSfx = nextPageSound.sfx;
        currentSfx.forEach((sfxSrc, index) => {
          const key = `sfx_${chapterId}_${pageId}_${index}`;
          if (!nextPageSfx.includes(sfxSrc)) {
            soundManager.stopSound(key);
          }
        });
      }
    } else {
      // If no sound config for this page, stop all sounds
      console.log('No sound config for page, stopping all sounds');
      soundManager.stopAll();
    }

    // Cleanup function
    return () => {
      // Check if next page exists and has different BGM
      if (nextPageSound && nextPageSound.bgm?.[0] !== currentPageSound?.bgm?.[0]) {
        console.log('Next page has different BGM, fading out current BGM');
        soundManager.stopBGM();
      }

      // Stop current page's SFX if they don't exist in next page
      if (currentPageSound?.sfx) {
        currentPageSound.sfx.forEach((sfxSrc, index) => {
          const key = `sfx_${chapterId}_${pageId}_${index}`;
          // Stop if next page doesn't exist or doesn't have this SFX
          if (!nextPageSound?.sfx?.includes(sfxSrc)) {
            console.log('Stopping SFX:', { key, sfxSrc });
            soundManager.stopSound(key);
          }
        });
      }
    };
  }, [chapterId, pageId]);

  return {
    playSound: (key: string) => soundManager.playSound(key),
    stopSound: (key: string) => soundManager.stopSound(key),
    stopAll: () => soundManager.stopAll(),
    setVolume: (key: string, volume: number) => soundManager.setVolume(key, volume)
  };
}; 