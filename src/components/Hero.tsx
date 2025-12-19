import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Play } from 'lucide-react';
import heroImage from '@/assets/hero-property.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/90" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-md border border-background/20 rounded-full px-5 py-2.5 mb-8 reveal">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-background">{t('hero.tagline')}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-background text-architectural mb-4 reveal drop-shadow-2xl">
          {t('hero.title')}
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary text-architectural mb-8 reveal-delayed drop-shadow-lg">
          {t('hero.subtitle')}
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-background/80 font-light max-w-3xl mx-auto mb-12 reveal-delayed leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-delayed">
          <Button 
            size="lg" 
            className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20 hover:text-background"
            onClick={() => scrollToSection('services')}
          >
            <Play className="mr-2 h-5 w-5" />
            {t('hero.learn')}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-background/20 reveal-delayed">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-background mb-2 group-hover:text-primary transition-colors">200+</div>
            <div className="text-sm text-background/60 uppercase tracking-wide">Properties Managed</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-background mb-2 group-hover:text-primary transition-colors">10+</div>
            <div className="text-sm text-background/60 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-background mb-2 group-hover:text-primary transition-colors">98%</div>
            <div className="text-sm text-background/60 uppercase tracking-wide">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-background/50 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-background/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
