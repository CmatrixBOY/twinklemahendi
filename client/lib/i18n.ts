export type LanguageCode = "en" | "hi" | "gu";

export type LocalizedText = Record<LanguageCode, string>;

export const fallbackLanguage: LanguageCode = "en";

export const languageOptions: Array<{
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  description: string;
}> = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    description: "International visitors",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
    description: "उत्तर भारत के मेहमान",
  },
  {
    code: "gu",
    label: "Gujarati",
    nativeLabel: "ગુજરાતી",
    description: "ગુજરાતના મહેમાનો",
  },
];

export const localize = (language: LanguageCode, text: LocalizedText): string => {
  if (text[language]) {
    return text[language];
  }

  return text[fallbackLanguage];
};
