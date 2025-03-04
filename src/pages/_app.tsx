import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GameProvider, useGame } from '../store/GameContext';

// Wrapper component to access context
function AppContent({ Component, ...props }: AppProps) {
  const { gameState } = useGame();
  
  const title = gameState.currentChapter 
    ? `รอก่อนนะ - ${gameState.currentTitle}` 
    : 'รอก่อนนะ';

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/Main_Character.png" />
        <meta name="description" content="รอก่อนนะ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...props} />
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
