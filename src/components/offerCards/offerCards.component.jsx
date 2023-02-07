import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Webguy from "./img/webguy.png";
import BackgrounsOverlay from "./img/overlay.png";

import { isMobile } from "theme/media";

import {
  CardTitle,
  CardsContainer,
  OfferCardsContainer,
  Highlighted,
  OfferDetails,
  OfferContainer,
  BackgroundImage,
} from "./offerCards.styles";
import { OfferCard } from "./offerCard";
import { Container } from "theme/global-styles";
import { OFFERS } from "components/offerCards/offerCards.constants";
import FullWidthTabs from "components/offerCards/offerTabs/offerTabs.component";

export const OfferCards = () => {
  const [open, setOpen] = useState(false);
  const [defaultIndex, setDefaultIndex] = useState(0);
  const handleOpen = (index) => {
    setDefaultIndex(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!isMobile()) {
      AOS.init();
    }
  }, []);

  return (
    <OfferContainer>
      <BackgroundImage src={Webguy} />
      <BackgroundImage src={BackgrounsOverlay} />
      <Container data-aos={!isMobile() && "fade-right"}>
        <OfferCardsContainer>
          <CardTitle>
            check<Highlighted>the</Highlighted>offer
          </CardTitle>
          <CardsContainer>
            {OFFERS.map(
              (
                {
                  title,
                  oldPrice,
                  newPrice,
                  headDescription,
                  items,
                  recommmended,
                },
                i
              ) => (
                <OfferCard
                  key={title}
                  title={title}
                  oldPrice={oldPrice}
                  newPrice={newPrice}
                  headDescription={headDescription}
                  items={items}
                  recommmended={recommmended}
                  handleOpen={() => handleOpen(i)}
                  index={i}
                />
              )
            )}
          </CardsContainer>

          <OfferDetails>
            <FullWidthTabs
              offers={OFFERS}
              defaultIndex={defaultIndex}
              setDefaultIndex={setDefaultIndex}
            />
          </OfferDetails>
        </OfferCardsContainer>
      </Container>
    </OfferContainer>
  );
};
