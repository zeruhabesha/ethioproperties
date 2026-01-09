import { useEffect, useState, useRef } from 'react';
import { Building, Home, Users, Award, TrendingUp, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  {
    icon: Building,
    value: 250,
    suffix: '+',
    label: "Properties in Ethiopia",
    description: "Across major cities"
  },
  {
    icon: Clock,
    value: 6,
    suffix: '+',
    label: "Years in Ethiopian Market",
    description: "Local expertise"
  },
  {
    icon: Users,
    value: 95,
    suffix: '%',
    label: "Ethiopian Client Satisfaction",
    description: "Trusted locally"
  }
];

const CountingNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span ref={countRef} className="text-3xl md:text-4xl lg:text-5xl font-serif block">
      {count}{suffix}
    </span>
  );
};

const Statistics = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Building,
      value: 250,
      suffix: '+',
      label: t('stats.properties') || "Properties in Ethiopia",
      description: t('stats.properties.desc') || "Across major cities"
    },
    {
      icon: Clock,
      value: 6,
      suffix: '+',
      label: t('stats.years') || "Years in Ethiopian Market",
      description: t('stats.years.desc') || "Local expertise"
    },
    {
      icon: Users,
      value: 95,
      suffix: '%',
      label: t('stats.satisfaction') || "Ethiopian Client Satisfaction",
      description: t('stats.satisfaction.desc') || "Trusted locally"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--primary),0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-minimal opacity-80 mb-4 block">{t('stats.impact') || 'Our Ethiopian Impact'}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-architectural">
            {t('stats.title') || 'Serving Ethiopia with Excellence'}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75" />
              
              <div className="relative bg-background/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <CountingNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-medium mt-2 uppercase tracking-wider">{stat.label}</p>
                <p className="text-xs opacity-60 mt-1">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
