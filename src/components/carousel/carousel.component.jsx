import { memo, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { HorizontalScroll } from "components/horizontalScroll";
import { HOW_WE_DO_IT_CARDS } from "theme/constants.jsx";

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

  useEffect(() => {
    handleDynamicHeight(ContainerRef, setDynamicHeight);
  }, []);

  return (
    <>
      <CarouselContainer>
        <Main>
          <HorizontalSection>
            <HorizontalScroll>
              <CardsContainer ref={ContainerRef}>
                {HOW_WE_DO_IT_CARDS.map(
                  ({ title, description, image, subtitle }) => (
                    <SampleCard ref={CardRef}>
                      <CardContent>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                        <Description>{description}</Description>
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
