import { Button } from "components/button";

import Rocket from "components/offerCards/img/rocket.png";

import {
  Card,
  CardTitle,
  List,
  ListItem,
  TopDescription,
  Price,
  OldPrice,
  NewPrice,
  PriceContainer,
  PriceTitle,
  CardHeader,
  CardBody,
  Recommmended,
  AwardContainer,
  CrossedItem,
} from "./offerCard.styles";

export const OfferCard = ({
  title,
  oldPrice,
  newPrice,
  headDescription,
  items,
  recommmended,
  handleOpen,
  index,
}) => {
  return (
    <Card onClick={handleOpen}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <Price>
          <PriceTitle>from</PriceTitle>
          <PriceContainer>
            <OldPrice>{oldPrice}$</OldPrice>
            <NewPrice>{newPrice}$</NewPrice>
          </PriceContainer>
        </Price>

        {/* <TopDescription>{headDescription}</TopDescription> */}
      </CardHeader>

      <CardBody>
        <List>
          {Object.entries(items).map(([key, value]) => (
            <ListItem key={key}>{key}</ListItem>
          ))}
        </List>

        {recommmended && (
          <AwardContainer>
            <Recommmended src={Rocket} />
            For a Quick Start
          </AwardContainer>
        )}

        <span onClick={handleOpen}>More information</span>
      </CardBody>
    </Card>
  );
};
