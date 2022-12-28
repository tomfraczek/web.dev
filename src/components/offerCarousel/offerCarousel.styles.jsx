import styled from "styled-components";
import { Button } from "components/button";
import { color } from "theme";

export const OfferCardBackground = styled.div`
  background-color: ${color.darkBlue};
  padding: 200px 0;
  padding-top: 50px;
  margin-top: 10rem;
`;

export const OfferContainer = styled.div`
  margin-top: 10rem;
`;

export const CarouselContainer = styled.div`
  width: 80%;
  height: 500px;
  margin: 6rem auto 0;

  * {
    opacity: 1 !important;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.25rem;
  width: 300px;
  height: 500px;
  background-color: ${color.white};
  border: 0 solid ${color.darkBlue};
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);

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
`;

export const TopDescription = styled.p`
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
`;

export const List = styled.ul`
  margin-top: 2rem;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;

export const Medal = styled.img`
  position: absolute;
  width: 24px;
  right: 2rem;
  top: 2.5rem;
`;

export const SelectButton = styled(Button)`
  margin-top: auto;
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
  color: ${color.logoBlue};
  font-size: 36px;

  position: relative;
  top: 6px;
`;

export const PriceTitle = styled.div`
  margin-right: 1rem;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding: 1.5rem;
`;

export const CardBody = styled.div`
  padding: 2rem;
`;
