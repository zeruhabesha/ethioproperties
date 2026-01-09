// Video optimization utilities for different devices and connections

export interface VideoConfig {
  sources: {
    webm?: string;
    mp4: string;
  };
  poster: string;
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
  playsInline: boolean;
  preload: 'none' | 'metadata' | 'auto';
}

export interface DeviceCapabilities {
  isMobile: boolean;
  isLowPower: boolean;
  connectionSpeed: 'slow' | 'medium' | 'fast';
  supportsVideo: boolean;
}

// Detect device capabilities
export const getDeviceCapabilities = (): DeviceCapabilities => {
  const isMobile = window.innerWidth <= 768 || 
                   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Check for low-power devices
  const isLowPower = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  
  // Check connection speed
  const connection = (navigator as any).connection;
  let connectionSpeed: 'slow' | 'medium' | 'fast' = 'medium';
  
  if (connection) {
    const effectiveType = connection.effectiveType;
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      connectionSpeed = 'slow';
    } else if (effectiveType === '3g') {
      connectionSpeed = 'medium';
    } else {
      connectionSpeed = 'fast';
    }
  }

  // Check video support
  const video = document.createElement('video');
  const supportsVideo = !!(video.canPlayType && video.canPlayType('video/mp4').replace(/no/, ''));

  return {
    isMobile,
    isLowPower,
    connectionSpeed,
    supportsVideo,
  };
};

// Get optimized video configuration based on device capabilities
export const getOptimizedVideoConfig = (
  baseConfig: VideoConfig,
  capabilities: DeviceCapabilities
): VideoConfig | null => {
  // Disable video on unsupported devices
  if (!capabilities.supportsVideo) {
    return null;
  }

  // Disable video on slow connections or low-power devices
  if (capabilities.connectionSpeed === 'slow' || capabilities.isLowPower) {
    return null;
  }

  // Optimize for mobile devices
  if (capabilities.isMobile) {
    return {
      ...baseConfig,
      preload: 'none', // Don't preload on mobile to save data
      autoplay: capabilities.connectionSpeed === 'fast', // Only autoplay on fast connections
    };
  }

  return baseConfig;
};

// Check if video should be disabled based on user preferences
export const shouldDisableVideo = (): boolean => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Check for data saver mode
  const connection = (navigator as any).connection;
  const saveData = connection?.saveData;

  return prefersReducedMotion || saveData;
};

// Preload video with error handling
export const preloadVideo = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    
    const handleLoad = () => {
      cleanup();
      resolve(true);
    };
    
    const handleError = () => {
      cleanup();
      resolve(false);
    };
    
    const cleanup = () => {
      video.removeEventListener('loadedmetadata', handleLoad);
      video.removeEventListener('error', handleError);
    };
    
    video.addEventListener('loadedmetadata', handleLoad);
    video.addEventListener('error', handleError);
    video.src = src;
  });
};

// Get video quality based on viewport size
export const getVideoQuality = (): 'low' | 'medium' | 'high' => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = window.devicePixelRatio || 1;
  
  const effectiveWidth = width * pixelRatio;
  const effectiveHeight = height * pixelRatio;
  
  if (effectiveWidth <= 720 || effectiveHeight <= 480) {
    return 'low';
  } else if (effectiveWidth <= 1280 || effectiveHeight <= 720) {
    return 'medium';
  } else {
    return 'high';
  }
};

// Monitor video performance
export const monitorVideoPerformance = (video: HTMLVideoElement): void => {
  let frameCount = 0;
  let lastTime = performance.now();
  
  const checkPerformance = () => {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime;
    
    if (deltaTime >= 1000) { // Check every second
      const fps = (frameCount * 1000) / deltaTime;
      
      // If FPS is too low, consider disabling video
      if (fps < 15) {
        console.warn('Video performance is poor, consider fallback');
        // Dispatch custom event for components to handle
        video.dispatchEvent(new CustomEvent('lowPerformance', { detail: { fps } }));
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    frameCount++;
    
    if (!video.paused && !video.ended) {
      requestAnimationFrame(checkPerformance);
    }
  };
  
  video.addEventListener('play', () => {
    requestAnimationFrame(checkPerformance);
  });
};