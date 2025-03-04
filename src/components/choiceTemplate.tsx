import React from 'react'
import { StoryPage } from '../types/story'
import { Mali } from 'next/font/google'
const mali = Mali({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
})

interface ChoiceTemplateProps {
  storyData: StoryPage
  onChoiceSelect: (nextPageId: number) => void
  selectedChoice: number[]
  selectChoice: (choiceId: number) => void
  clearSelectedChoice: () => void
}

const ChoiceTemplate: React.FC<ChoiceTemplateProps> = ({ storyData, onChoiceSelect, selectedChoice, selectChoice, clearSelectedChoice }) => {
  return (
    <div 
      className="choice-container flex flex-col items-center justify-end mx-auto"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '540px',
        aspectRatio: '16/9'
      }}
    >
      {storyData.backgroundImage && (
        <img
          src={storyData.backgroundImage}
          alt="Background"
          className="object-cover z-0 absolute inset-0 w-full h-full"
        />
      )}
      
      <div className={`flex flex-col justify-center p-8 md:p-14 relative mb-[5vh] w-[85vw] md:w-[640px] aspect-[21/8] bg-white/90 rounded-lg ${mali.className} z-20`}>
        {storyData.text && (
          <div className="text-black text-lg md:text-xl mb-4 text-center">
            {storyData.text}
          </div>
        )}
        
        <div className="flex flex-col gap-4 mt-4">
          {storyData.choices?.map((choice, index) => (
            <button
              key={index}
              onClick={() => {
                if (choice.nextPageId === -1) {
                  clearSelectedChoice();
                } else {
                  selectChoice(choice.nextPageId);
                  onChoiceSelect(choice.nextPageId);
                }
              }}
              disabled={selectedChoice.includes(choice.nextPageId)}
              className={`w-full p-4 text-white rounded-lg transition-colors duration-200 text-lg md:text-xl ${
                selectedChoice.includes(choice.nextPageId)
                  ? 'bg-black/40 cursor-not-allowed'
                  : 'bg-black/90 hover:bg-black/80'
              }`}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChoiceTemplate