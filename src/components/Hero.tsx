import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import InteractiveBackground from './InteractiveBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { ref: heroRef, className: heroAnimationClass } = useScrollAnimation('fadeIn', { triggerOnce: true });
  const { t } = useLanguage();

  return (
    <section
      ref={heroRef}
      className={`relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden sticky top-0 z-0 ${heroAnimationClass}`}
    >
      {/* Interactive Background */}
      <InteractiveBackground />

      <div className="container relative z-10 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Simple Badge */}
          <div className="inline-block animate-slide-up">
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white/90 text-sm font-medium tracking-wide">
              {t('hero.badge') || 'Premium Real Estate'}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight animate-slide-up [animation-delay:100ms]">
            {t('hero.title') || "Find Your Dream Home"} <br />
            <span className="text-secondary/90">
              {t('hero.subtitle') || "In Ethiopia"}
            </span>
          </h1>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up [animation-delay:300ms]">
            <Button
              size="lg"
              className="h-14 px-8 rounded-full text-lg font-semibold bg-white text-primary hover:bg-gray-100 transition-all duration-300"
            >
              {t('hero.cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-full text-lg font-semibold border-white text-white bg-transparent hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              {t('hero.learn')}
            </Button>
          </div>

          {/* Simplified Stats */}
          <div className="pt-12 flex items-center justify-center gap-12 text-white animate-slide-up [animation-delay:400ms]">
            <div className="text-center">
              <div className="text-3xl font-bold">{t('hero.stats.listings') || '50+'}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{t('hero.stats.listings.label') || 'Listings'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{t('hero.stats.clients') || '100+'}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{t('hero.stats.clients.label') || 'Clients'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{t('hero.stats.support') || '24/7'}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{t('hero.stats.support.label') || 'Support'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
