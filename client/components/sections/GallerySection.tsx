import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { galleryItems, type BudgetLevel, type ComplexityLevel, type GalleryCategory, type OccasionType } from "@/data/gallery";
import { copy } from "@/data/copy";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const typeOptions: Array<{ value: "all" | GalleryCategory; label: Record<string, string> }> = [
  { value: "all", label: { en: "All styles", hi: "सभी शैलियाँ", gu: "બધી શૈલીઓ" } },
  { value: "bridal", label: { en: "Bridal", hi: "ब्राइडल", gu: "વિવાહ" } },
  { value: "engagement", label: { en: "Engagement", hi: "सगाई", gu: "સગાઈ" } },
  { value: "festival", label: { en: "Festival", hi: "उत्सव", gu: "ઉત્સવ" } },
  { value: "kids", label: { en: "Kids", hi: "बच्चे", gu: "બાળકો" } },
  { value: "custom", label: { en: "Custom", hi: "कस्टम", gu: "કસ્ટમ" } },
];

const budgetOptions: Array<{ value: "all" | BudgetLevel; label: Record<string, string> }> = [
  { value: "all", label: { en: "All budgets", hi: "सभी बजट", gu: "બધા બજેટ" } },
  { value: "classic", label: { en: "Classic", hi: "क्लासिक", gu: "ક્લાસિક" } },
  { value: "signature", label: { en: "Signature", hi: "सिग्नेचर", gu: "સિગ્નેચર" } },
  { value: "premium", label: { en: "Premium", hi: "प्रीमियम", gu: "પ્રીમિયમ" } },
  { value: "luxury", label: { en: "Luxury", hi: "लक्जरी", gu: "લક્ઝરી" } },
];

const occasionOptions: Array<{ value: "all" | OccasionType; label: Record<string, string> }> = [
  { value: "all", label: { en: "All occasions", hi: "सभी अवसर", gu: "બધા પ્રસંગો" } },
  { value: "wedding", label: { en: "Wedding", hi: "विवाह", gu: "લગ્ન" } },
  { value: "sangeet", label: { en: "Sangeet", hi: "संगीत", gu: "સંગીત" } },
  { value: "festival", label: { en: "Festival", hi: "उत्सव", gu: "ઉત્સવ" } },
  { value: "eid", label: { en: "Eid", hi: "ईद", gu: "ઈદ" } },
  { value: "baby-shower", label: { en: "Baby shower", hi: "गोड भराई", gu: "ગોડ ભરાઇ" } },
  { value: "party", label: { en: "Celebration", hi: "समारोह", gu: "ઉજવણી" } },
];

const complexityOptions: Array<{ value: "all" | ComplexityLevel; label: Record<string, string> }> = [
  { value: "all", label: { en: "All details", hi: "सभी विवरण", gu: "બધી વિગત" } },
  { value: "minimal", label: { en: "Minimal", hi: "सरल", gu: "સરળ" } },
  { value: "ornate", label: { en: "Ornate", hi: "सजावटी", gu: "અલંકારિક" } },
  { value: "intricate", label: { en: "Intricate", hi: "सूक्ष्म", gu: "સૂક્ષ્મ" } },
  { value: "playful", label: { en: "Playful", hi: "खिलंदड़", gu: "રમુજી" } },
];

interface FilterState {
  type: "all" | GalleryCategory;
  budget: "all" | BudgetLevel;
  occasion: "all" | OccasionType;
  complexity: "all" | ComplexityLevel;
}

const initialFilterState: FilterState = {
  type: "all",
  budget: "all",
  occasion: "all",
  complexity: "all",
};

