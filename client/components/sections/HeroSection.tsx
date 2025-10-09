import { useEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/stats";
import { copy } from "@/data/copy";
import { getWhatsAppLink } from "@/lib/constants";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const heroMedia = {
  image:
    "https://images.unsplash.com/photo-1604908812444-f49d130a3dc7?auto=format&fit=crop&w=1600&q=80",
};

const MotionSection = motion.section;

const Counter = ({ value, active }: { value: string; active: boolean }) => {
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.,]/g, "").trim();
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString(),
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsubscribe = rounded.on("change", setDisplay);
    return () => {
      unsubscribe();
    };
  }, [rounded]);

  useEffect(() => {
    if (!active) return;
    motionValue.set(0);
    const controls = animate(motionValue, numeric, {
      duration: 2.2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [active, motionValue, numeric]);

  return (
    <span className="text-3xl font-semibold text-primary md:text-4xl">
      {display}
      {suffix && <span className="ml-1 text-primary/80">{suffix}</span>}
    </span>
  );
};

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();
  const strings = copy[language];
  const inView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <MotionSection
      id="home"
      className="relative isolate grid gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      ref={ref}
    >
      <div className="relative flex flex-col gap-8">
        <div className="inline-flex items-center gap-3 rounded-full bg-[hsl(var(--glass-light))] px-4 py-2 text-sm text-primary shadow-soft backdrop-blur-xl">
          <Sparkles className="h-4 w-4" />
          <span className="font-medium tracking-wide">
            {strings.hero.eyebrow}
          </span>
        </div>
        <div className="space-y-6">
          <h1 className="section-heading text-balance text-4xl leading-[1.05] md:text-6xl">
            {strings.hero.heading}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            {strings.hero.subheading}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            className="glass-button px-8 py-3 text-base font-semibold"
          >
            <a href="#gallery">{strings.hero.ctaPrimary}</a>
          </Button>
          <Button
            asChild
            className="glass-button border-none bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-glow"
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
        <p className="max-w-xl text-sm text-muted-foreground">
          {strings.hero.note}
        </p>

        <div
          ref={statsRef}
          className="grid gap-6 rounded-3xl bg-white/30 p-6 shadow-soft backdrop-blur-2xl sm:grid-cols-2"
        >
          {stats.map((item) => (
            <motion.div
              key={item.id}
              className="rounded-2xl border border-white/40 bg-white/40 p-5 shadow-neu backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Counter value={item.value} active={inView} />
              <p className="mt-2 font-heading text-lg text-foreground">
                {localize(language, item.label)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {localize(language, item.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="glass-card relative overflow-hidden rounded-[2rem] border-white/50 shadow-glow"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={heroMedia.image}
            alt="Twinkle applying intricate mehndi art"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_60%)]" />
          <motion.div
            className="absolute bottom-6 left-6 right-6 glass-card bg-white/50 p-5 shadow-neu"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-heading text-xl text-foreground">
              "{strings.hero.heading.split("—")[0].trim()}"
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {strings.hero.subheading}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
};
