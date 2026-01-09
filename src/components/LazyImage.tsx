import React from 'react';
import { useLazyImage } from '@/hooks/useLazyLoading';
import LoadingSkeleton from './LoadingSkeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
  threshold?: number;
  rootMargin?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  showSkeleton = true,
  skeletonClassName = '',
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  ...props
}) => {
  const {
    ref,
    src: loadedSrc,
    isLoading,
    hasError,
    hasLoaded,
  } = useLazyImage(src, { threshold, rootMargin });

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
      e.currentTarget.src = fallbackSrc;
    }
    props.onError?.(e);
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && showSkeleton && (
        <LoadingSkeleton
          variant="rectangular"
          className={`absolute inset-0 ${skeletonClassName}`}
        />
      )}
      
      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
      
      {/* Actual image */}
      {loadedSrc && (
        <img
          {...props}
          src={loadedSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            hasLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;