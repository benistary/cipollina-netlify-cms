import { styled } from "../../stitches.config";

export const Dl = styled("dl", {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  overflow: "visible",
  margin: 0,
  marginBottom: "$contentSpacing",

  variants: {
    vertical: {
      true: {
        display: "block",

        "& dt, & dd": {
          display: "block",
          marginRight: 0,
        },
      },
    },
  },
});
export const Dt = styled("dt", {
  flex: "0 0 calc(75% - $space$xsmall)",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginBottom: "$large",
  marginRight: "$xsmall",

  "&:last-of-type": {
    marginBottom: 0,

    "& p:last-child": {
      marginBottom: 0,
    },
  },
});
export const Dd = styled("dd", {
  display: "flex",
  flex: "0 0 25%",
  justifyContent: "end",
  marginInlineStart: 0,
});
