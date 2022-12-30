import styled from "styled-components";
import { darkBlue } from "theme/color";
import { heading1, paragraph1 } from "theme/typography";
import { device } from "theme/media";

export const SupportHeader = styled.h1`
  ${heading1}
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${darkBlue};

  @media ${device.tablet} {
    margin-top: 0;
    margin-bottom: 4rem;
  }
`;

export const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    align-items: flex-start;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 40%;
    margin-bottom: 0;
  }
`;

export const Header = styled.h3`
  ${heading1}
  margin-bottom:2.5rem;
`;

export const Description = styled.p`
  ${paragraph1}
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 90%;
  margin: auto;
  @media ${device.tablet} {
    width: 40%;
    margin: unset;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px; ;
`;
