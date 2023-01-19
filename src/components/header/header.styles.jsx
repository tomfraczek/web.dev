import styled from "styled-components";
import { device } from "theme/media";

export const HeaderComponent = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 111;
  width: calc(100% - 24px); /* left: 12px;
  right: 12px; */
  /* @media ${device.tablet} {
    width: 720px;
  }
  @media ${device.laptop} {
    width: 1385px;
  }

  @media ${device.desktop} {
    width: 1600px;
  } */
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
