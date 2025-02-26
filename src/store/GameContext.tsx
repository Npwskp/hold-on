import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getChapter } from '@/data/storyData';

type GameState = {
  currentChapter: number;
  currentPage: number;
  completedChapters: number[];
};

type GameContextType = {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  progressTo: (chapterId: number, pageId: number) => void;
  progressToNextPage: () => void;
  resetGame: () => void;
  currentChapter: number | null;
};

const initialGameState: GameState = {
  currentChapter: 1,
  currentPage: 1,
  completedChapters: [],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const progressTo = (chapterId: number, pageId: number) => {
    setGameState(prev => ({
      ...prev,
      currentChapter: chapterId,
      currentPage: pageId,
      completedChapters: 
        !prev.completedChapters.includes(chapterId) 
          ? [...prev.completedChapters, chapterId]
          : prev.completedChapters
    }));
  };

  const progressToNextPage = () => {
    setGameState(prev => {
      const currentChapter = getChapter(prev.currentChapter);
      // If we've reached the end of the current chapter's pages
      if (currentChapter && prev.currentPage >= currentChapter.pages.length) {
        // Check if there's a next chapter
        const nextChapter = getChapter(prev.currentChapter + 1);
        if (nextChapter) {
          // Move to the next chapter, starting at page 1
          return {
            ...prev,
            currentChapter: prev.currentChapter + 1,
            currentPage: 1
          };
        }
        // If no next chapter, stay on the last page
        return prev;
      }
      // Otherwise, just move to the next page in the current chapter
      return {
        ...prev,
        currentPage: prev.currentPage + 1
      };
    });
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  return (
    <GameContext.Provider 
      value={{ 
        gameState, 
        setGameState, 
        progressTo, 
        progressToNextPage,
        resetGame,
        currentChapter: null
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}; 