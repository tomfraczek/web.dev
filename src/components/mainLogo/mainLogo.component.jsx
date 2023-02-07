import { Link } from "react-router-dom";

import { LogoContainer, LogoOne, LogoTwo, Logo } from "./mainLogo.styles";

export const MainLogo = ({ toggleMenu }) => {
  return (
    <LogoContainer>
      <Logo>
        <Link to="/" onClick={() => toggleMenu(false)}>
          <LogoOne>web</LogoOne>
          <LogoTwo>dev</LogoTwo>
        </Link>
      </Logo>
    </LogoContainer>
  );
};
