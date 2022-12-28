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

export const Hero = () => {
  const { t } = useTranslation();
  return (
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
  );
};
