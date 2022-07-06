import React from "react";
import { styled } from "../../stitches.config";

const StyledBar = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "$contentSpacing",
  marginTop: `-$xsmall`,
  flexDirection: "row",
  "& > :last-child": {
    marginRight: 0,
  },

  variants: {
    isVertical: {
      true: {
        "&>div": {
          marginRight: 0,
          flexBasis: "100%",
        },
      },
    },
  },
});

type Bar = React.ComponentProps<typeof StyledBar>;

const Bar: React.FC<Bar> = ({ className, isVertical, ...other }) => {
  return <StyledBar isVertical={isVertical} className={className} {...other} />;
};

export default Bar;
