  import { useGame } from '../store/GameContext';
  import { getPage, getChapter } from '../data/storyData';
  import DialogueTemplate from '../components/dialougeTemplate';
  import MiddleTextTemplate from '../components/middleTextTemplate';
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
