import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { isMobile } from "theme/media";

import { Button } from "components/button";
import { Container } from "theme/global-styles";
import {
  ContactBarContainer,
  ContentContainer,
  ContentParagraph,
  ContentHeader,
  CtaContainer,
} from "./contactBar.styles";

export const ContactBar = () => {
  useEffect(() => {
    if (!isMobile()) {
      AOS.init();
    }
  }, []);
  return (
    <ContactBarContainer data-aos={!isMobile() && "fade-left"}>
      <Container>
        <ContentContainer>
          <ContentHeader>Request a free quote</ContentHeader>
          <ContentParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget risus commodo arcu sollicitudin dignissim. Praesent sed arcu
            elit. Nunc porta, lorem eu imperdiet tincidunt, leo diam sodales
            mauris, at ullamcorper massa quam a erat.
          </ContentParagraph>
          <CtaContainer>
            <Button secondary>Request a Quote</Button>
            <Button primary>Contact Us</Button>
          </CtaContainer>
        </ContentContainer>
      </Container>
    </ContactBarContainer>
  );
};
