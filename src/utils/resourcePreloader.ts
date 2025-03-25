export type Resource = {
    type: 'image' | 'audio' | 'json' | 'video';
    url: string;
  };
  
  type ResourceResult = void | Blob | unknown;
  
  export const preloadResource = async (resource: Resource): Promise<ResourceResult> => {
    switch (resource.type) {
      case 'image':
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = reject;
          img.src = resource.url;
        });
      case 'video':
        return new Promise<void>((resolve, reject) => {
          const video = document.createElement('video');
          video.oncanplaythrough = () => resolve();
          video.onerror = reject;
          video.src = resource.url;
          video.load();
        });
      case 'audio':
        return fetch(resource.url).then(response => response.blob());
      case 'json':
        return fetch(resource.url).then(response => response.json());
    }
  };
  
  export const preloadResources = async (resources: Resource[]): Promise<void> => {
    try {
      await Promise.all(resources.map(resource => preloadResource(resource)));
    } catch (error) {
      console.error('Error preloading resources:', error);
    }
  };