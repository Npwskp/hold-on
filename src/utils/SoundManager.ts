class Sound {
  private audio: HTMLAudioElement;
  private volume: number;
  private isLoaded: boolean = false;
  private fadeInterval: NodeJS.Timeout | null = null;
  private loadPromise: Promise<void>;

  constructor(src: string, volume: number = 1, loop: boolean = false) {
    this.audio = new Audio(src);
    this.volume = volume;
    this.audio.loop = loop;
    this.audio.volume = volume;
    
    // Create a promise that resolves when the audio is loaded
    this.loadPromise = new Promise((resolve) => {
      this.audio.addEventListener('canplaythrough', () => {
        this.isLoaded = true;
        console.log('Audio loaded:', src);
        resolve();
      }, { once: true });
    });

    // Preload the audio
    this.audio.load();
  }

  async ensureLoaded(): Promise<void> {
    if (!this.isLoaded) {
      await this.loadPromise;
    }
  }

  async play(): Promise<void> {
    await this.ensureLoaded();
    this.audio.currentTime = 0;
    try {
      await this.audio.play();
    } catch (error) {
      // Ignore autoplay errors, just log them
      if (error instanceof Error && error.name === 'NotAllowedError') {
        console.log('Autoplay blocked by browser policy');
      }
    }
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(volume: number): void {
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

  isPlaying(): boolean {
    return !this.audio.paused;
  }

  getSource(): string {
    return this.audio.src;
  }
}

class SoundManager {
  private static instance: SoundManager;
  private sounds: Map<string, Sound> = new Map();
  private currentBGM: Sound | null = null;
  private currentBGMKey: string | null = null;
  private sfxPool: Map<string, Sound[]> = new Map(); // Pool for SFX instances
  private maxPoolSize: number = 3; // Maximum instances per SFX

  private constructor() {}

  static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  loadSound(key: string, src: string, volume: number = 1, loop: boolean = false): void {
    // For SFX, manage pool
    if (key.startsWith('sfx_')) {
      if (!this.sfxPool.has(src)) {
        this.sfxPool.set(src, []);
      }
      // Create initial instance
      const sound = new Sound(src, volume, loop);
      this.sounds.set(key, sound);
      
      // Pre-create pool instances for mobile
      const pool = this.sfxPool.get(src)!;
      while (pool.length < this.maxPoolSize) {
        pool.push(new Sound(src, volume, loop));
      }
    } else {
      // BGM handling remains the same
      if (this.sounds.has(key)) {
        this.stopSound(key);
        this.sounds.delete(key);
      }
      this.sounds.set(key, new Sound(src, volume, loop));
    }
  }

  async playSound(key: string): Promise<void> {
    const sound = this.sounds.get(key);
    if (!sound) return;

    try {
      // For SFX, use pooling
      if (key.startsWith('sfx_')) {
        const src = sound.getSource();
        const pool = this.sfxPool.get(src);
        if (pool) {
          // Find an available instance or the oldest one
          const availableSound = pool.find(s => !s.isPlaying()) || pool[0];
          if (availableSound) {
            availableSound.stop(); // Ensure it's stopped
            await availableSound.play();
            return;
          }
        }
      }
      
      // Default to normal playback for BGM or if pool is unavailable
      await sound.play();
    } catch (error) {
      console.warn(`Failed to play sound ${key}:`, error);
    }
  }

  stopSound(key: string): void {
    const sound = this.sounds.get(key);
    if (sound) {
      sound.stop();
    }
  }

  setVolume(key: string, volume: number): void {
    const sound = this.sounds.get(key);
    if (sound) {
      sound.setVolume(volume);
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

  stopBGM(): void {
    console.log('stopBGM');
    if (this.currentBGM) {
      this.currentBGM.fadeOut();
      this.currentBGM = null;
      this.currentBGMKey = null;
    }
  }

  stopAll(): void {
    this.sounds.forEach(sound => sound.stop());
    this.currentBGM = null;
    this.currentBGMKey = null;
  }
}

export default SoundManager; 