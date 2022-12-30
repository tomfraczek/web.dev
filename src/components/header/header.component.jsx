import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { isMobile } from "theme/media";
import { MAIN_NAVIGATION } from "theme/constants";

import { Button } from "components/button";
import { MainLogo } from "components/mainLogo";
import { SwitchLng } from "components/switchLng";
import { HamburgerMenu } from "components/hamburgerMenu";

import { HeaderComponent, MenuContainer, MenuItem } from "./header.styles";

import { Container } from "../../theme/global-styles";

export const Header = () => {
  const { t } = useTranslation();
  console.log(isMobile());
  return (
    <Container>
      <HeaderComponent>
        <MainLogo />
        {/* {!isMobile() && (
          <MenuContainer>
            {MAIN_NAVIGATION.map(({ title, url }) => (
              <MenuItem key={`${title}${url}`}>
                <Link to={url}>{title}</Link>
              </MenuItem>
            ))}
            <SwitchLng />
            <Button>{t("links.contact")}</Button>
          </MenuContainer>
        )} */}
        {/* <Button style={{ marginLeft: "auto", marginRight: "50px" }}>
          {t("links.contact")}
        </Button> */}
        <HamburgerMenu />
      </HeaderComponent>
    </Container>
  );
};
