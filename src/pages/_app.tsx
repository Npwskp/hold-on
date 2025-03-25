import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GameProvider, useGame } from '../store/GameContext';
import { useState, useEffect } from 'react';
import { preloadResources, type Resource } from '@/utils/resourcePreloader';
import LoadingScreen from '@/components/LoadingScreen';

// Wrapper component to access context
function AppContent({ Component, ...props }: AppProps) {
  const { gameState } = useGame();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const title = gameState.currentChapter 
    ? `รอก่อนนะ - ${gameState.currentTitle}` 
    : 'รอก่อนนะ';

  useEffect(() => {
    // Split resources into critical and non-critical
    const criticalResources: Resource[] = [
      // Main images needed for initial render
      { type: 'image' as const, url: '/images/Main_Character.png' },
      { type: 'image' as const, url: '/images/Animated_Logo.gif' },
      { type: 'image' as const, url: '/images/Dialogue.png' },
      { type: 'image' as const, url: '/images/Story.png' },
      { type: 'image' as const, url: '/images/Warning.png' },
    ];

    const chapterResources: Record<string, Resource[]> = {
      chapter1: [
        { type: 'image' as const, url: '/images/chapter1/SongkranSceneCut.png' },
        { type: 'video' as const, url: '/images/chapter1/CutScene2.mp4' },
        { type: 'image' as const, url: '/images/chapter1/CutScene4.gif' },
        { type: 'image' as const, url: '/images/chapter1/CutScene3.png' },
        { type: 'image' as const, url: '/images/chapter1/CutScene1.png' },
        { type: 'image' as const, url: '/images/chapter1/SongkranScene.png' },
        { type: 'image' as const, url: '/images/chapter1/RoadScene.png' },
        { type: 'image' as const, url: '/images/chapter1/Kit1.png' },
        { type: 'image' as const, url: '/images/chapter1/Kit2.png' },
        { type: 'image' as const, url: '/images/chapter1/Kit3.png' },
        { type: 'image' as const, url: '/images/chapter1/Kit4.png' },
        { type: 'image' as const, url: '/images/chapter1/Lin1.png' },
        { type: 'image' as const, url: '/images/chapter1/Lin2.png' },
        { type: 'image' as const, url: '/images/chapter1/Lin3.png' },
        { type: 'image' as const, url: '/images/chapter1/Lin4.png' },
      ],
      chapter2: [
        { type: 'image' as const, url: '/images/chapter2/Doctor1.png' },
        { type: 'image' as const, url: '/images/chapter2/Doctor2.png' },
        { type: 'image' as const, url: '/images/chapter2/Doctor3.png' },
        { type: 'image' as const, url: '/images/chapter2/Doctor4.png' },
        { type: 'image' as const, url: '/images/chapter2/Doctor5.png' },
        { type: 'image' as const, url: '/images/chapter2/Doctor6.png' },
        { type: 'image' as const, url: '/images/chapter2/Doctor7.png' },
        { type: 'image' as const, url: '/images/chapter2/EmergencyRoom.png' },
        { type: 'image' as const, url: '/images/chapter2/Kit3.png' },
        { type: 'image' as const, url: '/images/chapter2/Kit5.png' },
        { type: 'image' as const, url: '/images/chapter2/Kit6.png' },
      ],
      chapter3: [
        { type: 'image' as const, url: '/images/chapter3/PhoneAndHandCrop.png' },
        { type: 'image' as const, url: '/images/chapter3/Dialogue2.png' },
        { type: 'image' as const, url: '/images/chapter3/CutScene5.gif' },
        { type: 'image' as const, url: '/images/chapter3/PhoneWithScene.png' },
        { type: 'image' as const, url: '/images/chapter3/Kit2-1.png' },
        { type: 'image' as const, url: '/images/chapter3/Kit2-2.png' },
        { type: 'image' as const, url: '/images/chapter3/Kit2-3.png' },
        { type: 'image' as const, url: '/images/chapter3/Hallway.png' },
        { type: 'image' as const, url: '/images/chapter3/MedicalRoom.png' },
        { type: 'image' as const, url: '/images/chapter3/PhoneAndHand.png' },
      ],
      chapter4: [
        { type: 'image' as const, url: '/images/chapter4/Sunrise.png' },
        { type: 'video' as const, url: '/images/chapter4/CutScene2.mp4' },
        { type: 'video' as const, url: '/images/chapter4/CutScene1.mp4' },
        { type: 'image' as const, url: '/images/chapter4/Kit3-1.png' },
        { type: 'image' as const, url: '/images/chapter4/Kit3-2.png' },
        { type: 'image' as const, url: '/images/chapter4/Kit3-3.png' },
        { type: 'image' as const, url: '/images/chapter4/Kit3-4.png' },
        { type: 'image' as const, url: '/images/chapter4/RoadwayBlur.png' },
        { type: 'image' as const, url: '/images/chapter4/MountainBlur.png' },
        { type: 'image' as const, url: '/images/chapter4/Roadway.png' },
        { type: 'image' as const, url: '/images/chapter4/Lin2-1.png' },
        { type: 'image' as const, url: '/images/chapter4/Mountain.png' },
      ],
      chapter5: [
        { type: 'image' as const, url: '/images/chapter5/Lin.gif' },
        { type: 'video' as const, url: '/images/chapter5/ToBeContinued.mp4' },
        { type: 'image' as const, url: '/images/chapter5/StemCell.gif' },
        { type: 'image' as const, url: '/images/chapter5/TwoHandWithRedRope.gif' },
      ],
      audio: [
        { type: 'audio' as const, url: '/music/Songkran.mp3' },
        { type: 'audio' as const, url: '/music/MainMenu.mp3' },
        { type: 'audio' as const, url: '/music/Waiting.mp3' },
        { type: 'audio' as const, url: '/music/Accident.mp3' },
        { type: 'audio' as const, url: '/music/EndingCutScene.mp3' },
        { type: 'audio' as const, url: '/music/Wind.mp3' },
        { type: 'audio' as const, url: '/music/Love.mp3' },
      ],
      effects: [
        { type: 'audio' as const, url: '/effect/Scream.ogg' },
        { type: 'audio' as const, url: '/effect/Typing.ogg' },
        { type: 'audio' as const, url: '/effect/CarBrakeCrash.ogg' },
        { type: 'audio' as const, url: '/effect/Crowded People.ogg' },
        { type: 'audio' as const, url: '/effect/EarRinging.ogg' },
        { type: 'audio' as const, url: '/effect/HeartMonitor.wav' },
      ],
    };

    const loadResources = async () => {
      // Load critical resources first
      await preloadResources(criticalResources);
      setLoadingProgress(20); // First 20% for critical resources

      // Load remaining resources in background
      const totalChapters = Object.keys(chapterResources).length;
      let loadedChapters = 0;

      for (const [, resources] of Object.entries(chapterResources)) {
        await preloadResources(resources);
        loadedChapters++;
        const chapterProgress = loadedChapters / totalChapters;
        setLoadingProgress(20 + (chapterProgress * 80)); // Remaining 80% for other resources
      }

      setIsLoading(false);
    };

    loadResources();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/Main_Character.png" />
        <meta name="description" content="รอก่อนนะ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isLoading ? (
        <LoadingScreen progress={loadingProgress} />
      ) : (
        <div className="relative">
          <Component {...props} />
        </div>
      )}
    </>
  );
}

// Main App component
export default function App(props: AppProps) {
  return (
    <GameProvider>
      <AppContent {...props} />
    </GameProvider>
  );
}
