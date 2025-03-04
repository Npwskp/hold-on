import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getChapter } from '@/data/storyData';

type GameState = {
  currentChapter: number;
  currentPage: number;
  currentTitle: string;
  completedChapters: number[];
  selectedChoice: number[];
};

type GameContextType = {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  progressTo: (chapterId: number, pageId: number) => void;
  progressToNextPage: () => void;
  progressToPreviousPage: () => void;
  resetGame: () => void;
  selectChoice: (choiceId: number) => void;
  clearSelectedChoice: () => void;
};

const initialGameState: GameState = {
  currentChapter: 1,
  currentPage: 1,
  currentTitle: "Chapter 0: Intro",
  completedChapters: [],
  selectedChoice: [],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const progressTo = (chapterId: number, pageId: number) => {
    setGameState(prev => ({
      ...prev,
      currentChapter: chapterId,
      currentPage: pageId,
      currentTitle: getChapter(chapterId)?.title || "",
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
            currentPage: 1,
            currentTitle: nextChapter.title
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

  const progressToPreviousPage = () => {
    setGameState(prev => {
      // If we're at the first page of a chapter
      if (prev.currentPage <= 1) {
        // Check if there's a previous chapter
        const prevChapter = getChapter(prev.currentChapter - 1);
        if (prevChapter) {
          // Move to the last page of the previous chapter
          return {
            ...prev,
            currentChapter: prev.currentChapter - 1,
            currentPage: prevChapter.pages.length,
            currentTitle: prevChapter.title
          };
        }
        // If no previous chapter, stay on the first page
        return prev;
      }
      // Otherwise, just move to the previous page in the current chapter
      return {
        ...prev,
        currentPage: prev.currentPage - 1
      };
    });
  };

  const selectChoice = (choiceId: number) => {
    setGameState(prev => ({
      ...prev,
      selectedChoice: [...prev.selectedChoice, choiceId]
    }));
  };

  const clearSelectedChoice = () => {
    setGameState(prev => ({
      ...prev,
      selectedChoice: []
    }));
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
        progressToPreviousPage,
        resetGame,
        selectChoice,
        clearSelectedChoice
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