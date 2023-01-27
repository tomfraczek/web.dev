import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { isMobile } from "theme/media";

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
      "Setting up a website hosting and server is crucial for making your website accessible to the public. A web hosting service provides the server space and resources needed to store and manage your website files. Our team can help you choose the right hosting plan that fits your website's needs, whether it's shared hosting, virtual private servers (VPS), or a dedicated server.",
    icon: Settings,
  },
  {
    title: "Hosting",
    description:
      "Choosing the right hosting plan for your website is important for ensuring that it has the necessary resources to run smoothly and efficiently, and that it can handle any potential traffic. Our team can help you evaluate your website's needs and recommend the appropriate hosting plan for you, and will also help you with the setup and configuration of your hosting account and server, to make sure that your website is up and running with minimal downtime.",
    icon: Upload,
  },
  {
    title: "UX Design",
    description:
      "Providing exceptional user experience (UX) design is a crucial aspect of our website development process. Our team of experienced designers work closely with our clients to understand their target audience and business goals, and use this information to create a website that is not only visually appealing, but also intuitive and easy to navigate.",
    icon: Upload,
  },
  {
    title: "Optimisation",
    description:
      "Optimized and fast websites is a top priority for our team. We understand the importance of website speed and performance in providing a positive user experience and achieving higher search engine rankings. We employ various techniques such as minification, compression, and caching to optimize the website's code and reduce its load time.",
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
  useEffect(() => {
    if (!isMobile()) {
      AOS.init();
    }
  }, []);
  return (
    <Container data-aos={!isMobile() && "fade-left"}>
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
