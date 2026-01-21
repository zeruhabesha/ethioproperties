import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Homeowner",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        content: "Ethio Core Property made finding our dream home in Addis surprisingly easy. Their team was professional, transparent, and always available."
    },
    {
        name: "Michael Chen",
        role: "Investor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        content: "I've worked with many agencies, but the level of market insight and legal support provided here is unmatched. Highly recommended for investors."
    },
    {
        name: "Dr. Abebe Kebede",
        role: "Villa Owner",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
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
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                </Avatar>
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
