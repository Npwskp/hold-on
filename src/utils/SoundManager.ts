class Sound {
  private audio: HTMLAudioElement;
  private volume: number;
  private isLoaded: boolean = false;
  private fadeInterval: NodeJS.Timeout | null = null;

  constructor(src: string, volume: number = 1, loop: boolean = false) {
    this.audio = new Audio(src);
    this.volume = volume;
    this.audio.loop = loop;
    this.audio.volume = volume;
    
    // Preload the audio
    this.audio.load();
    
    // Set up load event
    this.audio.addEventListener('canplaythrough', () => {
      this.isLoaded = true;
      console.log('Audio loaded:', src);
    });
  }

  async play() {
    if (!this.isLoaded) {
      console.log('Waiting for audio to load:', this.audio.src);
      await new Promise((resolve) => {
        this.audio.addEventListener('canplaythrough', resolve, { once: true });
      });
    }
    this.audio.currentTime = 0;
    return this.audio.play();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(volume: number) {
    this.volume = volume;
    this.audio.volume = volume;
  }

  async fadeOut(duration: number = 1000): Promise<void> {
    return new Promise((resolve) => {
      const startVolume = this.audio.volume;
      const startTime = Date.now();

      // Clear any existing fade interval
      if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
      }

      this.fadeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Exponential fade out
        const newVolume = startVolume * Math.pow(1 - progress, 2);
        this.audio.volume = newVolume;

        if (progress >= 1) {
          if (this.fadeInterval) {
            clearInterval(this.fadeInterval);
            this.fadeInterval = null;
          }
          this.stop();
          resolve();
        }
      }, 16); // Update every 16ms (approximately 60fps)
    });
  }

  async fadeIn(duration: number = 1000): Promise<void> {
    return new Promise((resolve) => {
      const targetVolume = this.volume;
      this.audio.volume = 0;
      const startTime = Date.now();

      // Clear any existing fade interval
      if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
      }

      this.fadeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Exponential fade in
        const newVolume = targetVolume * Math.pow(progress, 2);
        this.audio.volume = newVolume;

        if (progress >= 1) {
          if (this.fadeInterval) {
            clearInterval(this.fadeInterval);
            this.fadeInterval = null;
          }
          resolve();
        }
      }, 16); // Update every 16ms (approximately 60fps)
    });
  }
}

class SoundManager {
  private static instance: SoundManager;
  private sounds: Map<string, Sound> = new Map();
  private currentBGM: Sound | null = null;
  private currentBGMKey: string | null = null;

  private constructor() {}

  static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  loadSound(key: string, src: string, volume: number = 1, loop: boolean = false): void {
    // Stop and remove old sound if it exists
    if (this.sounds.has(key)) {
      this.stopSound(key);
      this.sounds.delete(key);
    }
    this.sounds.set(key, new Sound(src, volume, loop));
  }

  playSound(key: string): void {
    const sound = this.sounds.get(key);
    if (sound) {
      sound.play().catch(error => {
        console.warn(`Failed to play sound ${key}:`, error);
      });
    }
  }

  stopSound(key: string): void {
    const sound = this.sounds.get(key);
    if (sound) {
      sound.stop();
    }
  }

  async playBGM(key: string): Promise<void> {
    // If trying to play the same BGM, don't restart it
    if (this.currentBGMKey === key) {
      return;
    }

    // Fade out current BGM if it exists
    if (this.currentBGM) {
      await this.currentBGM.fadeOut();
      this.currentBGM = null;
      this.currentBGMKey = null;
    }

    const sound = this.sounds.get(key);
    if (sound) {
      this.currentBGM = sound;
      this.currentBGMKey = key;
      await sound.play();
      await sound.fadeIn();
    }
  }

  async stopBGM(): Promise<void> {
    if (this.currentBGM) {
      await this.currentBGM.fadeOut();
      this.currentBGM = null;
      this.currentBGMKey = null;
    }
  }

  stopAll(): void {
    this.sounds.forEach(sound => sound.stop());
    this.currentBGM = null;
    this.currentBGMKey = null;
  }

  setVolume(key: string, volume: number): void {
    const sound = this.sounds.get(key);
    if (sound) {
      sound.setVolume(volume);
    }
  }
}

export default SoundManager; 