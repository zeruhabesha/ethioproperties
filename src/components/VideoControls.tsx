import React, { useState } from 'react';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';

interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  className?: string;
  showVolumeControl?: boolean;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  videoRef,
  className = '',
  showVolumeControl = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.warn('Video autoplay was prevented');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={togglePlayPause}
        className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        type="button"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </button>

      {showVolumeControl && (
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
          type="button"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
};

export default VideoControls;