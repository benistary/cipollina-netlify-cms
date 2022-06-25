import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../components/Logo/Logo";
import PageSection from "../components/PageSection/PageSection";
import ProductsMenu from "../components/ProductsMenu/ProductsMenu";
import { H2 } from "../components/Typography/Typography";
import homepageData from "../content/homepage.json";
import { Homepage } from "../types";

function HomePage() {
  const { category } = homepageData as Homepage;

  useEffect(() => {
    if (window && window.location.hash.includes("_token=")) {
      window.location.replace("/admin/" + window.location.hash);
    }
  }, []);

  return (
    <>
      <PageSection>
        <Container>
          <Row>
            <Col
              sm={{
                span: 10,
                offset: 1,
              }}
              lg={{ span: 6, offset: 3 }}
            >
              <Logo
                css={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "263px",

                  "@sm": {
                    width: "150px",
                  },
                }}
              />

              <hr />
            </Col>
          </Row>

          {category.map(({ description, label, products }) => {
            const products2 = products.splice(
              products.length / 2,
              products.length,
            );

            return (
              <>
                <H2 css={{ marginBottom: "$xxxsmall" }}>{label}</H2>
                <p>{description}</p>

                <Row key={label}>
                  <Col md={6}>
                    <ProductsMenu products={products} />
                  </Col>
                  <Col md={6}>
                    <ProductsMenu products={products2} />
                  </Col>
                </Row>

                <hr />
              </>
            );
          })}
        </Container>
      </PageSection>
    </>
  );
}

export default HomePage;
