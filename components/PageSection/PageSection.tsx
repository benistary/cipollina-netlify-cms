import React from "react";
import { styled } from "../../stitches.config";

const StyledPageSection = styled("section", {
  variants: {
    space: {
      default: {
        padding: `$large 0`,
      },
      none: {
        padding: "0 !important",
      },
    },
    spaceTop: {
      default: {
        paddingTop: `$large`,
      },
      none: {
        paddingTop: "0 !important",
      },
    },
    spaceBottom: {
      default: {
        paddingBottom: `$large`,
      },
      none: {
        paddingBottom: "0 !important",
      },
    },
    color: {
      white: {
        backgroundColor: "$white",
      },
      brightGrey: {
        backgroundColor: "$brightGrey",
      },
      black: {
        backgroundColor: "$black",

        "& *": {
          color: "$white",
        },
      },
    },
  },

  "@md": {
    padding: 0,
    paddingTop: `$default !important`,
    '& + section[class*="pageSection"]': {
      paddingBottom: "0 !important",
    },
  },
});

type Sizes = "none" | "default";

type PageSection = React.ComponentProps<typeof StyledPageSection> & {
  backgroundColor?: "brightGrey" | "white" | "black";
  space?: Sizes;
  spaceTop?: Sizes;
  spaceBottom?: Sizes;
};

const PageSection: React.FC<PageSection> = ({
  backgroundColor = "white",
  space = "default",
  spaceTop = "default",
  spaceBottom = "default",
  ...other
}) => {
  return (
    <StyledPageSection
      space={space}
      spaceTop={spaceTop}
      spaceBottom={spaceBottom}
      color={backgroundColor}
      {...other}
    />
  );
};

export default PageSection;
