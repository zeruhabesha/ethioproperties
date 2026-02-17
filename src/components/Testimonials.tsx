import { Star, Quote, User } from "lucide-react";

const testimonials = [
    {
        name: "Almaz Tadesse",
        role: "Homeowner",
        content: "Ethio Core Property made finding our dream home in Addis surprisingly easy. Their team was professional, transparent, and always available."
    },
    {
        name: "Dawit Bekele",
        role: "Investor",
        content: "I've worked with many agencies, but the level of market insight and legal support provided here is unmatched. Highly recommended for investors."
    },
    {
        name: "Tigist Haile",
        role: "Villa Owner",
        content: "Selling my property was stressful until I met the team at Ethio Core. They handled everything from valuation to closing with absolute professionalism."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-primary/5 dark:bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg relative border border-border/50"
                        >
                            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

                            <div className="flex items-center text-yellow-500 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-muted-foreground mb-8 text-lg italic leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-secondary">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
