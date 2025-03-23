export interface SoundConfig {
  bgm?: string[];      // Background music files
  sfx?: string[];      // Sound effect
  volume?: number;     // Volume level (0-1)
  loop?: boolean;      // Whether to loop the sound
}

export interface ChapterSoundConfig {
  [pageId: number]: SoundConfig;
}

export interface StorySoundConfig {
  [chapterId: number]: ChapterSoundConfig;
}

// Configure sounds for each chapter and page
export const storySounds: StorySoundConfig = {
  // Chapter 0
  1: {
    1: {
      bgm: [],
      volume: 0.25,
      loop: true
    },
    2:{
      bgm: ['/music/MainMenu.mp3'],
      volume: 0.25,
      loop: true
    },
    3:{
      bgm: ['/music/MainMenu.mp3'],
      volume: 0.25,
      loop: true
    }
  },
  2: {
    1: {
      bgm: [],
      sfx: ['/effect/Typing.mp3'],
      volume: 0.25,
      loop: true
    },
    2: {
      bgm: [],
      sfx: ['/effect/Typing.mp3'],
      volume: 0.25,
      loop: true
    },
    3: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    4: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    5: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    6: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    7: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    8: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    9: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    10: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    11: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    12: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    13: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    14: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    15: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    16: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    17: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    18: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    19: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    20: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    21: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    22: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    23: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    24: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    25: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    26: {
      bgm: ['/music/Songkran.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    27: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    28: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    29: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    30: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    31: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    32: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    33: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    34: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    35: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    36: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    37: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    38: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    39: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    40: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    41: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    42: {
      bgm: ['/music/Love.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    43: {
      bgm: [],
      sfx: ['/effect/CarBrakeCrash.mp3'],
      volume: 0.25,
      loop: true
    },
    44: {
      bgm: [],
      sfx: ['/effect/Typing.mp3','/effect/Scream.mp3'],
      volume: 0.25,
      loop: true
    },
    45: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    46: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    47: {
      bgm: ['/music/Wind.mp3'],
      sfx: ['/effect/EarRinging.mp3'],
      volume: 0.25,
      loop: true
    },
    48: {
      bgm: ['/music/Wind.mp3'],
      sfx: ['/effect/EarRinging.mp3'],
      volume: 0.25,
      loop: true
    },
    49: {
      bgm: ['/music/Wind.mp3'],
      sfx: ['/effect/EarRinging.mp3'],
      volume: 0.25,
      loop: true
    },
    50: {
      bgm: ['/music/Wind.mp3'],
      sfx: ['/effect/EarRinging.mp3'],
      volume: 0.25,
      loop: true
    },
    51: {
      bgm: ['/music/Wind.mp3'],
      sfx: ['/effect/EarRinging.mp3'],
      volume: 0.25,
      loop: true
    },
    52: {
      bgm: ['/music/Wind.mp3'],
      sfx: ['/effect/EarRinging.mp3'],
      volume: 0.25,
      loop: true
    },
    53: {
      bgm: [],
      sfx: ['/effect/Typing.mp3','/effect/HeartMonitor.wav'],
      volume: 0.25,
      loop: true
    },
    54: {
      bgm: [],
      sfx: ['/effect/HeartMonitor.wav'],
      volume: 0.25,
      loop: true
    }
  },
  3: {
    1: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    2: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    3: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    4: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    5: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    6: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    7: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    8: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    9: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    10: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    11: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    12: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    13: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    14: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    15: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    16: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    17: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    18: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    19: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    20: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    21: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    22: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    23: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    24: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    25: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    26: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    27: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    28: {
      bgm: ['/music/Accident.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    29: {
      bgm: [],
      sfx: ['/effect/Typing.mp3'],
      volume: 0.25,
      loop: true
    }
  },
  4: {
    1: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    2: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    3: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    4: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    5: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    6: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    7: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    8: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    9: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    10: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    11: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    12: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    13: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    14: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    15: {
      bgm: ['/music/Waiting.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    16: {
      bgm: [],
      sfx: ['/effect/Typing.mp3'],
      volume: 0.25,
      loop: true
    },
    17: {
      bgm: [],
      sfx: ['/effect/Typing.mp3'],
      volume: 0.25,
      loop: true
    },
    18: {
      bgm: [],
      sfx: ['/effect/Typing.mp3'],
      volume: 0.25,
      loop: true
    }
  },
  5: {
    1: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    2: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    3: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    4: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    5: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    6: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    7: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    8: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    9: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    10: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    11: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    12: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    13: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    14: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    15: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    16: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    17: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    18: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    19: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    20: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    21: {
      bgm: ['/music/Wind.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    22: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    23: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    24: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    25: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    26: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    27: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    28: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    29: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    30: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    31: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    32: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    33: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    34: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    35: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    36: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    37: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    38: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    39: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    40: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    }
  },
  6: {
    1: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    2: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
    3: {
      bgm: ['/music/EndingCutScene.mp3'],
      sfx: [],
      volume: 0.25,
      loop: true
    },
  }
};