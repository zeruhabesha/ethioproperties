import { Shield, Sparkles, Clock, BadgeCheck } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Trusted & Secure",
        description: "Legal verification and secure transactions guaranteed for every property."
    },
    {
        icon: Sparkles,
        title: "Premium Listings",
        description: "Curated collection of high-end homes and commercial spaces."
    },
    {
        icon: Clock,
        title: "Fast Process",
        description: "Streamlined buying and renting process to save your time."
    },
    {
        icon: BadgeCheck,
        title: "Expert Guidance",
        description: "Professional agents to guide you through every step."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white dark:bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Why Ethio Core?</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
                        Redefining Real Estate Standards
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        We don't just sell properties; we deliver peace of mind and unmatched quality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 dark:hover:bg-primary/20 hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/20 dark:hover:border-primary/30"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
