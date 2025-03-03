import { useGame } from '../store/GameContext';
import { getPage, getChapter } from '../data/storyData';
import DialogueTemplate from '../components/dialougeTemplate';
import MiddleTextTemplate from '../components/middleTextTemplate';
import { useEffect } from 'react';

export default function StoryGame() {
  const { gameState, progressToNextPage, progressToPreviousPage } = useGame();
  const currentPage = getPage(gameState.currentChapter, gameState.currentPage);
  const currentChapter = getChapter(gameState.currentChapter);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        progressToNextPage();
      } else if (event.key === 'ArrowLeft') {
        progressToPreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [progressToNextPage, progressToPreviousPage]);

  if (!currentPage || !currentChapter) return <div>Story not found</div>;

  const renderPageContent = () => {
    switch (currentPage.type) {
      case 'custom':
        const CustomComponent = currentPage.component;
        return CustomComponent ? <CustomComponent /> : null;
      case 'dialogue':
        return <DialogueTemplate storyData={currentPage} />;
      case 'middleText':
        return <MiddleTextTemplate storyData={currentPage} />;
      default:
        return <p>{currentPage.text}</p>;
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-black">
      <div onClick={() => progressToNextPage()}>
        {renderPageContent()}
      </div>
    </div>
  );
}
