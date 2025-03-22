export type StoryPage = {
  id: number;
  text?: string;
  type: 'dialogue' | 'custom' | 'choice' | 'middleText';
  choices?: {
    id: number;
    text: string;
    nextPageId: number;
  }[];
  component?: React.ComponentType;
  backgroundImage?: string;
  characterImage?: string;
  characterName?: string;
  isCharacterDialogue?: boolean;
  isVideo?: boolean;
  parentPageId?: number;
  choicesId?: number;
  animation?: {
    type: 'typewriter';
    speed?: number; // typing speed in milliseconds per character
    delay?: number; // delay between each line in milliseconds
  };
};

export type Chapter = {
  id: number;
  title: string;
  pages: StoryPage[];
};

export interface Story {
  title: string;
  content: string;
}