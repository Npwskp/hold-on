import React from 'react'
import { Story } from '../types/story'

interface DialogueTemplateProps {
  storyData: Story
}

const DialogueTemplate: React.FC<DialogueTemplateProps> = ({ storyData }) => {
  return (
    <div className="dialogue-container">
      <div className="dialogue-content">
        <h2>{storyData.title}</h2>
        <p>{storyData.content}</p>
      </div>
    </div>
  )
}

export default DialogueTemplate