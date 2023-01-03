import { TechnologiesContainer } from "./technologies.styles";
import { TECH_STACK } from "theme/constants";

import {
  Technology,
  IconsContainer,
  Icon,
  DescriptionContainer,
  Description,
  Title,
} from "./technologies.styles";
import { Container } from "theme/global-styles";

export const Technologies = () => {
  return (
    <Container>
      <TechnologiesContainer>
        {TECH_STACK.map(({ icons, title, description }) => (
          <Technology key={title}>
            <Title>{title}</Title>

            <DescriptionContainer>
              <Description>{description}</Description>
            </DescriptionContainer>

            <IconsContainer>
              {icons.map((icon) => (
                <Icon src={icon} />
              ))}
            </IconsContainer>
          </Technology>
        ))}
      </TechnologiesContainer>
    </Container>
  );
};
