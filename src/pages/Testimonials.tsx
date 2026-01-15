import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, User } from "lucide-react";
import DecorativePattern from "@/components/DecorativePattern";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Property Investor",
    location: "New York, USA",
    rating: 5,
    text: "Ethio Core Property transformed my investment portfolio. Their expertise in identifying high-value opportunities is unmatched. I've seen a 40% return on my investments in just two years.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    location: "Singapore",
    rating: 5,
    text: "The team's professionalism and attention to detail made our commercial property acquisition seamless. They understood our business needs perfectly and delivered beyond expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Elena Petrova",
    role: "First-time Buyer",
    location: "London, UK",
    rating: 5,
    text: "As a first-time buyer, I was nervous about the process. The team guided me every step of the way with patience and expertise. I found my dream home!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "David Williams",
    role: "Developer",
    location: "Dubai, UAE",
    rating: 5,
    text: "We've partnered with Ethio Core Property on multiple development projects. Their market insights and client network have been invaluable to our success.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Aisha Rahman",
    role: "Portfolio Manager",
    location: "Mumbai, India",
    rating: 5,
    text: "The level of personalized service is exceptional. They treat every client like their only client. My property portfolio has never been stronger.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    name: "James Anderson",
    role: "Retiree",
    location: "Sydney, Australia",
    rating: 5,
    text: "Selling my family home was emotional, but the team handled everything with sensitivity and professionalism. Got above asking price and a smooth closing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-white">
        <DecorativePattern variant="geometric" opacity={0.1} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-6 animate-fade-in-up border border-white/20">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up [animation-delay:100ms]">
            What Our Clients Say
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] leading-relaxed">
            Hear from our valued clients about their experiences working with
            Ethio Core Property and how we helped them achieve their property goals.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6 flex-grow relative">
        <DecorativePattern variant="dots" className="text-primary/5 fixed top-0 right-0 w-1/3 h-full" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card p-8 rounded-2xl border border-border/50 relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-6 right-6 w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed italic flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary transition-colors">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <User className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-secondary font-medium mt-0.5">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-secondary relative overflow-hidden">
        <DecorativePattern variant="grid" opacity={0.1} />
        <div className="container mx-auto max-w-6xl text-center relative z-10 text-primary">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted by Thousands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <span className="text-4xl md:text-5xl font-bold block mb-2">98%</span>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">Client Satisfaction</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <span className="text-4xl md:text-5xl font-bold block mb-2">4.9</span>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">Average Rating</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <span className="text-4xl md:text-5xl font-bold block mb-2">2.5k+</span>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">Happy Clients</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <span className="text-4xl md:text-5xl font-bold block mb-2">85%</span>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">Repeat Clients</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
