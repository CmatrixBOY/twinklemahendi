import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fallbackLanguage, type LanguageCode } from "@/lib/i18n";

const STORAGE_KEY = "twinkle-language";

export type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  hasChosenLanguage: boolean;
  ready: boolean;
  setHasChosenLanguage: Dispatch<SetStateAction<boolean>>;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageCode>(fallbackLanguage);
  const [hasChosenLanguage, setHasChosenLanguage] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (stored) {
        setLanguageState(stored);
        setHasChosenLanguage(true);
      }
    } catch (error) {
      console.warn("Unable to access language preference", error);
    } finally {
      setReady(true);
    }
  }, []);

  const setLanguage = useCallback((next: LanguageCode) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      console.warn("Unable to persist language", error);
    }
    setHasChosenLanguage(true);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      hasChosenLanguage,
      ready,
      setHasChosenLanguage,
    }),
    [language, setLanguage, hasChosenLanguage, ready],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
