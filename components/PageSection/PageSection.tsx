import React from "react";
import { styled } from "../../stitches.config";

const StyledPageSection = styled("section", {
  variants: {
    space: {
      default: {
        padding: `$large 0`,
      },
      none: {
        padding: 0,
      },
    },
    spaceTop: {
      default: {
        paddingTop: `$large`,
      },
      none: {
        paddingTop: 0,
      },
    },
    spaceBottom: {
      default: {
        paddingBottom: `$large`,
      },
      none: {
        paddingBottom: 0,
      },
    },
    color: {
      white: {
        backgroundColor: "$white",
      },
      brightGrey: {
        backgroundColor: "$brightGrey",
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
  backgroundColor?: "brightGrey" | "white";
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
