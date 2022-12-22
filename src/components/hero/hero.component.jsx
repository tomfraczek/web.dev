import { Button } from "../button/button.component";
import { WordCarousel } from "../wordCarousel";

import HeroImage from "./img/heroimage.png";

import {
  HeroContainer,
  ContentContainer,
  ContentHeader,
  ContentDescription,
  CtaContainer,
  ImageContainer,
  Image,
  BlueHighlight,
} from "./hero.styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <ContentHeader>
          We can help <br /> <BlueHighlight>you</BlueHighlight> <WordCarousel />
          <br />
          your website
        </ContentHeader>
        <ContentDescription>
          Storyblok is the headless content management system that empowers
          99,000 + developers and content teams to create better content
          experiences across any digital channel.
        </ContentDescription>
        <CtaContainer>
          <Button secondary>Check the Offer</Button>
          <Button>Contact Us</Button>
        </CtaContainer>
      </ContentContainer>

      <ImageContainer>
        <Image src={HeroImage} />
      </ImageContainer>
    </HeroContainer>
  );
};
