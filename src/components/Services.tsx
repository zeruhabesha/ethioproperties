import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Building2, Wrench, DollarSign, Users, Compass, ChevronRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      icon: Home,
      title: t('services.residential.title'),
      desc: t('services.residential.desc'),
      items: [
        t('services.residential.item1'),
        t('services.residential.item2'),
        t('services.residential.item3'),
        t('services.residential.item4'),
        t('services.residential.item5'),
        t('services.residential.item6'),
      ],
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-500/10 to-teal-600/5',
    },
    {
      icon: Building2,
      title: t('services.commercial.title'),
      desc: t('services.commercial.desc'),
      items: [
        t('services.commercial.item1'),
        t('services.commercial.item2'),
        t('services.commercial.item3'),
        t('services.commercial.item4'),
        t('services.commercial.item5'),
      ],
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 to-indigo-600/5',
    },
    {
      icon: Wrench,
      title: t('services.maintenance.title'),
      desc: t('services.maintenance.desc'),
      items: [
        t('services.maintenance.item1'),
        t('services.maintenance.item2'),
        t('services.maintenance.item3'),
        t('services.maintenance.item4'),
        t('services.maintenance.item5'),
      ],
      gradient: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-500/10 to-amber-600/5',
    },
    {
      icon: DollarSign,
      title: t('services.financial.title'),
      desc: t('services.financial.desc'),
      items: [
        t('services.financial.item1'),
        t('services.financial.item2'),
        t('services.financial.item3'),
        t('services.financial.item4'),
      ],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-600/5',
    },
    {
      icon: Users,
      title: t('services.tenant.title'),
      desc: t('services.tenant.desc'),
      items: [
        t('services.tenant.item1'),
        t('services.tenant.item2'),
        t('services.tenant.item3'),
        t('services.tenant.item4'),
      ],
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-500/10 to-violet-600/5',
    },
    {
      icon: Compass,
      title: t('services.architecture.title'),
      desc: t('services.architecture.desc'),
      items: [
        t('services.architecture.item1'),
        t('services.architecture.item2'),
        t('services.architecture.item3'),
        t('services.architecture.item4'),
      ],
      gradient: 'from-slate-500 to-gray-600',
      bgGradient: 'from-slate-500/10 to-gray-600/5',
    },
  ];

  const activeServiceData = services[activeService];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary">{t('services.label')}</span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-architectural">
              {t('services.title')}
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Service Tabs */}
            <div className="lg:col-span-2 space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={cn(
                      "w-full p-5 flex items-center gap-4 rounded-2xl text-left transition-all duration-300",
                      isActive 
                        ? "bg-card shadow-lg border-2 border-primary/30" 
                        : "bg-card/50 border border-border hover:bg-card hover:border-primary/20"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                      isActive 
                        ? `bg-gradient-to-br ${service.gradient} shadow-lg` 
                        : "bg-muted"
                    )}>
                      <Icon className={cn(
                        "w-6 h-6 transition-colors",
                        isActive ? "text-white" : "text-muted-foreground"
                      )} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "font-semibold transition-colors truncate",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-all",
                      isActive ? "text-primary translate-x-1" : "text-muted-foreground/50"
                    )} />
                  </button>
                );
              })}
            </div>

            {/* Active Service Details */}
            <div className="lg:col-span-3">
              <div className={cn(
                "bg-gradient-to-br rounded-3xl p-8 md:p-10 h-full",
                activeServiceData.bgGradient
              )}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-xl",
                    activeServiceData.gradient
                  )}>
                    <activeServiceData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {activeServiceData.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">{activeServiceData.desc}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {activeServiceData.items.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 bg-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50"
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br",
                        activeServiceData.gradient
                      )}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
