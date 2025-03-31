import React from 'react'
import Image from 'next/image'

const ToBeContinued = () => {
  return (
    <div className={`w-full min-h-[100dvh] relative`}>
      <Image
        src={"/images/chapter5/ToBeContinued.gif"}
        alt="Background"
        fill
        unoptimized
        priority={true}
        className="object-cover z-0 absolute inset-0"
      />
    </div>
  )
}

export default ToBeContinued