import { Button } from "components/button";

import Medal1 from "components/offerCards/img/medal.png";
import Medal2 from "components/offerCards/img/medal2.png";
import Cyborg from "components/offerCards/img/cyborg.png";
import Shapes from "components/offerCards/img/shapes.png";
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
} from "./offerCard.styles";

export const OfferCard = ({
  title,
  oldPrice,
  newPrice,
  headDescription,
  items,
  recommmended,
}) => {
  return (
    <Card>
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
          {items.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>

        {recommmended && (
          <AwardContainer>
            <Recommmended src={Rocket} />
            For a Quick Start
          </AwardContainer>
        )}

        <Button>Select</Button>
      </CardBody>
    </Card>
  );
};
