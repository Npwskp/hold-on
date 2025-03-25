import { useEffect, useRef } from 'react';
import SoundManager from '../utils/SoundManager';
import { storySounds } from '../config/soundConfig';

interface UseSoundProps {
  chapterId: number;
  pageId: number;
}

export const useSound = ({ chapterId, pageId }: UseSoundProps) => {
  const soundManager = SoundManager.getInstance();

  // Use useRef to persist the Map across renders
  const activeSFXKeys = useRef(new Map<string, string>());

  useEffect(() => {    
    console.log('Sound effect triggered:', { chapterId, pageId });
    
    // Get sound config for current chapter and page
    const chapterSounds = storySounds[chapterId];
    const currentPageSound = chapterSounds?.[pageId];
    const previousPageSound = chapterSounds?.[pageId - 1];
    const nextPageSound = chapterSounds?.[pageId + 1] || storySounds[chapterId + 1]?.[0];

    // Stop all sounds when changing chapters
    if (!chapterSounds) {
      console.log('No sound config for chapter, stopping all sounds')
      soundManager.stopAll();
      return;
    }

    const playBGM = async (key: string, bgmSrc: string, volume: number, loop: boolean) => {
      console.log('Loading BGM:', { key, bgmSrc });
      soundManager.loadSound(key, bgmSrc, volume, loop);
      
      try {
        await soundManager.playBGM(key);
      } catch (error) {
        if (error instanceof Error) {
          console.warn('Failed to play BGM:', error);
          // The Sound class will now handle retrying after user interaction
        }
      }
    };

    const playSFX = async (key: string, sfxSrc: string, volume: number, loop: boolean) => {
      console.log('Loading SFX:', { key, sfxSrc });
      soundManager.loadSound(key, sfxSrc, volume, loop);
      
      try {
        await soundManager.playSound(key);
      } catch (error) {
        if (error instanceof Error) {
          console.warn('Failed to play SFX:', error);
          // The Sound class will now handle retrying after user interaction
        }
      }
    };

    if (currentPageSound) {
      // Check if the BGM is different from the previous page
      const isSameBGM = previousPageSound?.bgm?.[0] === currentPageSound.bgm?.[0];

      // Load and play background music only if it's different from previous page
      if (currentPageSound.bgm && !isSameBGM) {
        currentPageSound.bgm.forEach((bgmSrc, index) => {
          const key = `bgm_${chapterId}_${pageId}_${index}`;
          playBGM(key, bgmSrc, currentPageSound.volume || 1, currentPageSound.loop || true);
        });
      } else if (nextPageSound && nextPageSound.bgm?.[0] !== currentPageSound?.bgm?.[0]) {
        console.log('Next page has different BGM, fading out current BGM');
        soundManager.stopBGM();
      } else if (!nextPageSound) {
        // If no BGM is specified for this page, stop any playing BGM
        soundManager.stopBGM();
      }

      if (currentPageSound.sfx) {
        currentPageSound.sfx.forEach((sfxSrc, index) => {
          const key = `sfx_${chapterId}_${pageId}_${index}`;
          
          // Special handling for typing sound - always replay on page change with configured typing time
          if (sfxSrc === '/effect/Typing.ogg') {
            const typingTime = currentPageSound.typeingTime || 3000; // Default to 3000ms if not specified
            playSFX(key, sfxSrc, currentPageSound.volume || 1, false);
            // Stop the typing sound after the configured typing time
            setTimeout(() => {
              soundManager.stopSound(key);
            }, typingTime);
          } else {
            const wasInPreviousPage = previousPageSound?.sfx?.includes(sfxSrc);
            if (!wasInPreviousPage) {
              // Use .current to access the Map
              activeSFXKeys.current.set(sfxSrc, key);
              playSFX(key, sfxSrc, currentPageSound.volume || 1, false);
            }
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
      if (currentPageSound?.sfx) {
        currentPageSound.sfx.forEach((sfxSrc, index) => {
          // Use .current to access the Map
          const originalKey = activeSFXKeys.current.get(sfxSrc);
          if (originalKey) {
            const nextPageHasSFX = nextPageSound?.sfx?.includes(sfxSrc);
            if (!nextPageHasSFX) {
              soundManager.stopSound(originalKey);
              activeSFXKeys.current.delete(sfxSrc);
            }
          }
          
          if (sfxSrc === '/effect/Typing.ogg') {
            const key = `sfx_${chapterId}_${pageId}_${index}`;
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