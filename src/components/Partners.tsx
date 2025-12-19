const partners = [
  { name: "Emaar Properties", logo: "EMAAR" },
  { name: "DAMAC", logo: "DAMAC" },
  { name: "Meraas", logo: "MERAAS" },
  { name: "Nakheel", logo: "NAKHEEL" },
  { name: "Dubai Properties", logo: "DP" },
  { name: "Aldar", logo: "ALDAR" },
  { name: "Sobha Realty", logo: "SOBHA" },
  { name: "Azizi", logo: "AZIZI" }
];

const Partners = () => {
  return (
    <section className="py-20 px-6 bg-background border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-minimal text-muted-foreground">Trusted Partners</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Partnering with industry leaders to deliver exceptional results
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
