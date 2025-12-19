import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <span className="text-minimal text-primary mb-4 block">FAQ</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 text-architectural">
            Common Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find answers to frequently asked questions about our services, 
            processes, and how we can help you with your property needs.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((section, sectionIndex) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-6">
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${sectionIndex}-${index}`}
                    className="bg-card rounded-lg border-none px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-foreground font-medium pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 text-architectural">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team is here to help. Reach out and we'll get back to you 
            with personalized answers to your specific questions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
