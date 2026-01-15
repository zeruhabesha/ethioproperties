import { ClipboardCheck, LineChart, Users, ShieldCheck } from "lucide-react";
import DecorativePattern from "./DecorativePattern";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Assessment & Preparation",
    description: "We begin with a thorough architectural review to identify enhancements. From minor renovations to staging, we prepare your property to command top market value while preserving its unique character."
  },
  {
    number: "02",
    icon: LineChart,
    title: "Marketing & Strategy",
    description: "Using data-driven insights, we set the optimal rental price. We then launch a premium marketing campaign featuring high-quality photography and brochures to attract discerning tenants."
  },
  {
    number: "03",
    icon: Users,
    title: "Tenant Acquisition",
    description: "We handle everything from inquiries and viewings to rigorous screening and lease negotiations. You get a reliable tenant without the hassle of coordination or paperwork."
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Ongoing Management",
    description: "Enjoy complete peace of mind. We collect rent, oversee maintenance with architectural oversight, and provide detailed financial reports, ensuring your investment is truly hands-off."
  }
];

const Process = () => {
  return (
    <section className="py-24 px-6 bg-secondary/5 relative overflow-hidden">
      <DecorativePattern variant="grid" opacity={0.05} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Delegation Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A streamlined, transparent timeline designed to take you from property owner to
            passive investor with zero stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border/50" />
              )}

              <div className="bg-background p-8 rounded-2xl relative z-10 h-full border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <span className="text-6xl font-serif text-primary/10 absolute top-4 right-4 font-bold">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
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
