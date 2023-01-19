import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation, Trans } from "react-i18next";

import { Button } from "../button/button.component";
import { WordCarousel } from "../wordCarousel";

import HeroImage from "./img/heroImage.png";

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
import { Container } from "theme/global-styles";
import { isMobile } from "theme/media";

export const Hero = () => {
  const { t } = useTranslation();
  useEffect(() => {
    if (!isMobile()) {
      AOS.init();
    }
  }, []);
  return (
    <Container data-aos={!isMobile() && "fade-right"}>
      <HeroContainer>
        <ContentContainer>
          <ContentHeader>
            <Trans components={{ highlight: <BlueHighlight /> }}>
              hero.header.part1
            </Trans>
            <WordCarousel />
            {t("hero.header.part2")}
          </ContentHeader>
          <ContentDescription>{t("hero.description")}</ContentDescription>
          <CtaContainer>
            <Button secondary>{t("links.check_offer")}</Button>
            <Button>{t("links.contact")}</Button>
          </CtaContainer>
        </ContentContainer>

        <ImageContainer>
          <Image src={HeroImage} />
        </ImageContainer>
      </HeroContainer>
    </Container>
  );
};
