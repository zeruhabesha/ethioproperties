import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Property Investor",
    location: "New York, USA",
    rating: 5,
    text: "Own Property transformed my investment portfolio. Their expertise in identifying high-value opportunities is unmatched. I've seen a 40% return on my investments in just two years.",
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
    text: "As a first-time buyer, I was nervous about the process. Own Property guided me every step of the way with patience and expertise. I found my dream home!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "David Williams",
    role: "Developer",
    location: "Dubai, UAE",
    rating: 5,
    text: "We've partnered with Own Property on multiple development projects. Their market insights and client network have been invaluable to our success.",
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <span className="text-minimal text-primary mb-4 block">Testimonials</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 text-architectural">
            Client Stories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hear from our valued clients about their experiences working with 
            Own Property and how we helped them achieve their property goals.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-card p-8 rounded-lg relative group hover:shadow-elegant transition-shadow duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-architectural">
            Trusted by Thousands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-4xl md:text-5xl font-serif">98%</span>
              <p className="text-sm mt-2 opacity-80">Client Satisfaction</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-serif">4.9</span>
              <p className="text-sm mt-2 opacity-80">Average Rating</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-serif">2,500+</span>
              <p className="text-sm mt-2 opacity-80">Happy Clients</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-serif">85%</span>
              <p className="text-sm mt-2 opacity-80">Repeat Clients</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
