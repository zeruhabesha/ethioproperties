import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: "Ethiopian Airlines", logo: "ETHIOPIAN" },
  { name: "Commercial Bank of Ethiopia", logo: "CBE" },
  { name: "Dashen Bank", logo: "DASHEN" },
  { name: "Awash Bank", logo: "AWASH" },
  { name: "East African Holdings", logo: "EAH" },
  { name: "Midroc Ethiopia", logo: "MIDROC" },
  { name: "BGI Ethiopia", logo: "BGI" },
  { name: "Dangote Cement", logo: "DANGOTE" }
];

const Partners = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-minimal text-muted-foreground">{t('partners.trusted') || 'Trusted Ethiopian Partners'}</span>
          <h2 className="text-2xl font-bold text-foreground mt-2">
            {t('partners.title') || 'Collaborating with Ethiopia\'s Leading Companies'}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors cursor-default text-center">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {t('partners.desc') || 'Proud to work alongside Ethiopia\'s most respected institutions and companies, bringing together expertise and trust to serve our clients better.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
