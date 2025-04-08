import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GameProvider, useGame } from '../store/GameContext';
import { useState, useEffect } from 'react';
import { preloadResources, type Resource } from '@/utils/resourcePreloader';
import { Analytics } from "@vercel/analytics/next";
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
        { type: 'video' as const, url: '/images/chapter1/CutScene2.mp4' },
        { type: 'image' as const, url: '/images/chapter1/CutScene4.gif' },
      ],
      audio: [
        { type: 'audio' as const, url: '/music/Songkran.mp3' },
        { type: 'audio' as const, url: '/music/MainMenu.mp3' },
        { type: 'audio' as const, url: '/music/Waiting.mp3' },
        { type: 'audio' as const, url: '/music/Accident.mp3' },
        { type: 'audio' as const, url: '/music/EndingCutScene.mp3' },
        { type: 'audio' as const, url: '/music/Wind.mp3' },
        { type: 'audio' as const, url: '/music/Love.mp3' },
        { type: 'audio' as const, url: '/effect/Typing.wav' },
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
      <Analytics/>
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
