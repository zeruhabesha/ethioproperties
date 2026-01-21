import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import DecorativePattern from "@/components/DecorativePattern";
import { ArrowRight, BookOpen, Clock, User, Calendar } from "lucide-react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "SUSTAINABILITY", "DESIGN", "URBAN PLANNING"];

  const filteredPosts = activeCategory === "ALL"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-background selection:bg-primary/20 flex flex-col">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
        <div className="absolute inset-0 z-0">
          <DecorativePattern variant="grid" opacity={0.05} />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in-up">
            <BookOpen className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up [animation-delay:100ms]">
            Insights & News
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms] leading-relaxed">
            Exploring the intersection of architecture, design, and human experience
            through thoughtful analysis and contemporary perspectives.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-background border-b border-border/50 sticky top-20 z-40 backdrop-blur-md bg-white/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-secondary hover:text-secondary"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 flex-grow relative">
        <DecorativePattern variant="dots" className="text-secondary/5 fixed bottom-0 left-0" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/blog/${post.id}`} className="block h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-border/50 mt-auto">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-3 h-3 text-primary" />
                        </div>
                        {post.author}
                      </div>
                      <span className="flex items-center text-secondary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <DecorativePattern variant="geometric" opacity={0.1} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Subscribe to our newsletter for the latest insights on architecture, design, and property investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all"
              />
              <button className="px-8 py-4 rounded-full bg-secondary text-primary font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;