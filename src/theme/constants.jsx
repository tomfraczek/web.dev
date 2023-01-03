//  CAROUSEL IMPORT

// TECHNOLOGIES IMPORT
import bootstrap from "components/technologies/icons/bootstrap.svg";
import css from "components/technologies/icons/css.svg";
import github from "components/technologies/icons/github.svg";
import html from "components/technologies/icons/html.svg";
import jira from "components/technologies/icons/jira.svg";
import js from "components/technologies/icons/js.svg";
import mui from "components/technologies/icons/mui.svg";
import next from "components/technologies/icons/next.svg";
import react from "components/technologies/icons/react.svg";
import reactNative from "components/technologies/icons/reactNative.svg";
import sass from "components/technologies/icons/sass.svg";
import storyblok from "components/technologies/icons/storyblok.svg";
import styledComponents from "components/technologies/icons/styledComponents.svg";
import tailwind from "components/technologies/icons/tailwind.svg";
import uikit from "components/technologies/icons/uikit.svg";

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
  {
    title: "About",
    url: "/about",
  },
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

export const TECH_STACK = [
  {
    title: "HTML CSS JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo sed augue tristique suscipit. Etiam fermentum ultricies erat. Cras pellentesque dapibus diam. Suspendisse congue risus neque, in imperdiet augue tempus sed.",
    icons: [js],
    // css,
    // html,
  },
  {
    title: "Web Applications and User Interfaces",
    description:
      "Phasellus dictum sem diam, at sagittis justo scelerisque eu. Fusce pharetra enim mi, vitae placerat ipsum malesuada ut.",
    icons: [react],
  },
  {
    title: "Mobile Apps",
    description:
      "Phasellus dictum sem diam, at sagittis justo scelerisque eu. Fusce pharetra enim mi, vitae placerat ipsum malesuada ut.",
    icons: [reactNative],
  },
  {
    title: "Server side rendering",
    description:
      "Phasellus dictum sem diam, at sagittis justo scelerisque eu. Fusce pharetra enim mi, vitae placerat ipsum malesuada ut.",
    icons: [next],
  },
  {
    title: "Content Menagment System - CMS",
    description:
      "Phasellus dictum sem diam, at sagittis justo scelerisque eu. Fusce pharetra enim mi, vitae placerat ipsum malesuada ut.",
    icons: [storyblok],
  },
  {
    title: "Transparency",
    description:
      "Phasellus dictum sem diam, at sagittis justo scelerisque eu. Fusce pharetra enim mi, vitae placerat ipsum malesuada ut.",
    icons: [jira, github],
  },
  {
    title: "Front-end frameworks",
    description:
      "Phasellus dictum sem diam, at sagittis justo scelerisque eu. Fusce pharetra enim mi, vitae placerat ipsum malesuada ut.",
    icons: [bootstrap, uikit, tailwind, mui],
  },
  {
    title: "Front-end frameworks",
    description:
      "Phasellus dictum sem diam, at sagittis justo scelerisque eu. Fusce pharetra enim mi, vitae placerat ipsum malesuada ut.",
    icons: [styledComponents, sass, mui, uikit, bootstrap],
  },
];
