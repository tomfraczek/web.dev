import React, { useState, useEffect } from "react";
import cx from "classnames";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import styles from "./wordCarousel.module.scss";

export const WordCarousel = () => {
  const [current, setCurrent] = useState(0);

  const translations = [
    { text: "grow", alphabet: "latin" },
    { text: "build", alphabet: "latin" },
    { text: "host", alphabet: "latin" },
    { text: "maintain", alphabet: "latin" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % translations.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
              [styles["arabic"]]: translations[current].alphabet === "arabic",
              [styles["chinese"]]: translations[current].alphabet === "chinese",
            })}
          >
            {translations[current].text}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </span>
  );
};
