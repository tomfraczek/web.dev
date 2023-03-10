import { useRef, useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { isMobile } from "theme/media";

import styled from "styled-components";
import { HorizontalScroll } from "components/horizontalScroll";
import { HOW_WE_DO_IT_CARDS } from "./carousel.constants";

import {
  CarouselContainer,
  Main,
  HorizontalSection,
  CardsContainer,
  SampleCard,
  StepImage,
  CarouselHeader,
  StickyContainer,
  CardContent,
  Title,
  Subtitle,
  Description,
  Index,
} from "./carousel.styles.jsx";
import { Highlighted } from "components/offerCards/offerCards.styles";

export const Carousel = () => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [cardHeight, setCardHeight] = useState(null);
  const ContainerRef = useRef(null);
  const CardRef = useRef(null);

  const calcDynamicHeight = (objectWidth) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh - cardHeight;
  };

  const handleDynamicHeight = (ref, setDynamicHeight) => {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);

    setCardHeight(CardRef.current.offsetHeight);
    setDynamicHeight(dynamicHeight);
  };

  return (
    <>
      <CarouselContainer>
        <Main>
          <HorizontalSection>
            <HorizontalScroll>
              <CardsContainer ref={ContainerRef}>
                {HOW_WE_DO_IT_CARDS.map(
                  ({ title, description, image, subtitle }, i) => (
                    <SampleCard ref={CardRef} key={`${title}-${i}`}>
                      <CardContent>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                        <Description>{description}</Description>
                        <Index>{`${i + 1}/${HOW_WE_DO_IT_CARDS.length}`}</Index>
                      </CardContent>
                      <StepImage src={image} />
                    </SampleCard>
                  )
                )}
              </CardsContainer>
            </HorizontalScroll>
          </HorizontalSection>
        </Main>
      </CarouselContainer>
    </>
  );
};
