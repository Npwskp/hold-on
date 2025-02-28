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
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit1.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 4,
        type: 'dialogue',
        text: "ผมสบถหลังมองไปที่ฝูงคนที่เดินเบียดเสียดกันบนถนน",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit2.png",
        characterName: "กิต",
        isCharacterDialogue: false,
      },
      {
        id: 5,
        type: 'dialogue',
        text: "ร้อนโคตร คนก็เยอะ",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 6,
        type: 'dialogue',
        text: "ผมหันไปบอก ลิน เพื่อนสนิทที่สุดเพียงคนเดียวของผมที่มาด้วยกัน",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: false,
      },
      {
        id: 7,
        type: 'dialogue',
        text: "โห! คนเยอะจริง",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin1.png",
        characterName: "ลิน",
        isCharacterDialogue: true,
      },
      {
        id: 8,
        type: 'dialogue',
        text: "เอาไง กลับบ้านไปนอนยังทันนะ",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 9,
        type: 'dialogue',
        text: "ผมยื่นขอเสนอ ทั้งๆที่ผมไม่ชอบจะออกมาข้างนอกในช่วงเทศกาลแบบนี้ มันก็ยังลากผมออกมาจนได้",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 10,
        type: 'dialogue',
        text: "นอนอะไร นี่สงกรานต์นะ คนเยอะๆดิ ถึงจะสนุก",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin2.png",
        characterName: "ลิน",
        isCharacterDialogue: true,
      },
      {
        id: 11,
        type: 'dialogue',
        text: "ลินพูดด้วยน้ำเสียงและแววตาที่ตื่นเต้น",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin2.png",
        characterName: "ลิน",
        isCharacterDialogue: false,
      },
      {
        id: 12,
        type: 'dialogue',
        backgroundImage: '/images/chapter1/CutScene1.png',
        isCharacterDialogue: false
      },
      {
        id: 13,
        type: 'dialogue',
        text: "ทำไมแกทำหน้าแบบนั้นอ่ะ",
        backgroundImage: '/images/chapter1/CutScene1.png',
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 14,
        type: 'dialogue',
        text: "นานๆทีน่า",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin4.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 15,
        type: 'dialogue',
        text: "ลินพูดพร้อมตบที่ไหล่ของผมเบาๆก่อนจะหัวเราะออกมา",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin4.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 16,
        type: 'dialogue',
        text: "นู่น! ตรงนั้น เขามุงอะไรกันอ่ะ",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 17,
        type: 'dialogue',
        text: "เห้ย เดี๋ยว!",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 18,
        type: 'dialogue',
        text: "ยังไม่ทันได้พูดอะไรลินก็ออกวิ่งหายไปกลางกลุ่มฝูงชน",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 19,
        type: 'dialogue',
        text: "เหลือจะเชื่อเลยเว้ย",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit4.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 20,
        type: 'dialogue',
        text: "ผมสบถอีกครั้ง ในขณะที่สายตาก็พยายามมองหามันไปด้วย",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 21,
        type: 'dialogue',
        text: "กิต!!",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 22,
        type: 'dialogue',
        text: "ผมกวาดตาตามเสียงที่แว่วมา",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit2.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 23,
        type: 'dialogue',
        text: "ไอ้กิต!!",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 24,
        type: 'dialogue',
        text: "… ไหนวะ",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 25,
        type: 'dialogue',
        text: "ทางนี้!",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterName: "ลิน",
        isCharacterDialogue: true
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