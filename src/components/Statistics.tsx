import { Building, Home, Users, Award, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "500+",
    label: "Properties Sold",
    description: "Successful transactions"
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Happy Clients",
    description: "Satisfied customers"
  },
  {
    icon: Home,
    value: "$2B+",
    label: "Property Value",
    description: "Total portfolio worth"
  },
  {
    icon: Award,
    value: "14+",
    label: "Years Experience",
    description: "Industry expertise"
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    description: "Client satisfaction"
  },
  {
    icon: Clock,
    value: "30",
    label: "Days Average",
    description: "Time to close"
  }
];

const Statistics = () => {
  return (
    <section className="py-24 px-6 bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-minimal opacity-80 mb-4 block">Our Impact</span>
          <h2 className="text-3xl md:text-5xl font-serif text-architectural">
            Numbers That Speak
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-secondary-foreground/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-3xl md:text-4xl font-serif block">{stat.value}</span>
              <p className="text-sm font-medium mt-1">{stat.label}</p>
              <p className="text-xs opacity-60 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
