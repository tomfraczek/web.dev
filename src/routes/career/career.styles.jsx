import styled from "styled-components";
import { color } from "theme";
import { logoBlue } from "theme/color";
import { heading1, heading2, paragraph1 } from "theme/typography";
import { Button } from "components/button";

export const CareerContainer = styled.div``;

export const CareerHero = styled.div`
  margin-top: 250px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CareerContent = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h2`
  ${heading2}
`;

export const PageDescription = styled.p`
  ${paragraph1}
  margin-top:40px;
`;

export const CareerImageContainer = styled.div`
  flex-basis: 60%;
`;

export const CareerImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const CareerOffers = styled.div`
  margin-top: 150px;
`;

export const OffersTitle = styled(PageTitle)`
  text-align: center;
`;

export const JobDescription = styled(PageDescription)`
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.h1`
  ${heading2}
  display: flex;
  color: ${color.white};
  /* font-size: 38px; */
`;

export const OfferContainer = styled.div`
  background: ${logoBlue};
`;

export const OfferContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
`;

export const MailTo = styled.a`
  padding: 9px 40px;
  font-size: 1.063rem;
  background: ${(props) => (props.secondary ? color.logoRed : color.lightBlue)};
  color: ${color.white};
  border-radius: 5px;
  box-shadow: 0 6px 13px 2px rgb(0 0 0 / 11%);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;
