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
        text: "อย่างที่คิด",
        backgroundImage: "/images/background/background1.jpg",
        characterImage: "/images/chapter1/Kit1.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 4,
        type: 'dialogue',
        text: "ผมสบถหลังมองไปที่ฝูงคนที่เดินเบียดเสียดกันบนถนน",
        backgroundImage: "",
        characterImage: "/images/chapter1/Kit2.png",
        characterName: "กิต",
        isCharacterDialogue: false,
      },
      {
        id: 5,
        type: 'dialogue',
        text: "ร้อนโคตร คนก็เยอะ",
        backgroundImage: "",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 6,
        type: 'dialogue',
        text: "ผมหันไปบอก ลิน เพื่อนสนิทที่สุดเพียงคนเดียวของผมที่มาด้วยกัน",
        backgroundImage: "",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: false,
      },
      {
        id: 7,
        type: 'dialogue',
        text: "โห! คนเยอะจริง",
        backgroundImage: "",
        characterImage: "/images/chapter1/Lin1.png",
        characterName: "ลิน",
        isCharacterDialogue: true,
      },
      {
        id: 8,
        type: 'dialogue',
        text: "เอาไง กลับบ้านไปนอนยังทันนะ",
        backgroundImage: "",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 9,
        type: 'dialogue',
        text: "ผมยื่นขอเสนอ ทั้งๆที่ผมไม่ชอบจะออกมาข้างนอกในช่วงเทศกาลแบบนี้ มันก็ยังลากผมออกมาจนได้",
        backgroundImage: "",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 10,
        type: 'dialogue',
        text: "นอนอะไร นี่สงกรานต์นะ คนเยอะๆดิ ถึงจะสนุก",
        backgroundImage: "",
        characterImage: "/images/chapter1/Lin2.png",
        characterName: "ลิน",
        isCharacterDialogue: true,
      },
      {
        id: 11,
        type: 'dialogue',
        text: "ลินพูดด้วยน้ำเสียงและแววตาที่ตื่นเต้น",
        backgroundImage: "",
        characterImage: "/images/chapter1/Lin2.png",
        characterName: "ลิน",
        isCharacterDialogue: false,
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