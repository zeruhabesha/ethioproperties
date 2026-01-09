import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import VideoBackground from './VideoBackground';
import VideoControls from './VideoControls';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: heroRef, className: heroAnimationClass } = useScrollAnimation('fadeIn', { triggerOnce: true });
  const { t } = useLanguage();

  return (
    <section 
      ref={heroRef}
      className={`relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden ${heroAnimationClass}`}
    >
      {/* Video Background with Fallback */}
      <VideoBackground
        src="/hero-video.mp4"
        fallbackImage="https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?q=80&w=2075&auto=format&fit=crop"
        className="z-0"
        poster="https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?q=80&w=2075&auto=format&fit=crop"
      />

      {/* Video Controls for Accessibility */}
      <div className="absolute top-6 right-6 z-20">
        <VideoControls videoRef={videoRef} />
      </div>

      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white w-fit animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium">{t('hero.badge') || 'No. 1 Real Estate Platform in Ethiopia'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-slide-up [animation-delay:200ms]">
            {t('hero.title')} <br />
            <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              {t('hero.subtitle')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed animate-slide-up [animation-delay:400ms]">
            {t('hero.description')}
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:600ms]">
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 rounded-xl text-lg font-semibold border-white text-white hover:bg-white hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {t('hero.learn')}
            </Button>
          </div>

          {/* Enhanced Statistics with Staggered Animation */}
          <div className="pt-8 flex items-center gap-8 text-white/80">
            <div className="flex flex-col animate-slide-up [animation-delay:800ms]">
              <span className="text-3xl font-bold text-white">{t('hero.stats.listings') || '1200+'}</span>
              <span className="text-sm">{t('hero.stats.listings.label') || 'Premium Listings'}</span>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="flex flex-col animate-slide-up [animation-delay:900ms]">
              <span className="text-3xl font-bold text-white">{t('hero.stats.clients') || '500+'}</span>
              <span className="text-sm">{t('hero.stats.clients.label') || 'Happy Clients'}</span>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="flex flex-col animate-slide-up [animation-delay:1000ms]">
              <span className="text-3xl font-bold text-white">{t('hero.stats.support') || '24/7'}</span>
              <span className="text-sm">{t('hero.stats.support.label') || 'Support'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
