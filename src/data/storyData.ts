import LandingPage from '@/components/chapter0/landingPage';
import Warning from '@/components/chapter0/warning';
import StoryPage1 from '@/components/chapter1/story_page_1';
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