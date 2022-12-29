import styled from "styled-components";
import { darkBlue } from "theme/color";
import { heading1, paragraph1 } from "theme/typography";

export const SupportHeader = styled.h1`
  ${heading1}
  margin-bottom: 4rem;
  text-align: center;
  color: ${darkBlue};
`;

export const SupportContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
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
  width: 40%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px; ;
`;
