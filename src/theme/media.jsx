// import { complement, isNil, reverse } from "ramda";
// import { css } from "styled-components";

// export const Breakpoint = {
//   MOBILE: "MOBILE",
//   TABLET: "TABLET",
//   DESKTOP: "DESKTOP",
//   DESKTOP_WIDE: "DESKTOP_WIDE",
//   DESKTOP_FULL: "DESKTOP_FULL",
// };

// export const sizes = {
//   [Breakpoint.DESKTOP_FULL]: 1920,
//   [Breakpoint.DESKTOP_WIDE]: 1440,
//   [Breakpoint.DESKTOP]: 1280,
//   [Breakpoint.TABLET]: 768,
//   [Breakpoint.MOBILE]: 360,
// };

const getWindowWidth = () => window.innerWidth;

// export const media = (breakpoint, opts) => {
//   return (styleTemplate, ...interpolations) => {
//     const joinQuery = (...queries) =>
//       queries.filter(complement(isNil)).join(" and ");

//     const sizeQuery = `(min-width: ${sizes[breakpoint]}px)`;
//     const landscapeQuery = opts.landscape ? "(orientation: landscape)" : null;
//     const retinaQueries = opts.retina
//       ? ["(-webkit-min-device-pixel-ratio: 2)", "(min-resolution: 192dpi)"]
//       : null;

//     let query;
//     if (retinaQueries) {
//       query = retinaQueries
//         .map((retinaQuery) => joinQuery(sizeQuery, landscapeQuery, retinaQuery))
//         .join(", ");
//     } else {
//       query = joinQuery(sizeQuery, landscapeQuery);
//     }

//     return css`
//       @media ${query} {
//         ${css(styleTemplate, ...interpolations)}
//       }
//     `;
//   };
// };

// $tablet-width: 720px;
// $laptop-width: 940px;
// $desktop-width: 1140px;

// $tablet-breakpoint: 768px;
// $laptop-breakpoint: 992px;
// $desktop-breakpoint: 1200px;

const size = {
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

export const isMobile = () => {
  const width = getWindowWidth();
  console.log(width, size.tablet);
  return width < size.tablet;
};

export const isTablet = () => {
  const width = getWindowWidth();
  return width >= size.tablet && width < size.desktop;
};

export const isDesktop = () => {
  const width = getWindowWidth();
  return width >= size.desktop;
};

export const width = {
  tablet: "768px",
  laptop: "940px",
  desktop: "1140px",
};

export const device = {
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};
