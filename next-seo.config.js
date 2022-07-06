import { originUrl } from "./routes";

const seoConfig = {
  canonical: "https://www.cipollina.sk/",
  title: "Pizza Cipollina",
  description: "Pizza je naša vášeň, pripravujeme ju s láskou.",
  openGraph: {
    type: "website",
    url: "https://www.cipollina.sk/",
    site_name: "Pizza Cipollina",
    title: "Pizza Cipollina",
    description: "Pizza je naša vášeň, pripravujeme ju s láskou.",
    profile: {
      username: "@PizzaCipollina",
    },
  },
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      href: `${originUrl}apple-touch-icon.png`,
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      href: `${originUrl}favicon-32x32.png`,
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: `${originUrl}favicon-16x16.png`,
      sizes: "16x16",
    },
    {
      rel: "manifest",
      href: `${originUrl}site.webmanifest`,
    },
  ],
};

export default seoConfig;
