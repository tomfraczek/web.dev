import clock from "components/carousel/img/clock.jpg";
import code1 from "components/carousel/img/code1.jpg";
import code2 from "components/carousel/img/code2.jpg";
import dashboard from "components/carousel/img/dashboard.jpg";
import design1 from "components/carousel/img/design1.jpg";
import design2 from "components/carousel/img/design2.jpg";
import feedback from "components/carousel/img/feedback.jpg";
import feedback2 from "components/carousel/img/feedback2.jpg";
import feedback3 from "components/carousel/img/feedback3.jpg";
import fireworks1 from "components/carousel/img/fireworks1.jpg";
import fireworks2 from "components/carousel/img/fireworks2.jpg";
import fireworks3 from "components/carousel/img/fireworks3.jpg";
import fireworks4 from "components/carousel/img/fireworks4.jpg";
import laptop1 from "components/carousel/img/laptop1.jpg";
import laptop2 from "components/carousel/img/laptop2.jpg";
import laptop3 from "components/carousel/img/laptop3.jpg";
import laptop4 from "components/carousel/img/laptop4.jpg";
import meeting1 from "components/carousel/img/meeting1.jpg";
import meeting2 from "components/carousel/img/meeting2.jpg";
import meeting3 from "components/carousel/img/meeting3.jpg";
import meeting4 from "components/carousel/img/meeting4.jpg";
import meeting5 from "components/carousel/img/meeting5.jpg";
import meeting6 from "components/carousel/img/meeting6.jpg";
import meetingDashboard from "components/carousel/img/meetingDashboard.jpg";
import time from "components/carousel/img/time.jpg";

import usa from "lng/icon/usa.png";
import poland from "lng/icon/poland.png";
import france from "lng/icon/france.png";

export const HOW_WE_DO_IT_CARDS = [
  {
    title: "Step 1",
    subtitle: "Introduction",
    description:
      "We start each individual project with a precise understanding of your needs. At first we set the meeting, during which we discuss the idea and work together on the vision of the project. We get to know your product, business goals, customer characteristics and their problems. We identify the expectations of your target group from your industry ourselves.",
    image: meeting4,
  },
  {
    title: "Step 2",
    subtitle: "Design Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: design1,
  },
  {
    title: "Step 3",
    subtitle: "Your Feedback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: laptop1,
  },
  {
    title: "Step 4",
    subtitle: "Product Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: feedback,
  },
  {
    title: "Step 5",
    subtitle: "More Feedback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: feedback2,
  },
  {
    title: "Step 6",
    subtitle: "Lanch day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: fireworks1,
  },
  //   {
  //     title: "Step 6",
  //     subtitle: "Support",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
  //     image: clock,
  //   },
];

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
    title: "Offers",
    url: "/offers",
  },
  {
    title: "Career",
    url: "/career",
  },
  {
    title: "Free Quote",
    url: "/quote",
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
