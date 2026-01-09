import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 1,
}) => {
  const baseClasses = 'animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]';
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4 rounded';
      case 'circular':
        return 'rounded-full aspect-square';
      case 'card':
        return 'h-48 rounded-lg';
      default:
        return 'rounded';
    }
  };

  const getSize = () => {
    const style: React.CSSProperties = {};
    if (width) style.width = typeof width === 'number' ? `${width}px` : width;
    if (height) style.height = typeof height === 'number' ? `${height}px` : height;
    return style;
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={{
              ...getSize(),
              width: index === lines - 1 ? '75%' : '100%',
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={getSize()}
    />
  );
};

// Property Card Skeleton
export const PropertyCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-card rounded-2xl shadow-lg overflow-hidden">
    <LoadingSkeleton variant="card" className="w-full" />
    <div className="p-6 space-y-4">
      <div className="space-y-2">
        <LoadingSkeleton variant="text" width="80%" height={24} />
        <LoadingSkeleton variant="text" width="60%" height={16} />
      </div>
      <div className="flex justify-between items-center">
        <LoadingSkeleton variant="text" width="40%" height={20} />
        <LoadingSkeleton variant="text" width="30%" height={24} />
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <LoadingSkeleton variant="circular" width={20} height={20} />
            <LoadingSkeleton variant="text" width="100%" height={14} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Hero Section Skeleton
export const HeroSkeleton: React.FC = () => (
  <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-gray-200 animate-pulse">
    <div className="container relative z-10 px-6 pt-20">
      <div className="max-w-3xl space-y-6">
        <LoadingSkeleton variant="rectangular" width={200} height={32} className="rounded-full" />
        <div className="space-y-4">
          <LoadingSkeleton variant="text" width="100%" height={56} />
          <LoadingSkeleton variant="text" width="80%" height={56} />
        </div>
        <LoadingSkeleton variant="text" lines={3} height={20} />
        <LoadingSkeleton variant="rectangular" width="100%" height={64} className="rounded-2xl max-w-2xl" />
        <div className="flex items-center gap-8 pt-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <LoadingSkeleton variant="text" width={60} height={32} />
              <LoadingSkeleton variant="text" width={80} height={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LoadingSkeleton;