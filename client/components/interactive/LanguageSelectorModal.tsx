import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { copy } from "@/data/copy";
import { languageOptions, type LanguageCode } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSelectorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LanguageSelectorModal = ({ open, onOpenChange }: LanguageSelectorModalProps) => {
  const { language, setLanguage, hasChosenLanguage, ready, setHasChosenLanguage } = useLanguage();
  const [selected, setSelected] = useState<LanguageCode>(language);

  useEffect(() => {
    if (ready && !hasChosenLanguage) {
      onOpenChange(true);
    }
  }, [ready, hasChosenLanguage, onOpenChange]);

  useEffect(() => {
    setSelected(language);
  }, [language]);

  const strings = useMemo(() => copy[selected], [selected]);
  const fallbackStrings = copy.en;

  const handleConfirm = () => {
    setLanguage(selected);
    setHasChosenLanguage(true);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-none sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="section-heading text-center">
            {hasChosenLanguage ? strings.languageModal.title : fallbackStrings.languageModal.title}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {hasChosenLanguage
              ? strings.languageModal.subtitle
              : fallbackStrings.languageModal.subtitle}
          </DialogDescription>
        </DialogHeader>
        <RadioGroup
          value={selected}
          onValueChange={(value) => setSelected(value as LanguageCode)}
          className="grid gap-3"
        >
          {languageOptions.map((option) => (
            <label
              key={option.code}
              className={cn(
                "glass-card flex cursor-pointer items-center justify-between gap-3 p-4 transition-transform duration-300",
                selected === option.code ? "shadow-glow ring-2 ring-primary/60" : "hover:-translate-y-0.5"
              )}
              htmlFor={`lang-${option.code}`}
            >
              <div>
                <p className="font-heading text-lg text-foreground">{option.nativeLabel}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
              <RadioGroupItem id={`lang-${option.code}`} value={option.code} className="h-5 w-5" />
            </label>
          ))}
        </RadioGroup>
        <div className="flex flex-col gap-2">
          <Button
            type="button"
            onClick={handleConfirm}
            className="glass-button w-full justify-center font-semibold"
          >
            {hasChosenLanguage ? strings.languageModal.button : fallbackStrings.languageModal.button}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            {hasChosenLanguage ? strings.languageModal.reminder : fallbackStrings.languageModal.reminder}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
