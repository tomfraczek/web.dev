import styled from "styled-components";
import { color } from "theme";
import { lightBlue } from "theme/color";

export const FooterContainer = styled.div`
  background: ${color.logoBlue};
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-evenly;
  padding: 2rem 0 1rem 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Copyright = styled.p`
  text-align: center;
  color: ${color.white};
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  a {
    color: ${color.white};
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 3px;
    &:hover {
      color: ${color.logoBlue};
    }
  }
`;

export const MenuItem = styled.span`
  margin-right: 3rem;
`;

export const LogoContainer = styled.div`
  /* justify-self: center; */
`;

export const Logo = styled.h1`
  color: ${color.white};
`;

export const Highlighted = styled.span`
  color: ${color.lightBlue};
`;
