import LandingPage from '@/components/landingPage';
import Warning from '@/components/warning';
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
  // Add more chapters...
];

// Helper functions to manage story progression
export const getPage = (chapterId: number, pageId: number) => {
  const chapter = storyData.find(c => c.id === chapterId);
  return chapter?.pages.find(p => p.id === pageId);
};

export const getChapter = (chapterId: number) => {
  return storyData.find(c => c.id === chapterId);
}; 