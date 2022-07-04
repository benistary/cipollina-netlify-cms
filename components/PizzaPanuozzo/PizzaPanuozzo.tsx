import React from "react";
import { toPrice } from "../../utils";
import { Dl, Dt, Dd } from "../Dl";
import { P, Span } from "../Typography/Typography";

type PizzaPanuozzo = {
  products: {
    label: string;
    weight?: number;
    description: string;
    price: number;
    number?: number;
  }[];
};

const PizzaPanuozzo: React.FC<PizzaPanuozzo> = ({ products }) => {
  return (
    <Dl>
      {products.map(({ label, price, description, weight, number }) => (
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
            <P css={{ marginBottom: "$small" }}>
              {weight ? <b>{weight}g · </b> : ""}
              {description}
            </P>
          </Dt>
          <Dd>
            <Span
              css={{ fontSize: "$h4", fontWeight: "$bold", color: "$black" }}
            >
              {toPrice(price)}
            </Span>
          </Dd>
        </React.Fragment>
      ))}
    </Dl>
  );
};

export default PizzaPanuozzo;
