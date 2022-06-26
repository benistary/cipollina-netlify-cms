import React from "react";
import { styled } from "../../stitches.config";
import { toPrice } from "../../utils";
import { P } from "../Typography/Typography";

type PizzaPanuozzo = {
  products: {
    label: string;
    weight?: number;
    description: string;
    price: number;
    number?: number;
  }[];
};

const Dl = styled("dl", {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  overflow: "visible",
  marginBottom: "$contentSpacing",
});

const Dt = styled("dt", {
  maxWidth: "80%",
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

const Dd = styled("dd", {
  display: "flex",
  flex: 1,
  justifyContent: "end",
  fontSize: "$h4",
  fontWeight: "$bold",
  color: "$black",
  marginInlineStart: 0,
});

const PizzaPanuozzo: React.FC<PizzaPanuozzo> = ({ products }) => {
  return (
    <Dl>
      {products.map(({ label, price, description, weight, number }, i) => (
        <React.Fragment key={label}>
          <Dt key={label}>
            <P
              css={{
                fontSize: "$h4",
                fontWeight: "$bold",
                marginBottom: 0,
              }}
            >
              {typeof number === "number" ? `${number}.` : ""} {label}
            </P>
            <P css={{ marginBottom: "$xxsmall" }}>
              {weight ? <b>{weight}g · </b> : ""}
              {description}
            </P>
          </Dt>
          <Dd>{toPrice(price)}</Dd>
        </React.Fragment>
      ))}
    </Dl>
  );
};

export default PizzaPanuozzo;
