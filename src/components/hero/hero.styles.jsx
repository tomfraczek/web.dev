import styled from "styled-components";
import { color } from "../../theme";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentHeader = styled.h1`
  font-size: 3.625rem;
  margin: 0 0 27px;
  white-space: pre-line;
`;

export const ContentDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.55;
`;

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  span:first-of-type {
    margin-right: 1rem;
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
`;

export const BlueHighlight = styled.span`
  color: ${color.logoBlue};
`;
