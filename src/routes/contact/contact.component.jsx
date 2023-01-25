import React from "react";
import { Container } from "theme/global-styles";

import {
  ContactContainer,
  ContactContent,
  ImageContainer,
  Image,
  DescriptionContainer,
  Description,
  FormContainer,
} from "./contact.styles";

import hero from "routes/contact/img/contact.jpg";

export const Contact = () => {
  return (
    <ContactContainer>
      <Container>
        <ContactContent>
          <ImageContainer>
            <Image src={hero} />
          </ImageContainer>

          <DescriptionContainer>
            <Description></Description>
          </DescriptionContainer>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
};
