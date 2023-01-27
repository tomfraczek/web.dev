import styled from "styled-components";
import { color } from "theme";
import { logoBlue } from "theme/color";
import { device } from "theme/media";
import { heading1, paragraph1 } from "theme/typography";

export const ContactBarContainer = styled.div`
  background: ${logoBlue};
  margin-top: 8rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 300px;
  margin-left: 20px;
  * {
    margin: 7px 0;
    margin-left: 0;
  }
`;

export const ContentHeader = styled.h2`
  ${heading1}
  color: ${color.white};
`;

export const ContentParagraph = styled.p`
  display: none;
  @media ${device.tablet} {
    ${paragraph1}
    display: block;
    color: ${color.white};
  }
`;

export const CtaContainer = styled.div`
  display: flex;

  span:first-of-type {
    margin-right: 15px;
  }
`;
