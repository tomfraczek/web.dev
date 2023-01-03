import { OfferCards } from "components/offerCards";
import { Technologies } from "components/technologies/technologies.component";
import { OffersContainer } from "./offers.styles";
export const Offers = () => {
  return (
    <OffersContainer>
      <Technologies />
      <OfferCards />
    </OffersContainer>
  );
};
