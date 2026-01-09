import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicePackages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      title: t('packages.basic.title'),
      subtitle: t('packages.basic.subtitle'),
      items: [
        t('packages.basic.item1'),
        t('packages.basic.item2'),
        t('packages.basic.item3'),
        t('packages.basic.item4'),
      ],
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-500/5 to-teal-600/10',
      popular: false,
    },
    {
      title: t('packages.standard.title'),
      subtitle: t('packages.standard.subtitle'),
      items: [
        t('packages.standard.item1'),
        t('packages.standard.item2'),
        t('packages.standard.item3'),
        t('packages.standard.item4'),
        t('packages.standard.item5'),
      ],
      gradient: 'from-primary to-pink-600',
      bgGradient: 'from-primary/10 to-pink-600/20',
      popular: true,
    },
    {
      title: t('packages.premium.title'),
      subtitle: t('packages.premium.subtitle'),
      items: [
        t('packages.premium.item1'),
        t('packages.premium.item2'),
        t('packages.premium.item3'),
        t('packages.premium.item4'),
        t('packages.premium.item5'),
      ],
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-500/5 to-violet-600/10',
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('packages.label')}</span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-architectural">
              {t('packages.title')}
            </h2>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={cn(
                  "relative bg-card rounded-3xl transition-all duration-500 group",
                  pkg.popular 
                    ? "shadow-2xl shadow-primary/20 scale-100 md:scale-105 z-10 border-2 border-primary/30" 
                    : "shadow-lg hover:shadow-xl border border-border hover:-translate-y-2"
                )}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      {t('packages.popular')}
                    </div>
                  </div>
                )}

                {/* Gradient Header */}
                <div className={cn(
                  "h-2 rounded-t-3xl bg-primary"
                )} />

                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.title}</h3>
                  <p className="text-muted-foreground text-sm mb-8">{pkg.subtitle}</p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pkg.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary"
                        )}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground group-hover/item:text-primary transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className={cn(
                      "w-full group/btn transition-all duration-300",
                      pkg.popular 
                        ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" 
                        : ""
                    )}
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    onClick={scrollToContact}
                  >
                    {t('packages.cta')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
