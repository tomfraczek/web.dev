import { memo, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { HorizontalScroll } from "components/horizontalScroll";

import clock from "./img/clock.jpg";
import code1 from "./img/code1.jpg";
import code2 from "./img/code2.jpg";
import dashboard from "./img/dashboard.jpg";
import design1 from "./img/design1.jpg";
import design2 from "./img/design2.jpg";
import feedback from "./img/feedback.jpg";
import feedback2 from "./img/feedback2.jpg";
import feedback3 from "./img/feedback3.jpg";
import fireworks1 from "./img/fireworks1.jpg";
import fireworks2 from "./img/fireworks2.jpg";
import fireworks3 from "./img/fireworks3.jpg";
import fireworks4 from "./img/fireworks4.jpg";
import laptop1 from "./img/laptop1.jpg";
import laptop2 from "./img/laptop2.jpg";
import laptop3 from "./img/laptop3.jpg";
import laptop4 from "./img/laptop4.jpg";
import meeting1 from "./img/meeting1.jpg";
import meeting2 from "./img/meeting2.jpg";
import meeting3 from "./img/meeting3.jpg";
import meeting4 from "./img/meeting4.jpg";
import meeting5 from "./img/meeting5.jpg";
import meeting6 from "./img/meeting6.jpg";
import meetingDashboard from "./img/meetingDashboard.jpg";
import time from "./img/time.jpg";

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

const SIMPLE_CARD = [
  {
    title: "Step 1",
    subtitle: "Introduction",
    description:
      "We start each individual project with a precise understanding of your needs. At first we set the meeting, during which we discuss the idea and work together on the vision of the project. We get to know your product, business goals, customer characteristics and their problems. We identify the expectations of your target group from your industry ourselves.",
    image: meeting4,
  },
  {
    title: "Step 2",
    subtitle: "Design Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: design1,
  },
  {
    title: "Step 3",
    subtitle: "Your Feedback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: laptop1,
  },
  {
    title: "Step 4",
    subtitle: "Product Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: feedback,
  },
  {
    title: "Step 5",
    subtitle: "More Feedback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: feedback2,
  },
  {
    title: "Step 6",
    subtitle: "Lanch day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
    image: fireworks1,
  },
  //   {
  //     title: "Step 6",
  //     subtitle: "Support",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae suscipit ipsum. Etiam aliquet consectetur ligula, sed sagittis ipsum finibus id. Fusce scelerisque massa leo, ut ultrices urna finibus eget. Integer vitae felis rutrum, rhoncus nisl vel, vestibulum purus.",
  //     image: clock,
  //   },
];

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
                {SIMPLE_CARD.map(({ title, description, image, subtitle }) => (
                  <SampleCard ref={CardRef}>
                    <CardContent>
                      <Title>{title}</Title>
                      <Subtitle>{subtitle}</Subtitle>
                      <Description>{description}</Description>
                    </CardContent>
                    <StepImage src={image} />
                  </SampleCard>
                ))}
              </CardsContainer>
            </HorizontalScroll>
          </HorizontalSection>
        </Main>
      </CarouselContainer>
    </>
  );
};
