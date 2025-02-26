  import { useGame } from '../store/GameContext';
  import { getPage, getChapter } from '../data/storyData';

export default function StoryGame() {
  const { gameState, progressToNextPage } = useGame();
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
    <div className="min-h-[100dvh] w-full ">
      <div onClick={() => progressToNextPage()}>
        {renderPageContent()}
      </div>
    </div>
  );
}
