import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Hero } from "components/hero/hero.component";
import { WebDevelopment } from "components/webDevelopment";
import { OfferCards } from "components/offerCards";
import { Carousel } from "components/carousel";
import { Support } from "components/support";
import { Footer } from "components/footer";
import { HowDoWeDoIt } from "components/howDoWeDoIt";

import { isMobile } from "theme/media";
import { ContactBar } from "components/contactBar";

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <WebDevelopment />
      <OfferCards />
      {isMobile() ? <HowDoWeDoIt /> : <Carousel />}
      <Support />
      <ContactBar />
    </>
  );
};
