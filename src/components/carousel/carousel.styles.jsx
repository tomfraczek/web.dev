import styled from "styled-components";
import { color } from "theme";
import { Container } from "theme/global-styles";
import { paragraph1 } from "theme/typography";

export const CarouselContainer = styled.div`
  margin-top: 10rem;
`;

export const Main = styled.main`
  position: relative;
  top: -100px;
`;

export const HorizontalSection = styled.section`
  position: relative;
  min-height: 100vh;
`;

export const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

export const CardsContainer = styled.div`
  position: relative;
  height: calc(100% - 150px);
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const SampleCard = styled.div`
  position: relative;
  height: 90%;
  width: 80vw;
  margin-right: 75px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardContent = styled.div`
  width: 30%;
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
`;

export const StepImage = styled.img`
  max-width: 50%;
  max-height: 80%;
  border-radius: 5px;
`;

export const CarouselHeader = styled.h1``;

export const StickyContainer = styled(Container)`
  position: sticky;
  top: 85px;
`;
