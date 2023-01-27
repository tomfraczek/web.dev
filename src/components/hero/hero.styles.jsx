import styled from "styled-components";
import { color } from "../../theme";
import { device } from "theme/media";
import { paragraph1 } from "theme/typography";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 150px;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;
export const ContentHeader = styled.h1`
  font-size: 3.625rem;
  margin: 0 0 27px;
  white-space: pre-line;
`;

export const ContentDescription = styled.p`
  ${paragraph1}
  margin-bottom: 1rem;
`;

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  flex-direction: column;

  span {
    margin-bottom: 1rem;
    width: 150px;

    @media ${device.tablet} {
      width: unset;
    }
  }

  @media ${device.tablet} {
    margin-top: 1rem;
    flex-direction: row;
    \ span:first-of-type {
      margin-right: 1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const BlueHighlight = styled.span`
  color: ${color.logoBlue};
`;
