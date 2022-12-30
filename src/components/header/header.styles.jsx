import styled from "styled-components";

export const HeaderComponent = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
