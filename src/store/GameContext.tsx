import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    setGameState(prev => ({
      ...prev,
      currentPage: prev.currentPage + 1
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