import { useState, useEffect, useRef } from "react";
import cx from "classnames";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";

import styles from "./wordCarousel.module.scss";

export const WordCarousel = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const nodeRef = useRef(null);

  const words = [
    { text: t("word_carousel.grow"), alphabet: "latin" },
    { text: t("word_carousel.build"), alphabet: "latin" },
    { text: t("word_carousel.host"), alphabet: "latin" },
    { text: t("word_carousel.maintain"), alphabet: "latin" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % words.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [words.length]);

  return (
    <span className={styles.root}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={current}
          timeout={300}
          classNames={{
            enter: styles["slide-enter"],
            enterActive: styles["slide-enter-active"],
            exit: styles["slide-exit"],
            exitActive: styles["slide-exit-active"],
          }}
        >
          <div
            className={cx({
              [styles["arabic"]]: words[current].alphabet === "arabic",
              [styles["chinese"]]: words[current].alphabet === "chinese",
            })}
          >
            {words[current].text}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </span>
  );
};
