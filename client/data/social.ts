export type SocialPlatform = "instagram" | "pinterest" | "facebook";

export type SocialCard = {
  id: string;
  platform: SocialPlatform;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  stats: string;
};

export const socialFeed: SocialCard[] = [
  {
    id: "insta-sunrise",
    platform: "instagram",
    title: "Sunrise bridal rituals in Udaipur",
    excerpt:
      "Swipe through the reel to watch the pistachio-glass palette shimmer in the morning light.",
    imageUrl:
      "https://images.unsplash.com/photo-1601160454337-6a84801c0f65?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/twinklebatliwala",
    stats: "18.7K likes",
  },
  {
    id: "pinterest-palettes",
    platform: "pinterest",
    title: "Bridal palette moodboard",
    excerpt:
      "Curated floral jaalis, terracotta-glow lighting, and pistachio accents for intimate courtyards.",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    link: "https://www.pinterest.com/twinklebatliwala",
    stats: "320 saves",
  },
  {
    id: "facebook-review",
    platform: "facebook",
    title: "Families that keep returning",
    excerpt:
      "The Shah family shares how every generation now celebrates with Twinkle's artistry.",
    imageUrl:
      "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=900&q=80",
    link: "https://www.facebook.com/twinklebatliwala",
    stats: "542 comments",
  },
];
