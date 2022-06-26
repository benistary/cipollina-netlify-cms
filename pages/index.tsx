import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../components/Logo/Logo";
import PageSection from "../components/PageSection/PageSection";
import ProductsMenu from "../components/ProductsMenu/ProductsMenu";
import { H2 } from "../components/Typography/Typography";
import { Pizza, Posuchy } from "../types";
import pizzaData from "../content/pizza.json";
import otherData from "../content/other.json";

function HomePage() {
  const { pizza } = pizzaData as Pizza;
  const posuchy = otherData as Posuchy;

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

          {pizza.map(({ description, label, products }) => {
            return (
              <PageSection
                key={label}
                spaceTop="none"
                spaceBottom="none"
                css={{ marginBottom: "$contentSpacing" }}
              >
                <Row key={label}>
                  <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <H2 css={{ marginBottom: "$xxxsmall" }}>{label}</H2>
                    <p>{description}</p>

                    <ProductsMenu products={products} />

                    <hr />
                  </Col>
                </Row>
              </PageSection>
            );
          })}
        </Container>
      </PageSection>
    </>
  );
}

export default HomePage;
