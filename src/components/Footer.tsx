import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">OP</span>
                </div>
                <div className="text-xl font-semibold">Own Property</div>
              </div>
              <p className="text-background/70">{t('footer.tagline')}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-background/70 hover:text-background transition-colors">
                  {t('nav.services')}
                </a>
                <a href="#about" className="block text-background/70 hover:text-background transition-colors">
                  {t('nav.about')}
                </a>
                <a href="#packages" className="block text-background/70 hover:text-background transition-colors">
                  {t('nav.packages')}
                </a>
                <a href="#contact" className="block text-background/70 hover:text-background transition-colors">
                  {t('nav.contact')}
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">{t('contact.label')}</h4>
              <div className="space-y-2 text-background/70">
                <p>Bole, Addis Ababa, Ethiopia</p>
                <p>+251 91 234 5678</p>
                <p>info@ownproperty.et</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-background/20 text-center text-background/60">
            <p>© {currentYear} Own Property Management. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
