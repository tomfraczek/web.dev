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
            Website support and maintenance is essential to ensure that your
            website stays up-to-date, secure, and fully functional. Our team
            offers a range of support and maintenance services to help you keep
            your website running smoothly. This includes regular updates and
            backups, security monitoring, and performance optimization. We also
            offer troubleshooting and bug fixing services to address any issues
            that may arise. Additionally, we can provide training and support
            for content updates, so you can easily make changes to your website.
            Regular maintenance and support will help ensure that your website
            is always performing at its best, and that it stays secure from any
            potential threats.
          </Description>
        </ContentContainer>
        <ImageContainer>
          <Image src={ImageSupport} />
        </ImageContainer>
      </SupportContainer>
    </Container>
  );
};
