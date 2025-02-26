export type StoryPage = {
  id: number;
  text?: string;
  type: 'dialogue' | 'custom' | 'choice' | 'story';
  choices?: {
    text: string;
    nextPageId: number;
  }[];
  component?: React.ComponentType;
  backgroundImage?: string;
  characterImage?: string;
  isCharacterDialogue?: boolean;
};

export type Chapter = {
  id: number;
  title: string;
  pages: StoryPage[];
};