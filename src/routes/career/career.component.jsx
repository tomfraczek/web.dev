import { Container } from "theme/global-styles";
import { HighlightRed } from "theme/media";

import careerImage from "./img/career.jpg";
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

import clock from "routes/career/img/clock.jpg";
import code1 from "routes/career/img/code1.jpg";
import code2 from "routes/career/img/code2.jpg";
import dashboard from "routes/career/img/dashboard.jpg";
import design1 from "routes/career/img/design1.jpg";
import design2 from "routes/career/img/design2.jpg";
import feedback from "routes/career/img/feedback.jpg";
import feedback2 from "routes/career/img/feedback2.jpg";
import feedback3 from "routes/career/img/feedback3.jpg";
import fireworks1 from "routes/career/img/fireworks1.jpg";
import fireworks2 from "routes/career/img/fireworks2.jpg";
import fireworks3 from "routes/career/img/fireworks3.jpg";
import fireworks4 from "routes/career/img/fireworks4.jpg";
import laptop1 from "routes/career/img/laptop1.jpg";
import laptop2 from "routes/career/img/laptop2.jpg";
import laptop3 from "routes/career/img/laptop3.jpg";
import laptop4 from "routes/career/img/laptop4.jpg";
import meeting1 from "routes/career/img/meeting1.jpg";
import meeting2 from "routes/career/img/meeting2.jpg";
import meeting3 from "routes/career/img/meeting3.jpg";
import meeting4 from "routes/career/img/meeting4.jpg";
import meeting5 from "routes/career/img/meeting5.jpg";
import meeting6 from "routes/career/img/meeting6.jpg";
import meetingDashboard from "routes/career/img/meetingDashboard.jpg";
import time from "routes/career/img/time.jpg";

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
