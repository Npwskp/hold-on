import React from 'react'

const KitHoldScence = () => {
  return (
    <div 
      className={`dialogue-container flex flex-col items-center justify-end mx-auto w-full max-w-[540px]`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        aspectRatio: '16/9'
      }}
    >
        <video
        src="/images/chapter4/CutScene2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover z-0 absolute inset-0 w-full h-full"
        />
    </div>
  )
}

export default KitHoldScence