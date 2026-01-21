import {
  Building2,
  FileText,
  Megaphone,
  UserCheck,
  TrendingUp,
  Camera,
  Key,
  Wrench,
  PiggyBank,
  LogOut
} from 'lucide-react';
import InteractiveCard from "@/components/InteractiveCard";
import DecorativePattern from "@/components/DecorativePattern";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.page.assessment.title'),
      description: t('services.page.assessment.desc')
    },
    {
      icon: FileText,
      title: t('services.page.legal.title'),
      description: t('services.page.legal.desc')
    },
    {
      icon: Megaphone,
      title: t('services.page.marketing.title'),
      description: t('services.page.marketing.desc')
    },
    {
      icon: UserCheck,
      title: t('services.page.screening.title'),
      description: t('services.page.screening.desc')
    },
    {
      icon: TrendingUp,
      title: t('services.page.pricing.title'),
      description: t('services.page.pricing.desc')
    },
    {
      icon: Camera,
      title: t('services.page.staging.title'),
      description: t('services.page.staging.desc')
    },
    {
      icon: Key,
      title: t('services.page.viewings.title'),
      description: t('services.page.viewings.desc')
    },
    {
      icon: Wrench,
      title: t('services.page.oversight.title'),
      description: t('services.page.oversight.desc')
    },
    {
      icon: PiggyBank,
      title: t('services.page.finance.title'),
      description: t('services.page.finance.desc')
    },
    {
      icon: LogOut,
      title: t('services.page.exit.title'),
      description: t('services.page.exit.desc')
    }
  ];

  return (
    <div className="flex flex-col bg-background selection:bg-primary/20">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/5">
          <DecorativePattern variant="grid" opacity={0.05} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 animate-fade-in-up">
            {t('services.page.fullservice')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up [animation-delay:200ms] whitespace-pre-line">
            {t('services.page.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up [animation-delay:400ms] leading-relaxed">
            {t('services.page.hero.desc')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 flex-grow relative">
        <DecorativePattern variant="dots" className="text-primary/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <InteractiveCard
                key={index}
                hoverEffect="lift"
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <DecorativePattern variant="geometric" opacity={0.1} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('services.page.cta.title')}</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('services.page.cta.desc')}
          </p>
          <a href="/contact" className="inline-flex items-center justify-center bg-secondary hover:bg-white text-primary hover:text-primary px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('services.page.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;