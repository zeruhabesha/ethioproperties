import { useEffect, useRef, useState } from 'react';

interface AnimationConfig {
  threshold: number;
  rootMargin: string;
  triggerOnce: boolean;
}

interface AnimationState {
  isVisible: boolean;
  hasAnimated: boolean;
  animationClass: string;
}

const defaultConfig: AnimationConfig = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  triggerOnce: true,
};

export const useScrollAnimation = (
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' = 'fadeIn',
  config: Partial<AnimationConfig> = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [animationState, setAnimationState] = useState<AnimationState>({
    isVisible: false,
    hasAnimated: false,
    animationClass: '',
  });

  const finalConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      setAnimationState({
        isVisible: true,
        hasAnimated: true,
        animationClass: 'opacity-100',
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationState(prev => ({
              ...prev,
              isVisible: true,
              hasAnimated: true,
              animationClass: getAnimationClass(animation),
            }));

            if (finalConfig.triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!finalConfig.triggerOnce) {
            setAnimationState(prev => ({
              ...prev,
              isVisible: false,
              animationClass: getInitialClass(animation),
            }));
          }
        });
      },
      {
        threshold: finalConfig.threshold,
        rootMargin: finalConfig.rootMargin,
      }
    );

    observer.observe(element);

    // Set initial state
    setAnimationState({
      isVisible: false,
      hasAnimated: false,
      animationClass: getInitialClass(animation),
    });

    return () => {
      observer.unobserve(element);
    };
  }, [animation, finalConfig.threshold, finalConfig.rootMargin, finalConfig.triggerOnce]);

  return {
    ref: elementRef,
    isVisible: animationState.isVisible,
    hasAnimated: animationState.hasAnimated,
    className: animationState.animationClass,
  };
};

const getInitialClass = (animation: string): string => {
  switch (animation) {
    case 'fadeIn':
      return 'opacity-0 transition-opacity duration-700 ease-out';
    case 'slideUp':
      return 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
    case 'slideLeft':
      return 'opacity-0 translate-x-8 transition-all duration-700 ease-out';
    case 'slideRight':
      return 'opacity-0 -translate-x-8 transition-all duration-700 ease-out';
    case 'scale':
      return 'opacity-0 scale-95 transition-all duration-700 ease-out';
    default:
      return 'opacity-0 transition-opacity duration-700 ease-out';
  }
};

const getAnimationClass = (animation: string): string => {
  switch (animation) {
    case 'fadeIn':
      return 'opacity-100 transition-opacity duration-700 ease-out';
    case 'slideUp':
      return 'opacity-100 translate-y-0 transition-all duration-700 ease-out';
    case 'slideLeft':
      return 'opacity-100 translate-x-0 transition-all duration-700 ease-out';
    case 'slideRight':
      return 'opacity-100 translate-x-0 transition-all duration-700 ease-out';
    case 'scale':
      return 'opacity-100 scale-100 transition-all duration-700 ease-out';
    default:
      return 'opacity-100 transition-opacity duration-700 ease-out';
  }
};

// Hook for staggered animations
export const useStaggeredAnimation = (
  itemCount: number,
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' = 'fadeIn',
  staggerDelay: number = 100
) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(container);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  const getItemClassName = (index: number): string => {
    const baseClass = isVisible ? getAnimationClass(animation) : getInitialClass(animation);
    const delay = isVisible ? `delay-[${index * staggerDelay}ms]` : '';
    return `${baseClass} ${delay}`;
  };

  return {
    containerRef,
    isVisible,
    getItemClassName,
  };
};