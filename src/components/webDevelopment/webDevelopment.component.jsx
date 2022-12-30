import { MainLogo } from "components/mainLogo";

import Responsive from "./img/responsive.gif";
import Earth from "./img/earth.gif";
import Settings from "./img/settings.gif";
import Upload from "./img/upload.gif";

import {
  WebDevConteiner,
  Header,
  ContentContainer,
  DevCard,
  TechIconContainer,
  TechIcon,
  Title,
  DescriptionContainer,
  Description,
} from "./webDevelopmnent.styles";
import { Highlighted } from "components/offerCards/offerCards.styles";
import { Container } from "theme/global-styles";

const CONTENT = [
  {
    title: "RWD",
    description:
      "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.",
    icon: Responsive,
  },
  {
    title: "Internationalization",
    description:
      "Internationalization is the process of designing a software application so that it can be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by translating text and adding locale-specific components.",
    icon: Earth,
  },
  {
    title: "Setup",
    description:
      "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.",
    icon: Settings,
  },
  {
    title: "Hosting",
    description:
      "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.",
    icon: Upload,
  },
  {
    title: "UX Design",
    description:
      "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.",
    icon: Upload,
  },
  {
    title: "Speed",
    description:
      "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.",
    icon: Upload,
  },
  // {
  //   title: "Maintenence",
  //   description:
  //     "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.",
  //   icon: Upload,
  // },
  // {
  //   title: "Optymization",
  //   description:
  //     "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.",
  //   icon: Upload,
  // },
];

export const WebDevelopment = () => {
  return (
    <Container>
      <WebDevConteiner>
        <Header>
          web
          <Highlighted>dev</Highlighted>
          elopment
        </Header>

        <ContentContainer>
          {CONTENT.map(({ title, description, icon }) => (
            <DevCard key={title}>
              <TechIconContainer>
                <TechIcon src={icon} />
              </TechIconContainer>

              <Title>{title}</Title>

              <DescriptionContainer>
                <Description>{description}</Description>
              </DescriptionContainer>
            </DevCard>
          ))}
        </ContentContainer>
      </WebDevConteiner>
    </Container>
  );
};
