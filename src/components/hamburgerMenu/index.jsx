import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { device } from "theme/media";
import { MenuToggle } from "./menuToggle.component";
import { NavMenu } from "./navMenu.component";
import { OverlayContext } from "theme/context";
import { useContext } from "react";

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  overflow-y: scroll;
  overflow-x: hidden;

  @media ${device.mobileL} {
    max-width: 60%;
  }

  @media ${device.laptop} {
    max-width: 55%;
  }

  @media ${device.laptopL} {
    max-width: 44%;
  }
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
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  overflow: hidden;
  z-index: -1;
`;

const useOutsideAlerter = (ref, setOpen) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);
  const { value, setValue } = useContext(OverlayContext);

  const toggleMenu = () => {
    setValue(!isOpen);
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <>
      <HamburgerMenuContainer ref={wrapperRef}>
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
