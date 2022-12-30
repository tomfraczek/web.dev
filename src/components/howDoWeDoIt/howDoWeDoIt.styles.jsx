import styled from "styled-components";
import { color } from "theme";
import { paragraph1, heading1 } from "theme/typography";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 3rem;
`;

export const SampleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4rem;
`;

export const CardContent = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  color: ${color.logoBlue};
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.h3`
  color: ${color.logoRed};
  margin-bottom: 0.7rem;
`;

export const Description = styled.p`
  ${paragraph1}
  margin-bottom: 2rem;
`;

export const StepImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

export const CarouselHeader = styled.h1`
  ${heading1}
  margin-bottom: 1rem;
`;
