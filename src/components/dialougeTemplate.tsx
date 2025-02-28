import React from 'react'
import { StoryPage } from '../types/story'
import Image from 'next/image'
import { Mali } from 'next/font/google'
interface DialogueTemplateProps {
  storyData: StoryPage
}

const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const DialogueTemplate: React.FC<DialogueTemplateProps> = ({ storyData }) => {
  return (
    <div 
      className="dialogue-container flex flex-col items-center justify-end"
      style={{
        backgroundImage: `url(${storyData.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {storyData.characterImage && (
        <Image 
          src={storyData.characterImage} 
          alt={storyData.characterName || ''} 
          width={500} 
          height={500}
          className="w-[50vw] md:w-[25vw] h-auto me-28 md:me-40"
        />
      )}
      <div className={`flex flex-col justify-center p-8 md:p-14 relative mb-[5vh] w-[85vw] md:w-[640px] aspect-[21/8] bg-white rounded-lg ${mali.className}`}>
        {storyData.isCharacterDialogue && (
          <div className="absolute -top-8 md:-top-10 left-[5%] bg-black w-[30%] md:w-[150px] aspect-[20/9] rounded-xl flex justify-center items-center">
            <h2 className="text-xl md:text-2xl">{storyData.characterName}</h2>
          </div>
        )}
        <div className="text-black text-lg md:text-xl">
          {storyData.text}
        </div>
      </div>
    </div>
  )
}

export default DialogueTemplate