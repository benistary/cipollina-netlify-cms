import { createStitches } from "@stitches/react";

export const breakpoints = {
  xs: 0,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

const config = {
  media: {
    xs: `(max-width: ${breakpoints.xs}px)`,
    sm: `(max-width:  ${breakpoints.s}px)`,
    md: `(max-width:  ${breakpoints.m}px)`,
    lg: `(max-width:  ${breakpoints.l}px)`,
    xl: `(max-width:  ${breakpoints.xl}px)`,
    xsUp: `(min-width:  ${breakpoints.xs}px)`,
    smUp: `(min-width:  ${breakpoints.s + 1}px)`,
    mdUp: `(min-width: ${breakpoints.m + 1}px)`,
    lgUp: `(min-width: ${breakpoints.l + 1}px)`,
    xlUp: `(min-width: ${breakpoints.xl + 1}px)`,
  },
  theme: {
    fonts: {
      montserrat: "Montserrat",
      merriweather: "Merriweather",
      cormorantGaramond: "'Cormorant Garamond', serif",
      lato: "'Inter', sans-serif",
    },
    colors: {
      primary: "#BE312B",
      secondary: "#BE312B",
      error: "#F83F76",
      success: "#8AC94A",
      warning: "#FFBC3D",
      grey: "#787878",
      brightGrey: "#E3E3E3",
      lightGrey: "#C8C8C8",
      white: "#FFFFFF",
      black: "#2C2B2B",
      transparentWhite50: "#FFFFFF80",
      transparentWhite75: "#FFFFFF4B",
      transparentWhite90: "#FFFFFF5A",
      transparentWhite95: "rgb(255,255,255,0.95)",
      transparentGrey50: "#78787880",
      transparentBlack50: "rgba(0,0,0,0.5)",
    },
    fontSizes: {
      base: "18px",
      small: "16px",
      h1: "2.611111111111111rem", // 47px
      h2: "2.0555555555555554rem", // 37px
      h3: "1.6111111111111112rem", // 29px
      h4: "1.2777777777777777rem", // 23px
      h5: "1rem", // 18px
      h6: "0.7777777777777778rem", // 14px
    },
    fontWeights: {
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 700,
    },
    lineHeights: {
      base: "1.8125rem",
      h1: "4.4375rem", // 71px
      h2: "3.5625rem", // 57px
      h3: "2.8125rem", // 45px
      h4: "2.3125rem", // 37px
      h5: "1.8125rem", // 29px
      h6: "1.5rem", // 24x
    },
    space: {
      xxxsmall: "0.2222rem", // 4px
      xxsmall: "0.3889rem", // 7px
      xsmall: "0.6111rem", // 11px
      small: "1rem", // 18px
      default: "1.6111rem", // 29px
      large: "2.6111rem", // 47px
      contentSpacing: "2.6111rem", // 47px
    },
    radii: {
      infinite: "199950708px",
    },
    shadows: {
      plateAvatar: "0 0 0 1.5px #2C2B2B",
    },
    zIndices: {
      header: 100,
      scrollIndex: 101,
    },
  },
} as const;

export const {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  shadows,
  space,
  zIndices,
} = config.theme;

export const { styled, getCssText, css, globalCss, keyframes } =
  createStitches(config);
