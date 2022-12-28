import { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

import { Button } from "components/button";

import Medal1 from "./img/medal.png";
import Medal2 from "./img/medal2.png";
import Cyborg from "./img/cyborg.png";
import Shapes from "./img/shapes.png";
import Rocket from "./img/rocket.png";

import {
  OfferContainer,
  CarouselContainer,
  Card,
  CardTitle,
  List,
  ListItem,
  TopDescription,
  Price,
  Medal,
  SelectButton,
  OldPrice,
  NewPrice,
  PriceContainer,
  PriceTitle,
  CardHeader,
  CardBody,
} from "./offerCarousel.styles";

import { Container } from "theme/global-styles";

export const OfferCarousel = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = [
    {
      key: 1,
      content: (
        <Card>
          <Medal src={Medal1} />

          <CardTitle>Optimum</CardTitle>
          <TopDescription>Most frequently chosen</TopDescription>
          <Price>from 800$</Price>
          <List>
            <ListItem>Optimized Website</ListItem>
            <ListItem>RWD</ListItem>
            <ListItem>Server</ListItem>
            <ListItem>Domain</ListItem>
            <ListItem>Maintenece</ListItem>
            <ListItem>CMS</ListItem>
          </List>
          <SelectButton>Select</SelectButton>
        </Card>
      ),
    },
    {
      key: 2,
      content: (
        <Card>
          <CardTitle>Enterprise</CardTitle>
          <TopDescription>For large companies</TopDescription>
          <Price>from 1600$</Price>
          <List>
            <ListItem>Optimized Website</ListItem>
            <ListItem>RWD</ListItem>
            <ListItem>Server</ListItem>
            <ListItem>Domain</ListItem>
            <ListItem>CMS</ListItem>
          </List>

          <SelectButton>Select</SelectButton>
        </Card>
      ),
    },
    {
      key: 3,
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Start</CardTitle>

            <Price>
              <PriceTitle>from</PriceTitle>
              <PriceContainer>
                <OldPrice>499$</OldPrice>
                <NewPrice>299$</NewPrice>
              </PriceContainer>
            </Price>

            <TopDescription>Free support for the first month</TopDescription>
          </CardHeader>

          <CardBody>
            <List>
              <ListItem>Optimized Website</ListItem>
              <ListItem>RWD</ListItem>
              <ListItem>Server</ListItem>
              <ListItem>Domain</ListItem>
            </List>
            <SelectButton>Select</SelectButton>
          </CardBody>
        </Card>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <Container>
      <OfferContainer>
        <CardTitle>Check the offer</CardTitle>
        <CarouselContainer>
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            animationConfig={config.slow}
          />
        </CarouselContainer>
      </OfferContainer>
    </Container>
  );
};
