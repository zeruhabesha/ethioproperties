import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Heart, Eye, Award, Handshake, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const { t } = useLanguage();

  const whyChooseUs = [
    { icon: Eye, text: t('why.item1'), color: 'from-blue-500 to-cyan-500' },
    { icon: Handshake, text: t('why.item2'), color: 'from-green-500 to-emerald-500' },
    { icon: Award, text: t('why.item3'), color: 'from-amber-500 to-orange-500' },
    { icon: Shield, text: t('why.item4'), color: 'from-purple-500 to-violet-500' },
    { icon: Heart, text: t('why.item5'), color: 'from-pink-500 to-rose-500' },
  ];

  const whoWeServe = [
    { text: t('serve.item1'), icon: '🌍' },
    { text: t('serve.item2'), icon: '🏢' },
    { text: t('serve.item3'), icon: '🏠' },
    { text: t('serve.item4'), icon: '👨‍👩‍👧‍👦' },
    { text: t('serve.item5'), icon: '🏗️' },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main About */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-primary">{t('about.label')}</span>
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-architectural mb-8">
                {t('about.title')}
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.desc1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.desc2')}
                </p>
              </div>

              {/* Philosophy Card */}
              <div className="mt-10 p-6 bg-card border border-border rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{t('about.philosophy')}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{t('about.philosophy.desc')}</p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-card rounded-3xl overflow-hidden relative shadow-2xl border border-border">
                {/* Background Image */}
                <img
                  // src="/image.jpg"
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Ethio Core Property"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10"
                />
                {/* Decorative Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-primary/30 rounded-full animate-pulse" />
                  <div className="absolute w-64 h-64 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute w-80 h-80 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-primary/30">
                      <span className="text-4xl font-bold text-primary-foreground">OP</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{t('hero.tagline')}</p>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute top-8 left-8 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
                  <div className="text-2xl font-bold text-foreground">200+</div>
                  <div className="text-xs text-muted-foreground">Properties</div>
                </div>
                <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us & Who We Serve */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Why Choose Us */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-primary">{t('why.label')}</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{t('why.title')}</h3>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className={cn(
                        "w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg"
                      )}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-foreground pt-2 font-medium">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Who We Serve */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-foreground">{t('serve.label')}</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{t('serve.title')}</h3>

              <div className="space-y-4">
                {whoWeServe.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group p-3 rounded-xl hover:bg-background/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-background/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md text-xl">
                      {item.icon}
                    </div>
                    <p className="text-foreground font-medium flex-1">{item.text}</p>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
