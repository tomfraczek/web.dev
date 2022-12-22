import { Link } from "react-router-dom";

import { LogoContainer, LogoOne, LogoTwo, Logo } from "./mainLogo.styles";

export const MainLogo = () => {
  return (
    <LogoContainer>
      <Logo>
        <Link to="/">
          <LogoOne>web</LogoOne>
          <LogoTwo>dev</LogoTwo>
        </Link>
      </Logo>
    </LogoContainer>
  );
};
