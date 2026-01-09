import { Search, FileCheck, Key, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We start by understanding your goals, preferences, and budget to create a personalized property strategy."
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Selection",
    description: "Our experts curate a selection of properties that match your criteria, saving you time and effort."
  },
  {
    number: "03",
    icon: Handshake,
    title: "Negotiation",
    description: "We handle all negotiations to secure the best terms and price, protecting your interests throughout."
  },
  {
    number: "04",
    icon: Key,
    title: "Closing",
    description: "From paperwork to final handover, we manage every detail to ensure a seamless closing experience."
  }
];

const Process = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-minimal text-primary mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground text-architectural">
            Our Process
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A streamlined approach designed to make your property journey 
            as smooth and successful as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}
              
              <div className="bg-card p-8 rounded-lg relative z-10 h-full hover:shadow-elegant transition-shadow duration-500">
                <span className="text-6xl font-serif text-primary/20 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
