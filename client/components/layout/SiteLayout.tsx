import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CircleHelp,
  HomeIcon,
  Languages,
  MessageCircle,
  Palette,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ParticleField } from "@/components/interactive/ParticleField";
import { AmbientAudioToggle } from "@/components/interactive/AmbientAudioToggle";
import { FloatingWhatsApp } from "@/components/interactive/FloatingWhatsApp";
import { LanguageSelectorModal } from "@/components/interactive/LanguageSelectorModal";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { copy } from "@/data/copy";
import { getWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const renderIcon = (
  icon: (typeof navigationItems)[number]["icon"],
  className?: string,
) => {
  const props = { className: cn("h-5 w-5", className) };
  switch (icon) {
    case "home":
      return <HomeIcon {...props} />;
    case "palette":
      return <Palette {...props} />;
    case "star":
      return <Star {...props} />;
    case "message":
      return <MessageCircle {...props} />;
    case "help":
      return <CircleHelp {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};

const HeaderBrand = () => (
  <motion.div
    className="flex items-center gap-3"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 shadow-glow backdrop-blur">
      <Sparkles className="h-5 w-5 text-primary" />
    </div>
    <div className="leading-tight">
      <p className="font-accent text-2xl text-accent">Twinkle Batliwala</p>
      <p className="text-sm text-muted-foreground">
        Pistachio glass mehndi atelier
      </p>
    </div>
  </motion.div>
);

interface SiteLayoutProps {
  children: React.ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const { language } = useLanguage();
  const strings = copy[language];
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  const handleOpenLanguage = useCallback(() => {
    setLanguageModalOpen(true);
  }, []);

  const headerNav = useMemo(
    () =>
      navigationItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
        >
          {copy[language].nav[item.labelKey]}
        </a>
      )),
    [language],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-pistachio-mesh opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-primary/20 blur-3xl" />
        <ParticleField count={34} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[120rem] flex-col px-4 pb-24 pt-6 md:px-8 lg:px-12">
        <motion.header
          className="glass-card sticky top-4 z-30 mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-full px-6 py-4 shadow-soft"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HeaderBrand />
          <nav className="hidden items-center gap-6 md:flex">{headerNav}</nav>
          <div className="flex items-center gap-3">
            <AmbientAudioToggle />
            <Button
              type="button"
              className="glass-button hidden md:inline-flex"
              onClick={handleOpenLanguage}
            >
              <Languages className="mr-2 h-4 w-4" />
              <span>{copy[language].languageModal.button}</span>
            </Button>
            <Button
              type="button"
              className="glass-button hidden border-none bg-gradient-to-r from-primary to-[#95D5B2] text-sm font-semibold text-primary-foreground shadow-glow md:inline-flex"
              asChild
            >
              <a
                href={getWhatsAppLink(strings.hero.heading)}
                target="_blank"
                rel="noreferrer"
              >
                {strings.hero.ctaSecondary}
              </a>
            </Button>
          </div>
        </motion.header>

        <main className="flex-1" id="home">
          {children}
        </main>

        <footer className="mt-24 rounded-3xl bg-white/40 p-10 text-center shadow-soft backdrop-blur-2xl dark:bg-white/10">
          <p className="font-accent text-3xl text-accent">
            {strings.footer.signature}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {strings.footer.rights}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">
              {strings.legal.privacyTitle}
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              {strings.legal.termsTitle}
            </Link>
            <button
              type="button"
              onClick={handleOpenLanguage}
              className="text-sm text-primary transition hover:underline"
            >
              {strings.languageModal.button}
            </button>
          </div>
        </footer>
      </div>

      <StickyNavigation onLanguageClick={handleOpenLanguage} />
      <FloatingWhatsApp />
      <LanguageSelectorModal
        open={languageModalOpen}
        onOpenChange={setLanguageModalOpen}
      />
    </div>
  );
};

const StickyNavigation = ({
  onLanguageClick,
}: {
  onLanguageClick: () => void;
}) => {
  const { language } = useLanguage();
  const strings = copy[language];

  return (
    <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[92%] max-w-xl items-center justify-between rounded-full bg-[hsl(var(--glass-light))] px-4 py-3 shadow-soft backdrop-blur-2xl md:hidden">
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="flex flex-col items-center gap-1 text-xs font-medium text-foreground/80"
        >
          {renderIcon(item.icon, "h-4 w-4")}
          <span>{strings.nav[item.labelKey]}</span>
        </a>
      ))}
      <button
        type="button"
        onClick={onLanguageClick}
        className="flex flex-col items-center gap-1 text-xs font-medium text-primary"
      >
        <Languages className="h-4 w-4" />
        <span>{strings.languageModal.button}</span>
      </button>
    </nav>
  );
};
