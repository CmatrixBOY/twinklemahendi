import type { CopySections } from "@/data/copy";

export type NavItem = {
  id: string;
  href: string;
  labelKey: keyof CopySections["nav"];
  icon: "home" | "palette" | "star" | "message" | "help";
};

export const navigationItems: NavItem[] = [
  {
    id: "home",
    href: "#home",
    labelKey: "home",
    icon: "home",
  },
  {
    id: "gallery",
    href: "#gallery",
    labelKey: "gallery",
    icon: "palette",
  },
  {
    id: "reviews",
    href: "#testimonials",
    labelKey: "reviews",
    icon: "star",
  },
  {
    id: "contact",
    href: "#contact",
    labelKey: "contact",
    icon: "message",
  },
  {
    id: "faq",
    href: "#faq",
    labelKey: "faq",
    icon: "help",
  },
];
