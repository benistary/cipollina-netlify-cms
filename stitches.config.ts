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
      lato: "'Ubuntu', sans-serif",
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
      mobile: "16px",
      h1: "2.488rem", // 44.79px
      h2: "2.074rem", // 37.32px
      h3: "1.728rem", // 31.10px
      h4: "1.44rem", // 25.92px
      h5: "1.2rem", // 21.60px
      h6: "1rem", // 18.00px
      small: "0.833rem", // 15.00px
    },
    fontWeights: {
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 700,
    },
    lineHeights: {
      base: "1.5", //24px
      h1: "1.5", // 48px
      h2: "1.5", // 44px
      h3: "1.5", // 36px
      h4: "1.5", // 32px
      h5: "1.5", // 28px
      h6: "1.5", // 24px
    },
    space: {
      xsmall: "0.2222rem", // 4px
      small: "0.4444rem", // 8px
      default: "0.8889rem", // 16px
      large: "1.3333rem", // 24px
      xlarge: "1.7778rem", // 32px
      xxlarge: "2.2222rem", // 40px
      xxxlarge: "2.6667rem", // 48px
      contentSpacing: "1.3333rem", // 24px
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
