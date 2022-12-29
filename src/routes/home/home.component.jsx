import { Hero } from "components/hero/hero.component";
import { WebDevelopment } from "components/webDevelopment";
import { OfferCards } from "components/offerCards";
import { Carousel } from "components/carousel";

import { Container } from "theme/global-styles";
import { Support } from "components/support";

export const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <WebDevelopment />
        <OfferCards />
      </Container>
      <Carousel />
      <Container>
        <Support />
      </Container>
    </>
  );
};
