  import { useGame } from '../store/GameContext';
  import { getPage, getChapter } from '../data/storyData';

export default function StoryGame() {
  const { gameState, progressToNextPage, resetGame } = useGame();
  const currentPage = getPage(gameState.currentChapter, gameState.currentPage);
  const currentChapter = getChapter(gameState.currentChapter);

  if (!currentPage || !currentChapter) return <div>Story not found</div>;

  const renderPageContent = () => {
    switch (currentPage.type) {
      case 'custom':
        const CustomComponent = currentPage.component;
        return CustomComponent ? <CustomComponent /> : null;
      default:
        return <p>{currentPage.text}</p>;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6" onClick={() => progressToNextPage()}>
        {renderPageContent()}
      </div>
    </div>
  );
}
