import { OfferCards } from "components/offerCards";
import { Container } from "theme/global-styles";
import { ICONS, OFFERS } from "routes/offers/offers.constants";
import rwd from "routes/offers/img/rwd.png";
import scroll from "routes/offers/img/scroll.png";

import {
  OffersContainer,
  Hero,
  HeroContent,
  Title,
  Description,
  ImageContainer,
  Image,
  ServiceCard,
  CardsContainer,
  Index,
  IndexContainer,
  CardContent,
  CardTitle,
  CardDescription,
  IconsContainer,
  Icon,
  ContentContainer,
  ScrollContainer,
  // SectionHeader,
  Scroll,
} from "./offers.styles";
import { HighlightBlue, HighlightRed } from "theme/media";

export const Offers = () => {
  return (
    <OffersContainer>
      <Container>
        {/* TODO: cre3ate a seperate component */}
        <Hero>
          <HeroContent>
            <Title>
              What
              <HighlightRed>do</HighlightRed>
              we
              <HighlightRed>offer</HighlightRed>?
            </Title>

            <Description>
              At web-dev we understand that getting your business online might
              be a bit overwhelming. That's why we take care of everything for
              you: from registering your domain name, through setting up your
              hosting to launching your business website and submitting it to
              search engines.
            </Description>

            <Description>
              All our websites are custom designed for small businesses and
              start-ups requiring a professional business website
            </Description>
          </HeroContent>

          <ImageContainer>
            <Image src={rwd} />
          </ImageContainer>
        </Hero>

        <ScrollContainer>
          <Scroll src={scroll} />
        </ScrollContainer>

        <ContentContainer>
          <IconsContainer>
            {ICONS.map((icon) => (
              <Icon src={icon} />
            ))}
          </IconsContainer>

          <CardsContainer>
            {OFFERS.map(({ title, description }, i) => (
              <ServiceCard key={`${title}-${i}`}>
                <IndexContainer>
                  <Index>{`0${i + 1}.`}</Index>
                </IndexContainer>
                <CardContent>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </ServiceCard>
            ))}
          </CardsContainer>
        </ContentContainer>
        <OfferCards />
      </Container>
    </OffersContainer>
  );
};
