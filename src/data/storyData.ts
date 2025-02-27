import LandingPage from '@/components/chapter0/landingPage';
import Warning from '@/components/chapter0/warning';
import StoryPage1 from '@/components/chapter1/storyPage1';
import StoryPage2 from '@/components/chapter1/storyPage2';
import { Chapter } from '../types/story';

export const storyData: Chapter[] = [
  {
    id: 1,
    title: "Chapter 0: Intro",
    pages: [
      {
        id: 1,
        type: 'custom',
        component: LandingPage,
      },
      {
        id: 2,
        type: 'custom',
        component: Warning,
      },
    ]
  },
  {
    id: 2,
    title: "Chapter 1: Story",
    pages: [
      {
        id: 1,
        type: 'custom',
        component: StoryPage1,
      },
      {
        id: 2,
        type: 'custom',
        component: StoryPage2,
      },
      {
        id: 3,
        type: 'dialogue',
        text: "คุณกำลังดูหนังอยู่นะจ๊ะ",
        backgroundImage: "/images/background/background1.jpg",
        characterImage: "/images/character/character1.jpg",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
    ]
  },
];

// Helper functions to manage story progression
export const getPage = (chapterId: number, pageId: number) => {
  const chapter = storyData.find(c => c.id === chapterId);
  return chapter?.pages.find(p => p.id === pageId);
};

export const getChapter = (chapterId: number) => {
  return storyData.find(c => c.id === chapterId);
}; 