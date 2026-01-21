import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "@/components/ScrollAnimation";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background flex flex-col">
      {/* Header with Image Background */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Fixed Image Background - Clipped to Section */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/city.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.7))'
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimation animation="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">{t('contact.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up [animation-delay:200ms]">
              {t('contact.subtitle')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-20 px-6 -mt-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Contact Info Card */}
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-xl space-y-8 z-10 relative">
              <h2 className="text-3xl font-bold text-foreground">{t('contact.info') || 'Contact Information'}</h2>
              <p className="text-muted-foreground">
                {t('contact.info.desc') || 'Visit our premium office or reach out directly. Our dedicated team is available to provide personalized assistance and expert guidance.'}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t('contact.office') || 'Head Office - Addis Ababa'}</h4>
                    <p className="text-muted-foreground">{t('contact.location')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t('contact.phone.title') || 'Phone & WhatsApp'}</h4>
                    <p className="text-muted-foreground">{t('contact.phone') || '+251 92 939 7215'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t('contact.email.title') || 'Email Contact'}</h4>
                    <p className="text-muted-foreground">
                      {t('contact.email.info') || 'info@ethioproperties.com'}<br />
                      Derejemelat28@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 dark:bg-muted/30 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t('contact.form.title') || 'Send us a Message'}</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('contact.form.firstname') || 'First Name'}</label>
                    <Input placeholder={t('contact.form.firstname.placeholder') || 'John'} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('contact.form.lastname') || 'Last Name'}</label>
                    <Input placeholder={t('contact.form.lastname.placeholder') || 'Doe'} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.email')}</label>
                  <Input type="email" placeholder={t('contact.form.email.placeholder') || 'john@example.com'} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.phone')}</label>
                  <Input type="tel" placeholder={t('contact.form.phone.placeholder') || '+251...'} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.message')}</label>
                  <Textarea placeholder={t('contact.form.message.placeholder') || 'How can we help you?'} className="min-h-[150px]" />
                </div>

                <Button className="w-full h-12 text-lg font-semibold">
                  {t('contact.send')}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;