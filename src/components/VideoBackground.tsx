import React, { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackImage: string;
  onLoadError?: () => void;
  className?: string;
  poster?: string;
  muted?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

interface VideoConfig {
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

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  fallbackImage,
  onLoadError,
  className = '',
  poster,
  muted = true,
  autoplay = true,
  loop = true,
  playsInline = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect mobile devices for optimization
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle video loading and errors
  const handleVideoError = () => {
    setHasError(true);
    setIsLoading(false);
    onLoadError?.();
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    if (videoRef.current && autoplay) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, fallback to image
        setHasError(true);
      });
    }
  };

  // Connection-adaptive video delivery
  const getOptimizedVideoSrc = () => {
    // Always return video source - allow video on all devices
    return src;
  };

  const optimizedSrc = getOptimizedVideoSrc();

  // If mobile with slow connection or error occurred, show fallback image
  if (hasError || !optimizedSrc) {
    return (
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
        style={{ backgroundImage: `url("${fallbackImage}")` }}
        role="img"
        aria-label="Property showcase background"
      >
        <div className="absolute inset-0" style={{ background: 'rgba(26, 54, 93, 0.7)' }} />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
          style={{ backgroundImage: `url("${poster || fallbackImage}")` }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(26, 54, 93, 0.7)' }} />
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'scaleX(-1)' }}
        muted={muted}
        autoPlay={autoplay}
        loop={loop}
        playsInline={playsInline}
        poster={poster || fallbackImage}
        preload="metadata"
        onError={handleVideoError}
        onLoadedData={handleVideoLoad}
        onCanPlay={handleCanPlay}
        aria-label="Property showcase video background"
      >
        <source src={optimizedSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0" style={{ background: 'rgba(26, 54, 93, 0.7)' }} />
    </div>
  );
};

export default VideoBackground;