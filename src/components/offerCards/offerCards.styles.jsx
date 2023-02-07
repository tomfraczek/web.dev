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
  justify-content: space-between;

  /* @media ${device.tablet} {
    flex-wrap: nowrap;
  } */
`;

export const CardTitle = styled.h3`
  ${heading1}
  color: ${color.white};
  margin-bottom: 2rem;
`;

export const Highlighted = styled.span`
  color: ${color.logoRed};
`;

export const OfferDetails = styled.div``;

export const OfferContainer = styled.div`
  padding-top: 2rem;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
`;
