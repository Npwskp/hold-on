import { useGame } from '../store/GameContext';
import { getPage, getChapter } from '../data/storyData';
import DialogueTemplate from '../components/dialougeTemplate';
import MiddleTextTemplate from '../components/middleTextTemplate';
import ChoiceTemplate from '../components/choiceTemplate';
import { useEffect } from 'react';
import ChoiceTemplate2 from '@/components/choiceTemplate2';
import { useSound } from '../hooks/useSound';

export default function StoryGame() {
  const { gameState, progressToNextPage, progressToPreviousPage, progressTo, selectChoice, clearSelectedChoice } = useGame();
  const currentPage = getPage(gameState.currentChapter, gameState.currentPage);
  const currentChapter = getChapter(gameState.currentChapter);

  // Initialize sound system with current chapter and page
  useSound({ 
    chapterId: gameState.currentChapter,
    pageId: gameState.currentPage 
  });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && currentPage?.type !== 'choice') {
        progressToNextPage();
      } else if (event.key === 'ArrowLeft' && currentPage?.type !== 'choice') {
        progressToPreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [progressToNextPage, progressToPreviousPage, currentPage?.type]);

  if (!currentPage || !currentChapter) return <div>Story not found</div>;

  const handleChoiceSelect = (nextPageId: number) => {
    progressTo(gameState.currentChapter, nextPageId);
  };

  const renderPageContent = () => {
    switch (currentPage.type) {
      case 'custom':
        const CustomComponent = currentPage.component;
        return CustomComponent ? <CustomComponent /> : null;
      case 'dialogue':
        return <DialogueTemplate storyData={currentPage} chapterId={gameState.currentChapter} />;
      case 'middleText':
        return <MiddleTextTemplate storyData={currentPage} />;
      case 'choice':
        if (gameState.currentChapter === 4) {
          return <ChoiceTemplate2
            storyData={currentPage}
            onChoiceSelect={handleChoiceSelect}
            selectedChoice={gameState.selectedChoice}
            selectChoice={selectChoice}
            clearSelectedChoice={clearSelectedChoice}
          />;
        }
        return <ChoiceTemplate
          storyData={currentPage}
          onChoiceSelect={handleChoiceSelect}
          selectedChoice={gameState.selectedChoice}
          selectChoice={selectChoice}
          clearSelectedChoice={clearSelectedChoice}
        />;
      default:
        return <p>{currentPage.text}</p>;
    }
  };

  return (
    <div className="min-h-[100dvh] w-full relative">
      <div className="absolute inset-0 bg-black -z-10" />
      <div className='w-full h-full max-w-[540px] mx-auto'>
        {currentPage.type !== 'choice' && (
          <div onClick={() => {
            if (currentPage.parentPageId) {
              progressTo(gameState.currentChapter, currentPage.parentPageId);
            } else {
              progressToNextPage();
            }
          }}>
            {renderPageContent()}
          </div>
        )}
        {currentPage.type === 'choice' && renderPageContent()}
      </div>
    </div>
  );
}
