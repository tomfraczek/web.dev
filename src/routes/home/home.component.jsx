import { Hero } from "components/hero/hero.component";
import { WebDevelopment } from "components/webDevelopment";
import { OfferCards } from "components/offerCards";
import styled from "styled-components";
import { memo } from "react";
import { HorizontalScroll } from "components/horizontalScroll";

import { Container } from "theme/global-styles";

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  min-height: 100vh;
`;

const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
`;

const SampleCards = memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);

export const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <WebDevelopment />
        <OfferCards />
      </Container>
      <Main>
        <HorizontalSection>
          <HorizontalScroll>
            <CardsContainer>
              <SampleCards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>
      </Main>
    </>
  );
};
