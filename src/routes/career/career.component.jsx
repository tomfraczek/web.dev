import { Container } from "theme/global-styles";
import { HighlightRed } from "theme/media";

import {
  CareerContainer,
  CareerHero,
  PageTitle,
  PageDescription,
  CareerContent,
  CareerImageContainer,
  CareerImage,
  CareerOffers,
  OffersTitle,
  JobDescription,
  Header,
  OfferContainer,
  OfferContent,
  MailTo,
} from "./career.styles";
import { Button } from "components/button";
import { Link } from "react-router-dom";

import meeting1 from "routes/career/img/meeting1.jpg";
export const Career = () => {
  return (
    <CareerContainer>
      <Container>
        <CareerHero>
          <CareerContent>
            <PageTitle>
              Your <HighlightRed>career</HighlightRed> at web
              <HighlightRed>dev</HighlightRed>
            </PageTitle>

            <PageDescription>
              We believe a great company is created by employing the best
              people.
            </PageDescription>
            <PageDescription>
              We advance skills and careers for our employees by providing
              professional development, training and qualifications. Our people
              are the beating heart of webdev, so we invest in their expertise.
              Open to all levels and across all technologies, we’ll support you
              to enhance your skills and career.
            </PageDescription>
          </CareerContent>
          <CareerImageContainer>
            <CareerImage src={meeting1} />
          </CareerImageContainer>
        </CareerHero>
      </Container>
      <OfferContainer>
        <Container>
          <OfferContent>
            <Header>Ready to work with us?</Header>
            <MailTo
              secondary
              href="mailto:tomfraczekdev@gmail.com?subject=Applying for Work"
              style={{ marginLeft: "30px" }}
            >
              Get in touch
            </MailTo>
          </OfferContent>
        </Container>
      </OfferContainer>
    </CareerContainer>
  );
};
