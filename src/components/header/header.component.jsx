import { Link } from "react-router-dom";
import { isMobile } from "../../theme/media";

import { Button } from "../button";
import { MainLogo } from "../mainLogo";

import { HeaderComponent, MenuContainer, MenuItem } from "./header.styles";

import { Container } from "../../theme/global-styles";

const HEADER_NAVIGATION = [
  {
    title: "Home",
    url: "/",
  },
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
            <Button>Contact Us</Button>
          </MenuContainer>
        )}
      </HeaderComponent>
    </Container>
  );
};
