import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useLazyLoading = <T extends HTMLElement = HTMLDivElement>(options: UseLazyLoadingOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
  } = options;

  const elementRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            setHasLoaded(true);
            
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsIntersecting(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref: elementRef,
    isIntersecting,
    hasLoaded,
  };
};

// Hook specifically for lazy loading images
export const useLazyImage = (src: string, options: UseLazyLoadingOptions = {}) => {
  const { ref, isIntersecting, hasLoaded } = useLazyLoading<HTMLDivElement>(options);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isIntersecting && !imageSrc && src) {
      setIsLoading(true);
      setHasError(false);

      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
      };
      
      img.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
      
      img.src = src;
    }
  }, [isIntersecting, src, imageSrc]);

  return {
    ref,
    src: imageSrc,
    isLoading,
    hasError,
    hasLoaded,
  };
};

// Hook for lazy loading multiple images
export const useLazyImages = (sources: string[], options: UseLazyLoadingOptions = {}) => {
  const { ref, isIntersecting } = useLazyLoading<HTMLDivElement>(options);
  const [loadedImages, setLoadedImages] = useState<Record<string, string>>({});
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isIntersecting) {
      sources.forEach((src) => {
        if (!loadedImages[src] && !loadingImages[src]) {
          setLoadingImages(prev => ({ ...prev, [src]: true }));
          
          const img = new Image();
          
          img.onload = () => {
            setLoadedImages(prev => ({ ...prev, [src]: src }));
            setLoadingImages(prev => ({ ...prev, [src]: false }));
          };
          
          img.onerror = () => {
            setErrorImages(prev => ({ ...prev, [src]: true }));
            setLoadingImages(prev => ({ ...prev, [src]: false }));
          };
          
          img.src = src;
        }
      });
    }
  }, [isIntersecting, sources, loadedImages, loadingImages]);

  return {
    ref,
    loadedImages,
    loadingImages,
    errorImages,
  };
};