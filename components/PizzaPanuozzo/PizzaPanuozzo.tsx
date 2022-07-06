import React from "react";
import { toPrice } from "../../utils";
import { Dl, Dt, Dd } from "../Dl";
import Bar from "../Bar/Bar";
import BarItem from "../Bar/BarItem";
import { P, Span } from "../Typography/Typography";
import { CSS } from "@stitches/react";

type PizzaPanuozzo = {
  products: {
    label: string;
    weight?: number;
    description: string;
    price: number;
    number?: number;
  }[];
  css?: CSS;
};

const PizzaPanuozzo: React.FC<PizzaPanuozzo> = ({ products, ...other }) => {
  return (
    <Dl css={{ marginBottom: 0 }} {...other}>
      {products.map(({ label, price, description, weight, number }) => (
        <React.Fragment key={label}>
          <Dt key={label}>
            <Bar css={{ marginBottom: 0 }}>
              {typeof number === "number" && (
                <BarItem
                  css={{
                    width: "1.6rem",
                  }}
                >
                  <Span
                    css={{
                      fontSize: "$h5",
                      fontWeight: "$bold",
                      marginBottom: 0,
                    }}
                  >
                    {number}.
                  </Span>
                </BarItem>
              )}
              <BarItem isFilling>
                <Span
                  css={{
                    fontSize: "$h5",
                    fontWeight: "$bold",
                    marginBottom: 0,
                  }}
                >
                  {label}
                </Span>
                <P css={{ marginBottom: "$small" }}>
                  {weight ? `${weight}g · ` : ""}
                  {description}
                </P>
              </BarItem>
            </Bar>
          </Dt>
          <Dd>
            <Span
              css={{ fontSize: "$h5", fontWeight: "$bold", color: "$black" }}
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
