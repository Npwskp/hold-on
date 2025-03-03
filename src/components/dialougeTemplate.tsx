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
      className={`dialogue-container flex flex-col items-center justify-end mx-auto`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: storyData.backgroundImage?.includes('SongkranScene') ? '100vw' : '100%',
        maxWidth: storyData.backgroundImage?.includes('SongkranScene') ? 'none' : '540px',
        aspectRatio: storyData.backgroundImage?.includes('SongkranScene') ? 'auto' : '16/9'
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
          className="w-[50vw] md:w-[25vw] h-auto me-28 md:me-40 z-10 relative"
        />
      )}
      
      {storyData.text && (
        <div className={`flex flex-col justify-center p-8 md:p-14 relative mb-[5vh] w-[85vw] md:w-[640px] aspect-[21/8] bg-white/90 rounded-lg ${mali.className} z-20`}>
          {storyData.isCharacterDialogue && (
            <div className="absolute -top-8 md:-top-10 left-[5%] bg-black/90 w-[30%] md:w-[150px] aspect-[20/9] rounded-xl flex justify-center items-center">
              <h2 className="text-xl md:text-2xl">{storyData.characterName}</h2>
            </div>
          )}
          <div className={`text-black text-lg md:text-xl ${storyData.isCharacterDialogue ? '' : 'text-center'}`}>
            {storyData.text}
          </div>
        </div>
      )}
    </div>
  )
}

export default DialogueTemplate