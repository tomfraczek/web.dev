import { MainLogo } from "components/mainLogo";
import { Link } from "react-router-dom";
import { Container } from "theme/global-styles";
import {
  FooterContainer,
  Copyright,
  MenuContainer,
  MenuItem,
  LogoContainer,
  Logo,
  Highlighted,
} from "./footer.styles";

const NAVIGATION = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Offer",
    url: "/offer",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <Logo>
            web<Highlighted>dev</Highlighted>
          </Logo>
        </LogoContainer>

        <MenuContainer>
          {NAVIGATION.map(({ title, url }) => (
            <MenuItem key={`${title}${url}`}>
              <Link to={url}>{title}</Link>
            </MenuItem>
          ))}
        </MenuContainer>
        <Copyright>&copy; Copyright 2023</Copyright>
      </Container>
    </FooterContainer>
  );
};
