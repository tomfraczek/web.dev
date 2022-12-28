import {
  CardTitle,
  CardsContainer,
  OfferCardsContainer,
} from "./offerCards.styles";
import { OfferCard } from "./offerCard";

const CARDS_CONTENT = [
  {
    title: "Start",
    oldPrice: 399,
    newPrice: 299,
    headDescription: "Free support for the first month.",
    items: ["Single Website", "Design + RWD", "Hosting"],
    recommmended: false,
  },
  {
    title: "Plus",
    oldPrice: 999,
    newPrice: 799,
    headDescription: "Perfect for growing websites.",
    items: ["Single Website", "Design + RWD", "Hosting"],
    recommmended: false,
  },
  {
    title: "Optimum",
    oldPrice: 399,
    newPrice: 299,
    headDescription: "Free support for the first month",
    items: ["Single Website", "Design + RWD", "Hosting", "Maintenence"],
    recommmended: true,
  },
  {
    title: "Professional",
    oldPrice: 399,
    newPrice: 299,
    headDescription: "Free support for the first month",
    items: ["Single Website", "Design + RWD", "Hosting", "Maintenence"],
    recommmended: false,
  },
];

export const OfferCards = () => {
  return (
    <OfferCardsContainer>
      <CardTitle>Check the offer</CardTitle>
      <CardsContainer>
        {CARDS_CONTENT.map(
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
  );
};
