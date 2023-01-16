import styled from "styled-components";
import { device } from "theme/media";

export const HeaderComponent = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  position: fixed;
  top: 0;
  z-index: 111;

  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.laptop} {
    max-width: 1385px;
  }

  @media ${device.desktop} {
    max-width: 1600px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    &:hover {
      color: #457b9d;
    }
  }
`;

export const MenuItem = styled.span`
  margin-right: 3rem;
`;
