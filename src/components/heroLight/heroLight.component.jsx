import { Container } from "theme/global-styles";
import { HeroContainer } from "./heroLight.styles";

import { Header, Description } from "./heroLight.styles";

export const HeroLight = () => {
  return (
    <Container>
      <HeroContainer>
        <Header>webdev for People Who Dream</Header>
        <Description>
          At webdev, we enrich businesses through exceptional designs by making
          world-class website accessible to all. 
        </Description>
      </HeroContainer>
    </Container>
  );
};
