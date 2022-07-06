import React from "react";
import { styled } from "../../stitches.config";

const StyledBarItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  marginBottom: 0,
  marginTop: "$xsmall",
  "& > :last-child": {
    marginBottom: "0 !important",
  },

  variants: {
    alignHorizontal: {
      default: { alignItems: "baseline" },
      right: { alignItems: "flex-end" },
      left: { alignItems: "flex-start" },
      center: { alignItems: "center" },
    },
    alignVertical: {
      default: { justifyContent: "initial" },
      middle: { justifyContent: "center" },
      bottom: { justifyContent: "flex-end" },
    },
    space: {
      default: { marginRight: "$xsmall" },
      large: { marginRight: "$xlarge" },
    },
    isFilling: {
      true: { flex: "1 0 1px" },
      false: { flex: "0 0 auto" },
    },
  },
});

type BarItem = React.ComponentProps<typeof StyledBarItem> & {
  isFilling?: boolean;
  alignHorizontal?: "right" | "left" | "center" | "default";
  alignVertical?: "middle" | "bottom" | "default";
  space?: "large" | "default";
};

const BarItem: React.FC<BarItem> = ({
  className,
  isFilling,
  alignHorizontal = "default",
  alignVertical = "default",
  space = "default",
  ...props
}) => {
  return (
    <StyledBarItem
      className={className}
      alignHorizontal={alignHorizontal}
      alignVertical={alignVertical}
      isFilling={isFilling}
      space={space}
      {...props}
    />
  );
};

export default BarItem;
