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