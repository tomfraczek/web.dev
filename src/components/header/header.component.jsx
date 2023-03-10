import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll } from "framer-motion";

import { size, isMobile } from "theme/media";
import { MAIN_NAVIGATION } from "theme/constants";

import { Button } from "components/button";
import { MainLogo } from "components/mainLogo";
import { SwitchLng } from "components/switchLng";
import { HamburgerMenu } from "components/hamburgerMenu";

import { HeaderComponent, HeaderContent } from "./header.styles";

import { Container } from "../../theme/global-styles";

const width = window.innerWidth;

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  };

  return (
    <Container>
      <HeaderComponent
        as={motion.nav}
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <HeaderContent>
          <MainLogo />
          <HamburgerMenu />
        </HeaderContent>
      </HeaderComponent>
    </Container>
  );
};
