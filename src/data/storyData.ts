import LandingPage from '@/components/chapter0/landingPage';
import Warning from '@/components/chapter0/warning';
import StoryPage2 from '@/components/chapter1/storyPage2';
import { Chapter } from '../types/story';
import Fact1 from '@/components/chapter1/fact1';
import EmergencyScene from '@/components/chapter2/emergencyScene';
import Fact2 from '@/components/chapter2/fact2';
import Fact3 from '@/components/chapter2/fact3';
import Fact4 from '@/components/chapter2/fact4';
import Fact5 from '@/components/chapter3/fact5';
import Fact6 from '@/components/chapter3/fact6';
import Fact7 from '@/components/chapter3/fact7';

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
    title: "Chapter 0: Intro",
    pages: [
      {
        id: 1,
        type: 'middleText',
        text: "เรื่องราวเกิดขึ้นในช่วงกลางเดือนเมษายน\nท่ามกลางเสียงหัวเราะและดนตรีดังกระหึ่ม",
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
      {
        id: 26,
        type: 'dialogue',
        text: "และในตอนนั้นเอง ผมก็เห็นร่างเล็กๆ พยายามกระโดดโบกมือออกมาจากฝูงชน",
        backgroundImage: "/images/chapter1/CutScene2.mp4",
        characterName: "กิต",
        isCharacterDialogue: false,
        isVideo: true
      },
      {
        id: 27,
        type: 'dialogue',
        text: "ถึงจะนิสัยต่างกัน แต่ผมกับลินเป็นเพื่อน สนิทกันมาได้นานขนาดนี้",
        backgroundImage: "/images/chapter1/CutScene2.mp4",
        characterName: "กิต",
        isCharacterDialogue: false,
        isVideo: true
      },
      {
        id: 28,
        type: 'dialogue',
        text: "การมีลินอยู่ในชีวิตถึงจะวุ่นวายไปซักหน่อย",
        backgroundImage: "/images/chapter1/CutScene2.mp4",
        characterName: "ลิน",
        isCharacterDialogue: false,
        isVideo: true
      },
      {
        id: 29,
        type: 'dialogue',
        text: "แต่ลึกๆ ผมก็หวัง อยากให้ความสุขแบบนี้ คงอยู่ตลอดไป",
        backgroundImage: "/images/chapter1/CutScene2.mp4",
        characterName: "กิต",
        isCharacterDialogue: false,
        isVideo: true
      },
      {
        id: 30,
        type: 'dialogue',
        text: "ข้าวไข่เจียวป่าว!",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 31,
        type: 'dialogue',
        text: "เสียงเล็กๆแว่วตามเสียงดนตรีเบสหนัก",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 32,
        type: 'dialogue',
        text: "ฮะ?!",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 33,
        type: 'dialogue',
        text: "ตรงนี้เขาขายข้าวไข่เจียว! เอาป่าว",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 34,
        type: 'dialogue',
        text: "ลินขยับปากและทำท่าทางประหลาด จากตรงนั้น เพื่อทำให้ผมเข้าใจ",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin1.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 35,
        type: 'dialogue',
        text: "ไม่เอา! ออกมา!",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit4.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 36,
        type: 'dialogue',
        text: "ผมตะโกนบอก พร้อมทำท่าทางปฎิเสธ และกวักมือเรียกเธอออกมา",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit4.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 37,
        type: 'dialogue',
        text: "ลินพยักหน้าแล้วหันกลับไปยังกลุ่มฝูงชน",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Lin3.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 38,
        type: 'dialogue',
        text: "และเมื่อวิเคราะห์จากประสบการณ์ที่ผ่านมาจากการเป็นเพื่อนกันเกิน10ปี",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit1.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 39,
        type: 'dialogue',
        text: "ไอ้นี่… ซื้อชัวร์",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit1.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 40,
        type: 'dialogue',
        text: "ใจจะซื้ออยู่แล้วจะหันมาถามทำไมวะ",
        backgroundImage: "/images/chapter1/SongkranScene.png",
        characterImage: "/images/chapter1/Kit4.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 41,
        type: 'dialogue',
        text: "ผมยืนรออยู่อีกฟากของถนนแบบเซ็งๆ ในขณะที่มองผู้คนที่ผ่านไปผ่านมา",
        backgroundImage: "/images/chapter1/CutScene3.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 42,
        type: 'dialogue',
        text: "ลินพูดพร้อมตบที่ไหล่ของผมเบาๆก่อนจะหัวเราะออกมา",
        backgroundImage: "/images/chapter1/CutScene3.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 43,
        type: 'dialogue',
        text: "จู่ๆก็มีลมวูบใหญ่พัดผ่านใบหน้าผมไปพร้อมเสียงดังสนั่น",
        backgroundImage: "/images/chapter1/CutScene3.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 44,
        type: 'middleText',
        text: "เสียงดนตรีถูกกลบด้วยเสียงกรีดร้อง\nรอยยิ้มของผู้คนกลับเปลี่ยนเป็นสีหน้าตื่นตระหนก",
      },
      {
        id: 45,
        type: 'dialogue',
        text: "ฝูงชนที่เคยมุงกันอยู่ตรงหน้าหายไป",
        backgroundImage: "/images/chapter1/CutScene4.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 46,
        type: 'dialogue',
        text: "เหลือเพียงรถกระบะคันใหญ่มาแทนที่",
        backgroundImage: "/images/chapter1/CutScene4.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 47,
        type: 'dialogue',
        text: "ทันใดนั้นโลกพลันเงียบสงัด เสียงวิ้ง\nในหูกลบเสียงเอะอะโวยวายรอบตัว",
        backgroundImage: "/images/chapter1/CutScene4.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 48,
        type: 'dialogue',
        text: "ลิน?",
        backgroundImage: "/images/chapter1/CutScene4.gif",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 49,
        type: 'dialogue',
        text: "ไม่รู้นานเท่าไหร่ที่ผมยืนนิ่งอยู่ตรงนั้น ราวกับหุ่นไร้วิญญาณ",
        backgroundImage: "/images/chapter1/CutScene4.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 50,
        type: 'dialogue',
        text: "แต่ในที่สุดผมก็เริ่มรู้ตัว",
        backgroundImage: "/images/chapter1/CutScene4.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 51,
        type: 'dialogue',
        text: "ในตอนที่ได้กลิ่นของน้ำอบ",
        backgroundImage: "/images/chapter1/CutScene4.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 52,
        type: 'middleText',
        text: "ถูกปะปน ด้วยกลิ่นของคาวเลือด",
      },
      {
        id: 53,
        type: 'middleText',
        text: "“รอก่อนนะ ไม่เป็นไร\nเดี๋ยวก็ถึงโรงพยาบาลแล้ว”",
      },
      {
        id: 54,
        type: 'custom',
        component: Fact1,
      }
    ]
  },
  {
    id: 3,
    title: "Chapter 1: Take a moment",
    pages: [
      {
        id: 1,
        type: 'custom',
        component: EmergencyScene,
      },
      {
        id: 2,
        type: 'dialogue',
        text: "คุณหมอกำลังรักษาอยู่ ญาติคนไข้นั่งรอก่อนนะคะ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterName: "พยาบาล",
        isCharacterDialogue: true
      },
      {
        id: 3,
        type: 'dialogue',
        text: "คุณพยาบาลบอกผมด้วยน้ำเสียงจริงจัง หลังผมลุกไปถามถึงลินเป็นรอบที่สาม",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterName: "พยาบาล",
        isCharacterDialogue: false
      },
      {
        id: 4,
        type: 'dialogue',
        text: "ทันใดนั้นเองคุณหมอก็ออกมาจากประตู ผมรีบวิ่งพรวดเข้าไปหาก่อนพยาบาลคนนั้นจะเอื้อมมือมารั้งผมได้",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 5,
        type: 'dialogue',
        text: "เป็นยังไงบ้างครับคุณหมอ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 6,
        type: 'dialogue',
        text: "คุณหมอสะดุ้งเล็กน้อยตอนเห็นผมวิ่งหน้าเกือบทิ่มไปจุ่มเท้าเขา ก่อนจะตอบด้วยน้ำเสียงเรียบเฉย",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor1.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: false
      },
      {
        id: 7,
        type: 'dialogue',
        text: "อาการยังน่าเป็นห่วงครับ เพราะคนไข้เสียเลือดค่อนข้างเยอะ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor2.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true
      },
      {
        id: 8,
        type: 'dialogue',
        text: "เขาพูดทั้งๆที่ยังคงก้มดูกระดานในมือ แต่ท่าทางที่ดูเรียบเฉย ไม่สามารถกลบความเหนื่อยล้าทางแววตาของเขาได้เลย",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor3.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: false
      },
      {
        id: 9,
        type: 'dialogue',
        text: "อีกอย่าง..",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor4.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true
      },
      {
        id: 10,
        type: 'dialogue',
        text: "เขาเงยหน้าขึ้นมามองผม",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor5.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: false
      },
      {
        id: 11,
        type: 'dialogue',
        text: "เลือดในคลังเราเหลือไม่มากพอจะทำการผ่าตัดให้เธอได้ทันที",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor4.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true
      },
      {
        id: 12,
        type: 'choice',
        text: "ผมจะทำอย่างไรดี...",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        choices: [
          {
            id: 1,
            text: "เอาเลือดของผมไปก่อนไม่ได้หรอครับ",
            nextPageId: 13
          },
          {
            id: 2,
            text: "คนจะตายอยู่แล้วจะให้มารอได้ยังไง!",
            nextPageId: 17
          },
          {
            id: -1,
            text: "เข้าใจแล้วครับ",
            nextPageId: 23
          }
        ]
      },
      {
        id: 13,
        type: 'dialogue',
        text: "ผมจำได้ว่าผมเลือดกรุ๊ป O เหมือนลิน เอาเลือดของผมไปไม่ได้หรอครับ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Kit3.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 14,
        type: 'dialogue',
        text: "ขอโทษด้วยจริงๆ ครับ เลือดที่จะนำมารักษาผู้ป่วยจะต้องได้รับการตรวจคัดกรองจากห้องแล็บก่อน ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor4.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true,
      },
      {
        id: 15,
        type: 'dialogue',
        text: "แล้วจากประวัติผู้ป่วย กรุ๊ปเลือดเธอเป็น O- ต้องรับเลือดกรุ๊ป O- เหมือนกันเท่านั้นครับ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor4.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true,
      },
      {
        id: 16,
        type: 'custom',
        component: Fact2,
        parentPageId: 12,
      },
      {
        id: 17,
        type: 'dialogue',
        text: "คนจะตายอยู่ตรงหน้าหมอจะมาบอกให้ผมรอเนี่ยนะ!",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Kit5.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 18,
        type: 'dialogue',
        text: "ผมขึ้นเสียง ทั้งๆที่รู้ว่าไม่ควรทำ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Kit5.png",
        characterName: "กิต",
        isCharacterDialogue: false,
      },
      {
        id: 19,
        type: 'dialogue',
        text: "ขอโทษด้วยจริงๆครับ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor4.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true,
      },
      {
        id: 20,
        type: 'dialogue',
        text: "สีหน้าของคุณหมอยังคงสุขุมและเรียบเฉย",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor7.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: false,
      },
      {
        id: 21,
        type: 'dialogue',
        text: "ปกติช่วงสงกรานต์แบบนี้ เลือดในคลังเรามีไม่พอใช้อยู่แล้ว ยิ่งกับอุบัติเหตุใหญ่กระทันหันแบบนี้อีก",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor6.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true,
      },
      {
        id: 22,
        type: 'custom',
        component: Fact3,
        parentPageId: 12,
      },
      {
        id: 23,
        type: 'dialogue',
        text: "เข้าใจแล้วครับ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Kit6.png",
        characterName: "กิต",
        isCharacterDialogue: true,
      },
      {
        id: 24,
        type: 'dialogue',
        text: "ผมเข้าใจว่าคุณกำลังร้อนใจ ผมเองก็เสียใจที่ต้องบอกว่าเราทำได้แค่รอ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor4.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true,
      },
      {
        id: 25,
        type: 'dialogue',
        text: "แต่ไม่ว่ายังไงทางโรงพยาบาลสัญญาว่าจะดูแลเธอให้ถึงที่สุดครับ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor4.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: true,
      },
      {
        id: 26,
        type: 'dialogue',
        text: "เขาพูดทิ้งท้ายก่อนขอตัวไปทำงานต่อ",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterImage: "/images/chapter2/Doctor7.png",
        characterName: "คุณหมอ",
        isCharacterDialogue: false,
      },
      {
        id: 27,
        type: 'dialogue',
        text: "ผมเดินกลับไปนั่งเก้าอี้หน้าห้องฉุกเฉินที่ตอนนี้เต็มไปด้วยญาติคนเจ็บคนอื่นๆกำลังนั่งรออย่างสิ้นหวัง",
        backgroundImage: "/images/chapter2/EmergencyRoom.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 28,
        type: 'middleText',
        text: "“รอก่อนนะ\nมันจะต้องมีทางอื่นๆที่ช่วยได้แน่”",
      },
      {
        id: 29,
        type: 'custom',
        component: Fact4
      }
    ]
  },
  {
    id: 4,
    title: "Chapter 2: That's all we can do",
    pages: [
      {
        id: 1,
        type: 'dialogue',
        text: "ผมเกลียดการรอคอย เกลียดที่ตัวเองทำได้แค่นั้น",
        backgroundImage: "/images/chapter3/Hallway.png",
        characterImage: "/images/chapter3/Kit2-1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 2,
        type: 'dialogue',
        text: "ในระหว่างที่นั่งรอนี้ ผมพยายามคิดว่าจะช่วยอะไรได้บ้าง",
        backgroundImage: "/images/chapter3/Hallway.png",
        characterImage: "/images/chapter3/Kit2-1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 3,
        type: 'dialogue',
        text: "ถ้าเป็นคนอื่นที่ตกอยู่ในสถานการณ์แบบนี้เขาจะทำอะไรกันนะ",
        backgroundImage: "/images/chapter3/Hallway.png",
        characterImage: "/images/chapter3/Kit2-1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 4,
        type: 'dialogue',
        backgroundImage: "/images/chapter3/PhoneWithScene.png",
      },
      {
        id: 5,
        type: 'choice',
        backgroundImage: "/images/chapter3/MedicalRoom.png",
        choices: [
          {
            id: 1,
            text: "ติดต่อญาติของลินที่อาจจะมีเลือดกรุ๊ปตรงกันและมาช่วยได้",
            nextPageId: 6
          },
          {
            id: 2,
            text: "โพสต์ขอความช่วยเหลือผ่านโซเชียลมีเดีย",
            nextPageId: 8
          },
          {
            id: -1,
            text: "นั่งรอต่อไป ตามที่หมอบอก",
            nextPageId: 10
          }
        ]
      },
      {
        id: 6,
        type: 'custom',
        component: Fact5
      },
      {
        id: 7,
        type: 'dialogue',
        text: "ไม่ไหวแฮะ คุณหมอก็บอกแล้วด้วยว่าผู้บริจาคต้องสุขภาพแข็งแรง และเตรียมตัวมาอย่างดี ต่อให้มาได้จริงก็อาจบริจาคไม่ได้ แถมต้องผ่านขั้นตอนตรวจเลือดอีก",
        backgroundImage: "/images/chapter3/Hallway.png",
        characterImage: "/images/chapter3/Kit2-2.png",
        characterName: "กิต",
        isCharacterDialogue: true,
        parentPageId: 5
      },
      {
        id: 8,
        type: 'custom',
        component: Fact6
      },
      {
        id: 9,
        type: 'dialogue',
        text: "ไม่ไหวแฮะ คุณหมอก็บอกแล้วด้วยว่าผู้บริจาคต้องสุขภาพแข็งแรง และเตรียมตัวมาอย่างดี ต่อให้มาได้จริงก็อาจบริจาคไม่ได้ แถมต้องผ่านขั้นตอนตรวจเลือดอีก",
        backgroundImage: "/images/chapter3/Hallway.png",
        characterImage: "/images/chapter3/Kit2-2.png",
        characterName: "กิต",
        isCharacterDialogue: true,
        parentPageId: 5
      },
      {
        id: 10,
        type: 'dialogue',
        text: "ผมตัดสินใจนั่งรอต่อไป เพราะรู้ว่าตัวเองคงทำอะไรไม่ได้จริงๆ",
        backgroundImage: "/images/chapter3/Hallway.png",
        characterImage: "/images/chapter3/Kit2-3.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 11,
        type: 'dialogue',
        backgroundImage: "/images/chapter3/CutScene5.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 12,
        type: 'dialogue',
        text: "ในระหว่างนั้นก็ได้เห็นกลุ่มคนข้างๆ นั่งลงร้องไห้หลังจากได้คุยกับคุณหมอ",
        backgroundImage: "/images/chapter3/CutScene5.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 13,
        type: 'dialogue',
        text: "บรรยากาศโรงพยาบาลตอนนี้มีแต่ความสับสนวุ่นวาย และความโศกเศร้า",
        backgroundImage: "/images/chapter3/CutScene5.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 14,
        type: 'dialogue',
        text: "ทุกภาพและเสียงรอบตัวมันกำลังทำให้ผมแทบเสียสติไปทุกที",
        backgroundImage: "/images/chapter3/CutScene5.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 15,
        type: 'dialogue',
        text: "ผมปิดหูก้มหน้าหลับตาลง ไม่อยากรับรู้อะไรอีกแล้ว",
        backgroundImage: "/images/chapter3/CutScene5.gif",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 16,
        type: 'middleText',
        text: "“ทำได้แค่รอเท่านั้น”",
      },
      {
        id: 17,
        type: 'middleText',
        text: "คำของคุณหมอยังคงก้องดังอยู่ในหัว",
      },
      {
        id: 18,
        type: 'middleText',
        text: "ผมเกลียดการรอคอย\nเกลียดที่ตัวเองทำได้แค่นั้น",
      },
      {
        id: 19,
        type: 'custom',
        component: Fact7
      }
    ]
  },
  {
    id: 5,
    title: "Chapter 4: Alternate",
    pages: [
      {
        id: 1,
        type: 'dialogue',
        backgroundImage: "/images/chapter4/Roadway.png",
        isCharacterDialogue: false
      },
      {
        id: 2,
        type: 'dialogue',
        text: "รอด้วย! จะรีบเดินไปไหน",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 3,
        type: 'dialogue',
        text: "ผมพูดพร้อมนั่งลงพักหายใจ หลังจากตามหลังลินขึ้นเขามาได้ซักพัก",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-2.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 4,
        type: 'dialogue',
        text: "เธอเอาแต่ตื่นเต้นกับวิวรอบตัวจนวิ่งนำลืมผมไปแล้ว",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-2.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 5,
        type: 'dialogue',
        text: "ช้าเกินไปละ",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 6,
        type: 'dialogue',
        text: "เธอวิ่งกลับมาหาผม",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 7,
        type: 'dialogue',
        text: "สภาพแบบนี้แกคงไปไม่ถึงจุดชมวิวหรอก",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 8,
        type: 'dialogue',
        text: "ผมมองลินที่กำลังจ่อกล้องวิดีโอมาที่หน้าของผม",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 9,
        type: 'dialogue',
        text: "แล้วใครบอกว่าอยากจะมา",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 10,
        type: 'dialogue',
        text: "ฉัน",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 11,
        type: 'dialogue',
        text: "ใช่",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-3.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 12,
        type: 'dialogue',
        text: "ผมปัดกล้องนั้นออก ก่อนจะลุกขึ้นมา",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-2.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 13,
        type: 'dialogue',
        text: "ก็แกสัญญาแล้วว่าจะมาด้วยกัน ฉันยอมให้แกเบี้ยวตั้งเป็นปีๆ",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 14,
        type: 'dialogue',
        text: "เลิกบ่นแล้วรีบเดินได้แล้ว! เดี๋ยวไม่ทันพระอาทิตย์ขึ้นหรอก",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 15,
        type: 'dialogue',
        text: "ลินพูด ก่อนจะออกเดินนำไปอีกครั้ง",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 16,
        type: 'dialogue',
        text: "ไม่ทันก็รอมาพรุ่งนี้ก็ได้ เต็นท์ก็อยู่แค่นี้",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 17,
        type: 'dialogue',
        text: "ไม่!",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 18,
        type: 'dialogue',
        text: "เธอหันมาพูดด้วยน้ำเสียงหนักแน่น",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 19,
        type: 'dialogue',
        text: "ตั้งใจจะมาวันนี้ ก็ต้องวันนี้แหละ",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 20,
        type: 'dialogue',
        text: "ครับๆ",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterImage: "/images/chapter4/Kit3-3.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 21,
        type: 'dialogue',
        text: "ผมออกก้าวเดินตามเธอไปอีกครั้ง",
        backgroundImage: "/images/chapter4/RoadwayBlur.png",
        characterName: "กิต",
      },
      {
        id: 22,
        type: 'dialogue',
        backgroundImage: "/images/chapter4/Mountain.png",
      },
      {
        id: 23,
        type: 'dialogue',
        text: "เรามาถึงจุดชมวิวได้เร็วกว่าที่คิด ทำให้ต้องมานั่งรอเวลาที่พระอาทิตย์ขึ้นอีกหลายชั่วโมง",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 24,
        type: 'dialogue',
        text: "เห็นมั้ย รีบมาก็เท่านั้น ต้องมานั่งรออยู่ดี",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Kit3-1.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 25,
        type: 'dialogue',
        text: "รอนิดรอหน่อยทำบ่น",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 26,
        type: 'dialogue',
        text: "ลินพูดด้วยน้ำเสียงประชดประชัน",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: false
      },
      {
        id: 27,
        type: 'dialogue',
        text: "ทีฉันรอแกมาเป็นปีๆกว่าจะได้มาที่นี่ด้วยกัน ฉันยังไม่บ่นเลย",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 28,
        type: 'dialogue',
        text: "คิดซะว่ารอบนี้สลับกัน แกเป็นฝ่ายรอเพื่อฉันบ้าง",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Lin2-1.png",
        characterName: "ลิน",
        isCharacterDialogue: true
      },
      {
        id: 29,
        type: 'dialogue',
        text: "เออๆ โอเค",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Kit3-4.png",
        characterName: "กิต",
        isCharacterDialogue: true
      },
      {
        id: 30,
        type: 'dialogue',
        text: "ผมหัวเราะพร้อมยกมือยอมแพ้ ผมก็บิดมันมาหลายครั้งจริงๆ",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Kit3-4.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
      {
        id: 31,
        type: 'dialogue',
        text: "แถมเถียงไปก็ไม่เคยชนะซักครั้งเลยด้วย",
        backgroundImage: "/images/chapter4/MountainBlur.png",
        characterImage: "/images/chapter4/Kit3-4.png",
        characterName: "กิต",
        isCharacterDialogue: false
      },
    ]
  }
];

// Helper functions to manage story progression
export const getPage = (chapterId: number, pageId: number) => {
  const chapter = storyData.find(c => c.id === chapterId);
  return chapter?.pages.find(p => p.id === pageId);
};

export const getChapter = (chapterId: number) => {
  return storyData.find(c => c.id === chapterId);
};