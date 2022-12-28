import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { isMobile } from "theme/media";

import { Button } from "../button";
import { MainLogo } from "../mainLogo";
import { SwitchLng } from "../switchLng";

import { HeaderComponent, MenuContainer, MenuItem } from "./header.styles";

import { Container } from "../../theme/global-styles";

const HEADER_NAVIGATION = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Offer",
    url: "/offer",
  },
];

export const Header = () => {
  const { t } = useTranslation();
  console.log(isMobile());
  return (
    <Container>
      <HeaderComponent>
        <MainLogo />
        {!isMobile() && (
          <MenuContainer>
            {HEADER_NAVIGATION.map(({ title, url }) => (
              <MenuItem key={`${title}${url}`}>
                <Link to={url}>{title}</Link>
              </MenuItem>
            ))}
            <SwitchLng />
            <Button>{t("links.contact")}</Button>
          </MenuContainer>
        )}
      </HeaderComponent>
    </Container>
  );
};
