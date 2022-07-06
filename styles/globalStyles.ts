import { globalCss, breakpoints } from "../stitches.config";

const globalStyles = globalCss({
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
    fontFamily: "$lato",
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
    fontFamily: "$lato",
    appearance: "none",
  },

  p: {
    margin: `0 0 $default 0`,
    fontSize: "inherit",
    maxWidth: "66ch",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "$lato",
  },

  h1: {
    fontSize: "$h1 !important",
    lineHeight: "$h1",
    margin: `0 0 $default 0`,
  },
  h2: {
    fontSize: "$h2 !important",
    lineHeight: "$h2",
    margin: `0 0 $small 0`,
  },
  h3: {
    fontSize: "$h3 !important",
    lineHeight: "$h3",
    margin: `0 0 $xsmall 0`,
  },
  h4: {
    fontSize: "$h4 !important",
    lineHeight: "$h4",
    margin: `0 0 $xxsmall 0`,
  },
  h5: {
    fontSize: "$h5 !important",
    lineHeight: "$h5",
    margin: `0 0 $xxxsmall 0`,
  },
  h6: {
    fontSize: "$h6 !important",
    lineHeight: "$h6",
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
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
      color: "$primary",
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
    borderTop: "0.5px solid $black",
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
