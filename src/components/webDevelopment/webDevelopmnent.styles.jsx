import styled from "styled-components";
import { color } from "theme";
import { device } from "theme/media";
import { heading1, paragraph2 } from "theme/typography";

export const WebDevConteiner = styled.div`
  margin-top: 5rem;
  @media ${device.tablet} {
    margin-top: 10rem;
  }
`;

export const Header = styled.h1`
  ${heading1}
  display: flex;
  margin-bottom: 4rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DevCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200%;
  margin-bottom: 3rem;
  padding: 0 10px;

  @media ${device.tablet} {
    flex-basis: 30%;
    padding: 0;
  }
`;

export const TechIconContainer = styled.div`
  width: 50%;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: center;
`;

export const TechIcon = styled.img`
  width: 65%;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: ${color.black};
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  ${paragraph2}
  text-align: center;
`;
