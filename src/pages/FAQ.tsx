import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DecorativePattern from "@/components/DecorativePattern";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "Buying Property",
    questions: [
      {
        question: "What is the typical process for buying a property?",
        answer: "Our buying process includes: initial consultation to understand your needs, property search and viewing, negotiation support, legal due diligence, financing assistance, and closing coordination. We guide you through each step to ensure a smooth transaction."
      },
      {
        question: "How long does it take to complete a property purchase?",
        answer: "The timeline varies based on factors like financing, legal requirements, and property type. Typically, a straightforward purchase takes 30-60 days from offer acceptance to closing. We work to expedite the process while ensuring all details are properly handled."
      },
      {
        question: "Do you help with property financing?",
        answer: "Yes, we have partnerships with leading banks and financial institutions. We can connect you with mortgage specialists who offer competitive rates and help you find the best financing options for your situation."
      }
    ]
  },
  {
    category: "Selling Property",
    questions: [
      {
        question: "How do you determine the right price for my property?",
        answer: "We conduct a comprehensive market analysis including recent sales data, current market conditions, property condition, location factors, and unique features. This data-driven approach ensures your property is priced competitively to attract buyers while maximizing your return."
      },
      {
        question: "What marketing strategies do you use?",
        answer: "Our marketing includes professional photography and videography, virtual tours, targeted digital advertising, social media campaigns, email marketing to our buyer database, and premium listings on major property portals. Each property gets a customized marketing plan."
      },
      {
        question: "What are your commission rates?",
        answer: "Our commission structure is transparent and competitive. Rates vary based on property type and value. Contact us for a personalized quote, and we'll explain exactly what services are included."
      }
    ]
  },
  {
    category: "Investment Services",
    questions: [
      {
        question: "What types of investment properties do you handle?",
        answer: "We handle residential, commercial, mixed-use, and development land investments. Our team specializes in identifying opportunities that align with your investment goals, whether you're seeking rental income, capital appreciation, or development potential."
      },
      {
        question: "How do you identify good investment opportunities?",
        answer: "Our investment team analyzes market trends, growth indicators, rental yields, infrastructure developments, and economic factors. We have proprietary research and local market expertise that helps identify undervalued properties with strong growth potential."
      },
      {
        question: "Do you provide property management services?",
        answer: "Yes, we offer comprehensive property management including tenant screening, rent collection, maintenance coordination, and financial reporting. This allows investors to enjoy passive income without the day-to-day management burden."
      }
    ]
  },
  {
    category: "General Questions",
    questions: [
      {
        question: "What areas do you cover?",
        answer: "We operate primarily in major metropolitan areas and luxury markets globally. Our main offices are in Dubai, London, Singapore, and New York, with partner networks in additional locations. Contact us to discuss your specific area of interest."
      },
      {
        question: "How can I get started?",
        answer: "Simply contact us through our website, phone, or email. We'll schedule an initial consultation to understand your needs and goals. There's no obligation, and we're happy to answer any questions you have about our services."
      },
      {
        question: "Are your services available internationally?",
        answer: "Yes, we assist clients with international property transactions. Our global network and expertise in cross-border regulations help ensure smooth transactions whether you're buying locally or investing abroad."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="bg-background selection:bg-primary/20 flex flex-col">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
        <div className="absolute inset-0 z-0">
          <DecorativePattern variant="grid" opacity={0.05} />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in-up">
            <HelpCircle className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up [animation-delay:100ms]">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] leading-relaxed">
            Find answers to common questions about our services, processes, and how we can help you with your property needs.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-6 flex-grow relative">
        <DecorativePattern variant="dots" className="text-primary/5 fixed left-0 top-1/2 -translate-y-1/2" />
        <div className="container mx-auto max-w-4xl relative z-10">
          {faqs.map((section, sectionIndex) => (
            <div key={section.category} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-1 bg-secondary mr-3 rounded-full"></span>
                {section.category}
              </h2>
              <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${sectionIndex}-${index}`}
                      className="border-b border-border/50 last:border-0 px-6"
                    >
                      <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-primary text-white">
        <DecorativePattern variant="geometric" opacity={0.1} />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? Our team is here to help. Reach out and we'll get back to you with personalized answers.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-10 py-6 text-lg bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl group">
              Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
