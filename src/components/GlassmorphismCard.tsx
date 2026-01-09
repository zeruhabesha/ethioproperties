import React from 'react';

interface GlassmorphismProps {
  children: React.ReactNode;
  blur?: 'sm' | 'md' | 'lg';
  opacity?: number;
  border?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const GlassmorphismCard: React.FC<GlassmorphismProps> = ({
  children,
  blur = 'md',
  opacity = 0.1,
  border = true,
  className = '',
  as: Component = 'div',
}) => {
  const getBlurClass = (blur: string): string => {
    switch (blur) {
      case 'sm':
        return 'backdrop-blur-sm';
      case 'md':
        return 'backdrop-blur-md';
      case 'lg':
        return 'backdrop-blur-lg';
      default:
        return 'backdrop-blur-md';
    }
  };

  const getBackgroundClass = (opacity: number): string => {
    const opacityValue = Math.round(opacity * 100);
    return `bg-white/${opacityValue}`;
  };

  const borderClass = border ? 'border border-white/20' : '';
  const blurClass = getBlurClass(blur);
  const backgroundClass = getBackgroundClass(opacity);

  const glassmorphismClasses = `${backgroundClass} ${blurClass} ${borderClass} ${className}`;

  return (
    <Component className={glassmorphismClasses}>
      {children}
    </Component>
  );
};

export default GlassmorphismCard;