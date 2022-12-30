import styled from "styled-components";
import { color } from "theme";
import { device } from "theme/media";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0 0%;
  margin: 0 12px 16px;
  position: relative;
  border-radius: 0.25rem;
  height: 500px;
  background-color: ${color.white};
  border: 0 solid ${color.darkBlue};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  width: 100%;

  &:first-of-type {
    @media ${device.tablet} {
      margin-left: 0;
    }
  }

  &:last-of-type {
    @media ${device.tablet} {
      margin-right: 0;
    }
  }

  &:hover {
    cursor: pointer;
  }

  span {
    text-align: center;
  }
`;

export const CardTitle = styled.h3`
  color: ${color.logoBlue};
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const TopDescription = styled.p`
  margin-bottom: 1rem;
`;

export const Price = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: center;

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 1rem;
  font-weight: 600;
  color: ${color.logoBlue};
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }
`;

export const Medal = styled.img`
  position: absolute;
  width: 24px;
  right: 2rem;
  top: 2.5rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const OldPrice = styled.p`
  text-decoration-line: line-through;
  color: ${color.logoBlue};
  font-size: 16px;
  margin-right: 0.5rem;
`;

export const NewPrice = styled.p`
  color: ${color.logoRed};
  font-size: 36px;
  font-weight: 600;
  position: relative;
  top: 6px;
`;

export const PriceTitle = styled.div`
  margin-right: 1rem;
  color: ${color.logoBlue};
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid ${color.lightGray};
  padding: 1.5rem;
`;

export const CardBody = styled.div`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Recommmended = styled.img`
  margin-right: 7px;
  width: 24px;
`;

export const AwardContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${color.darkGray};
  font-style: italic;
  justify-content: center;
`;
