import React from 'react'
import { StoryPage } from '@/types/story'
import { Mali } from 'next/font/google'

const mali = Mali({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
})

interface ChoiceTemplate2Props {
  storyData: StoryPage
  onChoiceSelect: (nextPageId: number) => void
  selectedChoice: number[]
  selectChoice: (choiceId: number) => void
  clearSelectedChoice: () => void
}
const ChoiceTemplate2: React.FC<ChoiceTemplate2Props> = ({ storyData, onChoiceSelect, selectedChoice, selectChoice, clearSelectedChoice }) => {
  return (
    <div className="relative w-full h-screen max-w-[540px] mx-auto">
      {/* Background image container */}
      <div className="absolute inset-0">
        <img
          src={storyData.backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Phone screen content container */}
      <div className="absolute left-[54%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] md:w-[35%] flex flex-col justify-center">
        {/* Choices container */}
        <div className={`${mali.className} flex flex-col gap-[8vh] w-full px-4 md:px-3`}>
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
              className={`w-full py-2 px-3 text-white rounded-lg transition-colors duration-200 text-[11px] md:text-xs leading-tight ${
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

export default ChoiceTemplate2