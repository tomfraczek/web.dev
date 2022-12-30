import { Button } from "components/button";
import { Container } from "theme/global-styles";
import {
  ContactBarContainer,
  ContentContainer,
  ContentParagraph,
  ContentHeader,
} from "./contactBar.styles";

export const ContactBar = () => {
  return (
    <ContactBarContainer>
      <Container>
        <ContentContainer>
          <ContentHeader>Request a free quote</ContentHeader>
          <ContentParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget risus commodo arcu sollicitudin dignissim. Praesent sed arcu
            elit. Nunc porta, lorem eu imperdiet tincidunt, leo diam sodales
            mauris, at ullamcorper massa quam a erat.
          </ContentParagraph>
          <Button secondary>Request a Quote</Button>
        </ContentContainer>
      </Container>
    </ContactBarContainer>
  );
};
