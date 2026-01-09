import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 700,
  className = '',
  as: Component = 'div',
}) => {
  const { ref, className: animationClass } = useScrollAnimation(animation);

  const delayClass = delay > 0 ? `[animation-delay:${delay}ms]` : '';
  const durationClass = duration !== 700 ? `[animation-duration:${duration}ms]` : '';

  return (
    <Component 
      ref={ref} 
      className={`${animationClass} ${delayClass} ${durationClass} ${className}`}
    >
      {children}
    </Component>
  );
};

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  staggerDelay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  animation = 'fadeIn',
  staggerDelay = 100,
  className = '',
  as: Component = 'div',
}) => {
  const { containerRef, getItemClassName } = useStaggeredAnimation(
    children.length,
    animation,
    staggerDelay
  );

  return (
    <Component ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div key={index} className={getItemClassName(index)}>
          {child}
        </div>
      ))}
    </Component>
  );
};

export default ScrollAnimation;