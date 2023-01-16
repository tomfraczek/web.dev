import styled, { keyframes } from "styled-components";
import { heading1, paragraph1, paragraph2 } from "theme/typography";
import { color } from "theme";
import { lensIndex } from "ramda";

const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;
export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.section`
  display: flex;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 60%;
  height: 500px;
`;

export const Title = styled.h1`
  ${heading1}
  margin-bottom: 15px;
`;

export const Description = styled.p`
  ${paragraph1}
`;

export const ImageContainer = styled.div`
  flex-basis: 100%;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  position: absolute;
  left: 25%;
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ServiceCard = styled.div`
  background-color: ${color.white};
  border: 0 solid ${color.darkBlue};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  margin-bottom: 45px;
  padding: 1.5rem;
  width: 500px;

  display: flex;
  align-items: center;
`;

export const IndexContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Index = styled.span`
  font-size: 54px;
  font-weight: 100;
  color: ${color.logoBlue};
`;

export const CardContent = styled.div`
  width: 80%;
  margin-left: 20px;
`;

export const CardTitle = styled.h1`
  margin-bottom: 1rem;
  ${heading1}
  color: ${color.lightBlue};
`;

export const CardDescription = styled.p`
  ${paragraph2}
`;

export const IconsContainer = styled.div`
  position: sticky;
  top: 50px;
  height: 20%;
`;

export const Icon = styled.img`
  height: 100px;
  margin: 40px;
`;
export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 15rem;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  animation: ${blinker} 1s linear infinite;
`;

export const Scroll = styled.img`
  width: 50px;
`;
