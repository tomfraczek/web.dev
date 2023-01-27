import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { isMobile } from "theme/media";

import {
  CardTitle,
  CardsContainer,
  OfferCardsContainer,
  Highlighted,
} from "./offerCards.styles";
import { OfferCard } from "./offerCard";
import { Container } from "theme/global-styles";
import { OFFERS } from "components/offerCards/offerCards.constants";

export const OfferCards = () => {
  useEffect(() => {
    if (!isMobile()) {
      AOS.init();
    }
  }, []);

  return (
    <Container data-aos={!isMobile() && "fade-right"}>
      <OfferCardsContainer>
        <CardTitle>
          check<Highlighted>the</Highlighted>offer
        </CardTitle>
        <CardsContainer>
          {OFFERS.map(
            ({
              title,
              oldPrice,
              newPrice,
              headDescription,
              items,
              recommmended,
            }) => (
              <OfferCard
                key={title}
                title={title}
                oldPrice={oldPrice}
                newPrice={newPrice}
                headDescription={headDescription}
                items={items}
                recommmended={recommmended}
              />
            )
          )}
        </CardsContainer>
      </OfferCardsContainer>
    </Container>
  );
};