export const GallerySection = () => {
  const { language } = useLanguage();
  const strings = copy[language];
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);
  const [aiOccasion, setAiOccasion] = useState<OccasionType | "">("wedding");
  const [aiBudget, setAiBudget] = useState<BudgetLevel | "">("premium");

  const filteredItems = useMemo(
    () =>
      galleryItems.filter((item) => {
        const matchesType = filters.type === "all" || item.category === filters.type;
        const matchesBudget = filters.budget === "all" || item.budget === filters.budget;
        const matchesOccasion = filters.occasion === "all" || item.occasion === filters.occasion;
        const matchesComplexity = filters.complexity === "all" || item.complexity === filters.complexity;
        return matchesType && matchesBudget && matchesOccasion && matchesComplexity;
      }),
    [filters]
  );

  const recommendedDesign = useMemo(() => {
    if (!aiOccasion && !aiBudget) return galleryItems[0];
    const strictMatch = galleryItems.find(
      (item) =>
        (!aiOccasion || item.occasion === aiOccasion) && (!aiBudget || item.budget === aiBudget)
    );
    if (strictMatch) return strictMatch;
    return galleryItems.find((item) => item.occasion === aiOccasion) ?? galleryItems[0];
  }, [aiBudget, aiOccasion]);

  const resetFilters = () => setFilters(initialFilterState);

  return (
    <section id="gallery" className="relative mt-24 space-y-14">
      <div className="flex flex-col gap-6 text-center">
        <p className="headline-script mx-auto">{strings.gallery.heading}</p>
        <h2 className="section-heading mx-auto max-w-3xl text-balance">
          {strings.gallery.subheading}
        </h2>
      </div>

      <div className="glass-card grid gap-4 p-6 shadow-soft md:grid-cols-4">
        <FilterSelect
          label={strings.gallery.filters.type}
          options={typeOptions}
          value={filters.type}
          onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value as FilterState["type"] }))}
          language={language}
        />
        <FilterSelect
          label={strings.gallery.filters.budget}
          options={budgetOptions}
          value={filters.budget}
          onValueChange={(value) => setFilters((prev) => ({ ...prev, budget: value as FilterState["budget"] }))}
          language={language}
        />
        <FilterSelect
          label={strings.gallery.filters.occasion}
          options={occasionOptions}
          value={filters.occasion}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, occasion: value as FilterState["occasion"] }))
          }
          language={language}
        />
        <FilterSelect
          label={strings.gallery.filters.complexity}
          options={complexityOptions}
          value={filters.complexity}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, complexity: value as FilterState["complexity"] }))
          }
          language={language}
        />
        <Button
          type="button"
          variant="ghost"
          className="col-span-full justify-self-start text-sm text-muted-foreground hover:text-primary"
          onClick={resetFilters}
        >
          {strings.gallery.filters.clear}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2.5fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item, index) => (
            <DesignCard
              key={item.id}
              item={item}
              language={language}
              index={index}
              onSelect={() => setSelectedDesign(galleryItems.indexOf(item))}
            />
          ))}
        </div>

        <div className="glass-card h-fit space-y-4 p-6 shadow-neu">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {strings.gallery.aiTitle}
          </p>
          <h3 className="text-2xl font-heading text-foreground">AI Design Recommender</h3>
          <p className="text-sm text-muted-foreground">{strings.gallery.aiSubtitle}</p>
          <div className="space-y-3">
            <FilterSelect
              label={strings.gallery.filters.occasion}
              options={occasionOptions}
              value={aiOccasion || "all"}
              onValueChange={(value) => setAiOccasion(value === "all" ? "" : (value as OccasionType))}
              language={language}
            />
            <FilterSelect
              label={strings.gallery.filters.budget}
              options={budgetOptions}
              value={aiBudget || "all"}
              onValueChange={(value) => setAiBudget(value === "all" ? "" : (value as BudgetLevel))}
              language={language}
            />
          </div>
          <Button
            type="button"
            className="glass-button w-full justify-center"
            onClick={() => setSelectedDesign(galleryItems.indexOf(recommendedDesign))}
          >
            {strings.gallery.aiCTA}
          </Button>
          <div className="rounded-2xl border border-white/40 bg-white/45 p-4 text-sm text-muted-foreground shadow-inner">
            <p className="font-heading text-base text-foreground">
              {localize(language, recommendedDesign.title)}
            </p>
            <p className="mt-1 text-xs">{localize(language, recommendedDesign.description)}</p>
          </div>
        </div>
      </div>

      <DesignModal
        open={selectedDesign !== null}
        onOpenChange={(open) => !open && setSelectedDesign(null)}
        item={selectedDesign !== null ? galleryItems[selectedDesign] : null}
        language={language}
      />
    </section>
  );
};

