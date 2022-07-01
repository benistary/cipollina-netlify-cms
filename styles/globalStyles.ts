import { globalCss, breakpoints } from "../stitches.config";

// @ts-ignore
const globalStyles = globalCss({
  // "@font-face": [
  //   {
  //     fontFamily: "$merriweather",
  //     src: "url(/fonts/Merriweather-Bold.woff2) format('woff2'), url(/fonts/Merriweather-Bold.woff) format('woff')",
  //     fontWeight: "$bold",
  //     fontStyle: "normal",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$merriweather",
  //     src: "url(/fonts/Merriweather-Regular.woff2) format('woff2'), url(/fonts/Merriweather-Regular.woff) format('woff')",
  //     fontWeight: "$regular",
  //     fontStyle: "normal",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$merriweather",
  //     src: "url(/fonts/Merriweather-Light.woff2) format('woff2'), url(/fonts/Merriweather-Light.woff) format('woff')",
  //     fontWeight: "$light",
  //     fontStyle: "normal",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$merriweather",
  //     src: "url(/fonts/Merriweather-Italic.woff2) format('woff2'), url(/fonts/Merriweather-Italic.woff) format('woff')",
  //     fontWeight: "$regular",
  //     fontStyle: "italic",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$montserrat",
  //     src: "url(/fonts/Montserrat-Bold.woff2) format('woff2'), url(/fonts/Montserrat-Bold.woff) format('woff')",
  //     fontWeight: "$bold",
  //     fontStyle: "normal",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$montserrat",
  //     src: "url(/fonts/Montserrat-SemiBold.woff2) format('woff2'), url(/fonts/Montserrat-SemiBold.woff) format('woff')",
  //     fontWeight: "$semiBold",
  //     fontStyle: "normal",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$montserrat",
  //     src: "url(/fonts/Montserrat-Regular.woff2) format('woff2'), url(/fonts/Montserrat-Regular.woff) format('woff')",
  //     fontWeight: "$regular",
  //     fontStyle: "normal",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$montserrat",
  //     src: "url(/fonts/Montserrat-Light.woff2) format('woff2'), url(/fonts/Montserrat-Light.woff) format('woff')",
  //     fontWeight: "$light",
  //     fontStyle: "normal",
  //     fontDisplay: "swap",
  //   },
  //   {
  //     fontFamily: "$montserrat",
  //     src: "url(/fonts/Montserrat-Italic.woff2) format('woff2'), url(/fonts/Montserrat-Italic.woff) format('woff')",
  //     fontWeight: "$regular",
  //     fontStyle: "italic",
  //     fontDisplay: "swap",
  //   },
  // ],

  "::selection": {
    backgroundColor: "$secondary",
    color: "$white",
  },

  "*": {
    boxSizing: "border-box",
  },

  "*:focus": {
    outline: `2px solid $secondary`,
    outlineOffset: "-2px",
  },

  "html, body": {
    fontFamily: "$syne",
    fontSize: "$base",
    lineHeight: "$base",
    color: "$black",
    overflowX: "hidden",
  },

  "b, strong": {
    fontWeight: "$bold",
  },

  button: {
    border: 0,
    cursor: "pointer",
    background: "transparent",
    padding: 0,
  },

  input: {
    fontFamily: "$syne",
    appearance: "none",
  },

  p: {
    margin: `0 0 $small 0`,
    fontSize: "inherit",
    maxWidth: "66ch",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "$syne",
  },

  h1: {
    fontSize: "$h1 !important",
    margin: `0 0 $default 0`,
  },
  h2: {
    fontSize: "$h2 !important",
    margin: `0 0 $small 0`,
  },
  h3: {
    fontSize: "$h3 !important",
    margin: `0 0 $xsmall 0`,
  },
  h4: {
    fontSize: "$h4 !important",
    margin: `0 0 $xxsmall 0`,
  },
  h5: {
    fontSize: "$h5 !important",
    margin: `0 0 $xxxsmall 0`,
  },
  h6: {
    fontSize: "$h6 !important",
  },

  "ul, ol": {
    paddingInlineStart: "$large",
    margin: `0 0 $contentSpacing 0`,
  },

  article: {
    width: "100%",
  },

  a: {
    color: "$black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  figure: {
    textAlign: "center",
    fontSize: "$small",
    margin: 0,
    padding: 0,
    marginBottom: "$small",

    "&.wp-block-image": {
      marginBottom: "$contentSpacing",
    },
  },

  figCaption: {
    color: "$grey",
    marginTop: `-$small`,
    marginBottom: "$default",
  },

  blockquote: {
    fontStyle: "italic",
    "& p": {
      marginBottom: "$xxxsmall",
    },
    marginBottom: "$contentSpacing",
  },

  hr: {
    border: 0,
    borderTop: "0.5px solid $brightGrey",
    marginTop: 0,
    margin: "$contentSpacing 0",
  },

  [`@media (max-width: ${breakpoints.m}px)`]: {
    "html, body": {
      fontSize: "$small",
    },
  },
  // [`@media (max-width: ${breakpoints.l}px)`]: {
  //   "html #main-layout": {
  //     paddingTop: `${HEADER_HEIGHT.mobile}px`,
  //   },
  // },
});

export default globalStyles;
