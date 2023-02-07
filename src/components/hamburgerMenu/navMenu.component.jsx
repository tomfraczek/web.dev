import { MainLogo } from "components/mainLogo";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "theme";
import { useTranslation } from "react-i18next";
import { OFFERS } from "components/offerCards/offerCards.constants";
import { MAIN_NAVIGATION, LNGS } from "./navMenu.constants";
import { device } from "theme/media";

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const NavigationHeader = styled(motion.div)`
  height: 60px;
`;

const NavigationBody = styled.div`
  border-top: 1px solid ${color.darkBlue};
  margin-top: 4rem;
  padding-top: 16px;
  width: 250px;
  margin-right: 4rem;
`;

const Subheader = styled(motion.h4)`
  line-height: 155%;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuContainerSmall = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuItem = styled(motion.span)`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 15px;

  &:last-of-type {
    color: ${color.logoRed};
  }
`;

const MenuSmall = styled(motion.span)`
  line-height: 160%;
  letter-spacing: 1px;
  width: 50%;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const NavigationContainerSmall = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountryIcon = styled(motion.img)`
  width: 24px;
  height: 24px;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export function NavMenu({ isOpen, toggleMenu }) {
  const { i18n } = useTranslation();
  const { resolvedLanguage } = i18n;
  return (
    <NavMenuContainer>
      <NavigationContainer>
        <NavigationHeader
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0, duration: 0.5 },
            },
          }}
        >
          <MainLogo toggleMenu={toggleMenu} />
        </NavigationHeader>
        <BodyContainer>
          <NavigationBody>
            <Subheader
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={{
                show: {
                  ...variants.show,
                  transition: { delay: 0.8, duration: 0.2 },
                },
                hide: {
                  ...variants.hide,
                  transition: { delay: 0, duration: 0.5 },
                },
              }}
            >
              navigation
            </Subheader>
            <MenuContainer>
              {MAIN_NAVIGATION.map(({ title, url }, i) => (
                <MenuItem
                  initial={false}
                  animate={isOpen ? "show" : "hide"}
                  variants={{
                    show: {
                      ...variants.show,
                      transition: { delay: i * 0.2, duration: 0.2 },
                    },
                    hide: {
                      ...variants.hide,
                      transition: { delay: 0, duration: 0.5 },
                    },
                  }}
                  key={`${title}${url}`}
                >
                  <Link to={url} onClick={() => toggleMenu(false)}>
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </NavigationBody>

          <NavigationContainerSmall>
            <NavigationBody>
              <Subheader
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.8, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0, duration: 0.5 },
                  },
                }}
              >
                offers
              </Subheader>
              <MenuContainerSmall>
                {OFFERS.map(({ title, url }) => (
                  <MenuSmall
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                      show: {
                        ...variants.show,
                        transition: { delay: 0.8, duration: 0.2 },
                      },
                      hide: {
                        ...variants.hide,
                        transition: { delay: 0, duration: 0.5 },
                      },
                    }}
                    key={`${title}${url}`}
                  >
                    <Link to={url}>{title}</Link>
                  </MenuSmall>
                ))}
              </MenuContainerSmall>
            </NavigationBody>

            <NavigationBody>
              <Subheader>languages</Subheader>
              <MenuContainerSmall>
                {LNGS.map(
                  ({ nativeName, code, icon }) =>
                    code !== resolvedLanguage && (
                      <CountryIcon
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={{
                          show: {
                            ...variants.show,
                            transition: { delay: 0.8, duration: 0.2 },
                          },
                          hide: {
                            ...variants.hide,
                            transition: { delay: 0, duration: 0.5 },
                          },
                        }}
                        key={nativeName}
                        src={icon}
                        alt={nativeName}
                        onClick={() => i18n.changeLanguage(code)}
                      />
                    )
                )}
              </MenuContainerSmall>
            </NavigationBody>
          </NavigationContainerSmall>
        </BodyContainer>
      </NavigationContainer>
    </NavMenuContainer>
  );
}
