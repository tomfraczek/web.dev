import {
  CardTitle,
  CardsContainer,
  OfferCardsContainer,
  Highlighted,
} from "./offerCards.styles";
import { OfferCard } from "./offerCard";
import { Container } from "theme/global-styles";
import { OFFERS } from "theme/constants";

export const OfferCards = () => {
  return (
    <Container>
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