interface FilterSelectProps {
  label: string;
  options: Array<{ value: string; label: Record<string, string> }>;
  value: string;
  onValueChange: (value: string) => void;
  language: string;
}

const FilterSelect = ({ label, options, value, onValueChange, language }: FilterSelectProps) => (
  <div className="space-y-2 text-left">
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">{label}</p>
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="glass-card h-12 justify-between border-white/40">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="glass-card border-none bg-white/80 backdrop-blur-3xl">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label[language] ?? option.label.en}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const DesignCard = ({
  item,
  language,
  index,
  onSelect,
}: {
  item: (typeof galleryItems)[number];
  language: string;
  index: number;
  onSelect: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const localizedTitle = localize(language as never, item.title);
  const localizedDescription = localize(language as never, item.description);

  return (
    <motion.button
      onClick={onSelect}
      className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/40 text-left shadow-soft backdrop-blur-3xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={item.imageUrl} alt={localizedTitle} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.15)_0,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)] opacity-40 mix-blend-screen" />
            <p className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary">
              {item.budget.toUpperCase()}
            </p>
          </div>
          <div className="space-y-2 p-4">
            <h3 className="font-heading text-lg text-foreground">{localizedTitle}</h3>
            <p className="text-sm text-muted-foreground">{localizedDescription}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag.en}
                  className={cn(
                    "rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-primary shadow-inner",
                    isHovered && "shadow-glow"
                  )}
                >
                  {tag[language as never] ?? tag.en}
                </span>
              ))}
            </div>
          </div>
    </motion.button>
  );
};

const DesignModal = ({
  open,
  onOpenChange,
  item,
  language,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: (typeof galleryItems)[number] | null;
  language: string;
}) => {
  if (!item) return null;
  const localizedTitle = localize(language as never, item.title);
  const localizedDescription = localize(language as never, item.description);
  const localizedTime = localize(language as never, item.timeEstimate);
  const localizedPrice = localize(language as never, item.priceRange);

  const message = `Hello Twinkle! I loved your ${localizedTitle}. Could you share booking details?`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card max-w-5xl border-none p-0 text-left shadow-glow">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-3xl font-heading text-foreground">{localizedTitle}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 px-6 pb-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/50">
            <img src={item.imageUrl} alt={localizedTitle} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0)_0,rgba(255,255,255,0)_30px,rgba(255,255,255,0.25)_30px,rgba(255,255,255,0.25)_60px)]" />
            <div className="absolute inset-0 grid place-items-center text-center text-3xl font-heading uppercase tracking-widest text-white/30 mix-blend-overlay">
              {copy[language as never].gallery.watermark}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base text-muted-foreground">{localizedDescription}</p>
            <div className="grid gap-3 text-sm text-foreground/90">
              <InfoRow label="Occasion" value={item.occasion} />
              <InfoRow label="Budget" value={item.budget} />
              <InfoRow label="Detail" value={item.complexity} />
              <InfoRow label="Time" value={localizedTime} />
              <InfoRow label="Investment" value={localizedPrice} />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="glass-button bg-primary text-primary-foreground">
                <a href={getWhatsAppLink(message)} target="_blank" rel="noreferrer">
                  {copy[language as never].contact.form.whatsapp}
                </a>
              </Button>
              <Button asChild variant="outline" className="glass-button">
                <a href="#contact">{copy[language as never].availability}</a>
              </Button>
            </div>
            <div className="mt-6 grid gap-2 rounded-2xl border border-white/30 bg-white/40 p-4 text-xs text-muted-foreground">
              <p className="font-semibold uppercase tracking-[0.35em] text-primary">
                Notes
              </p>
              <p>
                Organic henna cones, skin-safe glitter, and travel-inclusive touch ups available on request.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-2 shadow-inner backdrop-blur">
    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
    <span className="text-sm font-medium text-foreground">{value}</span>
  </div>
);
