import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { isMobile } from "theme/media";

import { Highlighted } from "components/offerCards/offerCards.styles";
import { Container } from "theme/global-styles";
import ImageSupport from "./img/support.jpg";

import {
  SupportContainer,
  ContentContainer,
  Header,
  Description,
  ImageContainer,
  Image,
  SupportHeader,
} from "./support.styles";

export const Support = () => {
  useEffect(() => {
    if (!isMobile()) {
      AOS.init();
    }
  }, []);
  return (
    <Container data-aos={!isMobile() && "fade-right"}>
      <SupportHeader>
        Support<Highlighted>&</Highlighted>Maintenence
      </SupportHeader>
      <SupportContainer>
        <ContentContainer>
          <Header>
            Post<Highlighted>Production</Highlighted>Support
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            efficitur imperdiet congue. Praesent id eros purus. Quisque dictum
            ornare nibh eu scelerisque. Aliquam lacinia, sem ac aliquam posuere,
            sapien tellus aliquam diam, in imperdiet nunc orci sit amet turpis.
            Maecenas enim mi, posuere sed mauris et, pharetra varius neque.
          </Description>
        </ContentContainer>
        <ImageContainer>
          <Image src={ImageSupport} />
        </ImageContainer>
      </SupportContainer>
    </Container>
  );
};
