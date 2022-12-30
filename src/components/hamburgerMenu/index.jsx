import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { NavMenu } from "./navMenu";

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const menuVariants = {
  open: {
    transform: "translateX(0%)",
  },
  closed: {
    transform: "translateX(100%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const BackgroundContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  overflow: hidden;
  z-index: -1;
`;

export function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <>
      <BackgroundContainer
        style={{ zIndex: isOpen ? 10 : -1 }}
        isOpen={isOpen}
      />
      <HamburgerMenuContainer>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <MenuContainer
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={menuTransition}
        >
          <ContentContainer>
            <NavMenu isOpen={isOpen} setOpen={setOpen} />
          </ContentContainer>
        </MenuContainer>
      </HamburgerMenuContainer>
    </>
  );
}
