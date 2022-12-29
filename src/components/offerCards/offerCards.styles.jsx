import styled from "styled-components";
import { color } from "theme";
import { device } from "theme/media";
import { heading1 } from "theme/typography";

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
  ${heading1}
  color: ${color.black};
  margin-bottom: 2rem;
`;

export const Highlighted = styled.span`
  color: ${color.logoRed};
`;
