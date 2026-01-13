import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Building2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import GlassmorphismCard from "./GlassmorphismCard";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.properties') || "Properties", href: "/properties" },
    { label: t('nav.about'), href: "/about" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-4"
        : "py-6"
        }`}
    >
      <div className="container mx-auto px-6">
        <GlassmorphismCard
          blur={isScrolled ? "md" : "sm"}
          opacity={isScrolled ? 0.95 : 0.1}
          className={`rounded-2xl px-6 py-4 transition-all duration-500 ${isScrolled ? "shadow-lg" : ""}`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg hover:shadow-primary/25">
                <Building2 className="text-white w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold leading-none transition-colors duration-300 ${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`}>
                  Ethio Core
                </span>
                <span className={`text-sm tracking-widest font-light transition-colors duration-300 ${isScrolled ? 'text-secondary' : 'text-gray-200'}`}>
                  PROPERTY
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-sm font-medium transition-all duration-300 hover:text-secondary hover:scale-105 relative group ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white/90'
                      } ${isActive ? 'text-secondary' : ''}`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                variant={isScrolled ? "default" : "secondary"}
                className="font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {t('nav.list.property') || 'List Your Property'}
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden hover:scale-110 active:scale-95 transition-all duration-200 ${!isScrolled && "text-white hover:bg-white/10"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </GlassmorphismCard>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6">
          <GlassmorphismCard
            blur="md"
            opacity={0.95}
            className="rounded-2xl shadow-xl animate-slide-up"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-2 ${isActive ? 'text-primary' : 'text-foreground'
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-6 border-t border-border/20 flex flex-col gap-4">
                <div className="flex items-center gap-4 justify-between">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <Button className="w-full hover:scale-105 active:scale-95 transition-all duration-200">
                  {t('nav.list.property') || 'List Your Property'}
                </Button>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
