import { Link } from "react-router-dom";

import {
  HeaderComponent,
  LogoContainer,
  Logo,
  MenuContainer,
  MenuItem,
} from "./header.styles";

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
  {
    title: "Contact",
    url: "/contact",
  },
];

export const Header = () => {
  return (
    <HeaderComponent>
      <LogoContainer>
        <Logo>web.dev</Logo>
      </LogoContainer>

      <MenuContainer>
        {HEADER_NAVIGATION.map(({ title, url }) => (
          <MenuItem>
            <Link to={url}>{title}</Link>
          </MenuItem>
        ))}
      </MenuContainer>
    </HeaderComponent>
  );
};
