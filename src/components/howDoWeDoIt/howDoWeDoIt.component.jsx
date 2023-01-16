import { HOW_WE_DO_IT_CARDS } from "components/carousel/carousel.constants";
import { Container } from "theme/global-styles";
import { Highlighted } from "components/offerCards/offerCards.styles";

import {
  CardsContainer,
  SampleCard,
  StepImage,
  CardContent,
  Title,
  Subtitle,
  Description,
  CarouselHeader,
} from "./howDoWeDoIt.styles";

export const HowDoWeDoIt = () => {
  return (
    <Container>
      <CardsContainer>
        <CarouselHeader>
          how<Highlighted>do</Highlighted>we<Highlighted>do</Highlighted>it
        </CarouselHeader>
        {HOW_WE_DO_IT_CARDS.map(
          ({ title, description, image, subtitle }, i) => (
            <SampleCard key={`${title}-${i}`}>
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
    </Container>
  );
};
