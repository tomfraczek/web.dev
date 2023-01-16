//  CAROUSEL IMPORT

// TECHNOLOGIES IMPORT

// LANGUAGE IMPORT
import usa from "lng/icon/usa.png";
import poland from "lng/icon/poland.png";
import france from "lng/icon/france.png";

export const OFFERS = [
  {
    title: "Start",
    oldPrice: 399,
    newPrice: 299,
    headDescription: "Free support for the first month.",
    items: ["Single Website", "Design + RWD", "Hosting"],
    recommmended: false,
    url: "offers/start",
  },
  {
    title: "Silver",
    oldPrice: 999,
    newPrice: 799,
    headDescription: "Perfect for growing websites.",
    items: ["Single Website", "Design + RWD", "Hosting"],
    recommmended: false,
    url: "offers/silver",
  },
  {
    title: "Gold",
    oldPrice: 399,
    newPrice: 299,
    headDescription: "Free support for the first month",
    items: ["Single Website", "Design + RWD", "Hosting", "Maintenence"],
    recommmended: true,
    url: "offers/gold",
  },
  {
    title: "Platinum",
    oldPrice: 399,
    newPrice: 299,
    headDescription: "Free support for the first month",
    items: ["Single Website", "Design + RWD", "Hosting", "Maintenence"],
    recommmended: false,
    url: "offers/platinum",
  },
];

export const MAIN_NAVIGATION = [
  // {
  //   title: "About",
  //   url: "/about",
  // },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Free Quote",
    url: "/quote",
  },
  {
    title: "Career",
    url: "/career",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const LNGS = [
  { nativeName: "English", code: "en", icon: usa },
  { nativeName: "Français", code: "fr", icon: france },
  { nativeName: "Polski", code: "pl", icon: poland },
];
