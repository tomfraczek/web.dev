import { useEffect } from "react";
import { Link } from "react-router-dom";

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
  return (
    <ContactBarContainer>
      <Container>
        <ContentContainer>
          <ContentHeader>Request a free quote</ContentHeader>
          <ContentParagraph>
            If you're interested in receiving a free quote for a product or
            service, one option is to fill out a form or contact us via contact
            form.
          </ContentParagraph>
          <ContentParagraph>
            It's important to provide accurate and complete information so that
            the company can provide an accurate quote. Once you've submitted the
            form, a representative from the company should contact you with the
            quote, usually within 24 to 48 hours.
          </ContentParagraph>
          <CtaContainer>
            <Button
              style={{ marginRight: "15px" }}
              as={Link}
              to="/quote"
              secondary
            >
              Request a Quote
            </Button>
            <Button as={Link} to="/contact" primary>
              Contact Us
            </Button>
          </CtaContainer>
        </ContentContainer>
      </Container>
    </ContactBarContainer>
  );
};
