import { QuoteForm } from "components/quoteForm";

import { QuoteContainer } from "./quote.styles";
import { Container } from "theme/global-styles";

export const Quote = () => {
  return (
    <Container>
      <QuoteContainer>
        <QuoteForm />
      </QuoteContainer>
    </Container>
  );
};
