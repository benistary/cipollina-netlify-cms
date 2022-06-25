import { styled } from "../../stitches.config";
import { Products } from "../../types";
import { toPrice } from "../../utils";
import { P } from "../Typography/Typography";

type ProductsMenu = {
  products: Products;
};

const Dl = styled("dl", {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  overflow: "visible",
});

const Dt = styled("dt", {
  maxWidth: "80%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginBottom: "$xsmall",
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

const ProductsMenu: React.FC<ProductsMenu> = ({ products }) => {
  return (
    <Dl>
      {products.map(({ label, price, description, weight, number }, i) => (
        <>
          <Dt key={label}>
            <P
              css={{
                fontSize: "$h4",
                fontWeight: "$bold",
                marginBottom: 0,
              }}
            >
              {number}. {label}
            </P>
            <P css={{ marginBottom: "$xxsmall" }}>
              {weight ? <b>{weight}g · </b> : ""}
              {description}
            </P>
          </Dt>
          <Dd>{toPrice(price)}</Dd>
        </>
      ))}
    </Dl>
  );
};

export default ProductsMenu;

// .dl--inline {
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   overflow: visible;

//   & :global(dt) {
//     flex: 0 0 50%;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     margin-bottom: ${sizes.xsmall};
//   }

//   & :global(dd) {
//     display: block;
//     margin-top: auto;
//     flex: 0 0 50%;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     margin-bottom: ${sizes.xsmall};
//   }
// }
