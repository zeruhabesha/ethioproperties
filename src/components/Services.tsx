import { useState } from 'react';
import DecorativePattern from './DecorativePattern';
import { Building2, LineChart, Users, ShieldCheck, ChevronRight, Check, Compass, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      icon: PenTool,
      title: "Architectural Preparation",
      desc: "We start by enhancing your property's value through an architect's lens.",
      items: [
        "Property Assessment & Structural Review",
        "Strategic Renovation Suggestions",
        "Interior Staging & Photography",
        "Energy Efficiency Improvements"
      ],
      gradient: 'from-secondary to-amber-600',
      bgGradient: 'from-secondary/10 to-amber-600/5',
    },
    {
      icon: LineChart,
      title: "Strategic Marketing",
      desc: "Data-driven pricing and premium branding to attract the right tenants.",
      items: [
        "Rental Pricing Strategy Analysis",
        "Professional Brochure Creation",
        "High-End Online Listings",
        "Virtual Tours & Walkthroughs"
      ],
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 to-indigo-600/5',
    },
    {
      icon: Users,
      title: "Tenant Acquisition",
      desc: "Rigorous screening and seamless leasing to ensure reliable occupancy.",
      items: [
        "Comprehensive Tenant Screening",
        "Credit & Background Checks",
        "Legal Documentation Handling",
        "Lease Negotiations & Signing"
      ],
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-500/10 to-teal-600/5',
    },
    {
      icon: ShieldCheck,
      title: "Total Management",
      desc: "Ongoing oversight of your asset's financial and physical health.",
      items: [
        "Proactive Architectural Maintenance",
        "Rent Collection & Financial Reporting",
        "Contractor Coordination",
        "Exit & Turnover Management"
      ],
      gradient: 'from-primary to-slate-800',
      bgGradient: 'from-primary/10 to-slate-800/5',
    },
  ];

  const activeServiceData = services[activeService];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <DecorativePattern variant="geometric" opacity={0.08} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-primary">Delegated Services</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-architectural">
              Expert Management
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Service Tabs */}
            <div className="lg:col-span-2 space-y-2 sm:space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={cn(
                      "w-full p-4 sm:p-5 flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300",
                      isActive
                        ? "bg-card shadow-lg border-2 border-primary/30"
                        : "bg-card/50 border border-border hover:bg-card hover:border-primary/20"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300",
                      isActive
                        ? "bg-primary shadow-lg"
                        : "bg-muted"
                    )}>
                      <Icon className={cn(
                        "w-5 h-5 sm:w-6 sm:h-6 transition-colors",
                        isActive ? "text-white" : "text-muted-foreground"
                      )} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "text-sm sm:text-base font-semibold transition-colors truncate",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    <ChevronRight className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5 transition-all",
                      isActive ? "text-primary translate-x-1" : "text-muted-foreground/50"
                    )} />
                  </button>
                );
              })}
            </div>

            {/* Active Service Details */}
            <div className="lg:col-span-3">
              <div className={cn(
                "bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 h-full border border-border transition-all duration-500"
              )}>
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-primary shadow-xl"
                  )}>
                    <activeServiceData.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      {activeServiceData.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{activeServiceData.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {activeServiceData.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:bg-background hover:shadow-sm transition-all"
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-primary"
                      )}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border flex justify-end">
                  <a href="/services" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                    View All Services <ChevronRight className="w-4 h-4" />
                  </a>
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
