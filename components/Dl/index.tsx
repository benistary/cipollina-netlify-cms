import { styled } from "../../stitches.config";

export const Dl = styled("dl", {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  overflow: "visible",
  margin: 0,
  marginBottom: "$contentSpacing",
});
export const Dt = styled("dt", {
  // maxWidth: "80%",
  flex: "0 0 80%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginBottom: "$xsmall",

  "&:last-of-type": {
    marginBottom: 0,

    "& p:last-child": {
      marginBottom: 0,
    },
  },
});
export const Dd = styled("dd", {
  display: "flex",
  flex: 1,
  justifyContent: "end",
  marginInlineStart: 0,
});
