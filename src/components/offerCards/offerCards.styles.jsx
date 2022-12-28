import styled from "styled-components";
import { color } from "theme";
import { device } from "theme/media";

export const OfferCardsContainer = styled.div`
  margin-top: 10rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  /* @media ${device.tablet} {
    flex-wrap: nowrap;
  } */
`;

export const CardTitle = styled.h3`
  color: ${color.logoBlue};
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;
