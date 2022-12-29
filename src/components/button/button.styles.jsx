import styled from "styled-components";
import { color } from "../../theme";

export const ButtonContainer = styled.span`
  padding: 9px 40px;
  font-size: 1.063rem;
  background: ${(props) => (props.secondary ? color.logoRed : color.lightBlue)};
  color: ${color.white};
  border-radius: 5px;
  box-shadow: 0 6px 13px 2px rgb(0 0 0 / 11%);
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    outline-color: ${color.logoBlue};
    transform: translateY(-2px);
    box-shadow: 0 6px 13px 2px rgb(0 0 0 / 25%);
  }
`;
