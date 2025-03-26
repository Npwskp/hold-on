import React from 'react'
import { StoryPage } from '../types/story'
import Image from 'next/image'
import { Mali } from 'next/font/google'
interface DialogueTemplateProps {
  storyData: StoryPage
  chapterId: number
}

const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const DialogueTemplate: React.FC<DialogueTemplateProps> = ({ storyData, chapterId }) => {
  return (
    <div 
      className={`dialogue-container flex flex-col items-center justify-end mx-auto w-full max-w-[540px]`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        aspectRatio: '16/9'
      }}
    >
      {storyData.backgroundImage && (
        storyData.isVideo ? (
          <video
            src={storyData.backgroundImage}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover z-0 absolute inset-0 w-full h-full"
          />
        ) : (
          <Image
            src={storyData.backgroundImage}
            alt="Background"
            fill
            priority={true}
            className="object-cover z-0 absolute inset-0"
          />
        )
      )}
      {storyData.characterImage && (
        <Image 
          src={storyData.characterImage} 
          alt={storyData.characterName || ''} 
          width={500} 
          height={500}
          priority={true}
          className="w-[40%] md:w-[50%] h-auto me-28 md:me-40 z-10 relative"
        />
      )}
      
      {storyData.text && (
        <div className={`flex flex-col justify-center p-8 md:p-14 relative mb-[5vh] w-[85%] md:w-[90%] aspect-[21/8] ${chapterId == 4 ? 'bg-gray-custom/90' : 'bg-white/90'} rounded-lg ${mali.className} z-20`}>
          {storyData.isCharacterDialogue && (
            <div className="absolute -top-8 md:-top-10 left-[5%] w-[30%] md:w-[150px] aspect-[20/9] rounded-xl z-50">
              <div className="absolute inset-0 bg-black rounded-xl" style={{ opacity: 0.9 }}></div>
              <div className="relative flex justify-center items-center h-full">
                <h2 className="text-xl md:text-2xl text-white">{storyData.characterName}</h2>
              </div>
            </div>
          )}
          <div className={`${chapterId == 4 ? 'text-white' : 'text-black'} text-lg md:text-xl ${storyData.isCharacterDialogue ? '' : 'text-center'} relative z-20`}>
            {storyData.text}
          </div>
        </div>
      )}
    </div>
  )
}

export default DialogueTemplate