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
    <div className="relative w-full max-w-[540px] mx-auto h-screen">
      {/* Background layer */}
      <div className="absolute inset-0">
        <img
          src={storyData.backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Phone layer */}
      <div className="absolute inset-0">
        <img
          src={"/images/chapter3/PhoneAndHandCrop.png"}
          alt="Phone"
          className="h-full object-cover mx-auto"
        />
      </div>

      {/* Choices layer */}
      <div className={`${mali.className} relative flex flex-col justify-center items-center w-full h-full px-8 md:px-3`}>
				<div className="w-[80vw] md:w-[350px] h-[80vh] bg-white/90 rounded-lg flex flex-col justify-center items-center gap-[8vh]">
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
							className={`w-[60vw] md:w-[300px] h-[15vh] py-2 px-4 text-white rounded-lg transition-colors duration-200 text-lg md:text-xl leading-tight ${
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