import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../components/Logo/Logo";
import PageSection from "../components/PageSection/PageSection";
import PizzaPanuozzo from "../components/PizzaPanuozzo/PizzaPanuozzo";
import { H2, P, Span } from "../components/Typography/Typography";
import { Additions, Panuozzo, Pizza, Posuchy, Sticks } from "../types";
import pizzaData from "../content/pizza.json";
import posuchyData from "../content/posuchy.json";
import panuozzoData from "../content/panuozzo.json";
import sticksData from "../content/sticks.json";
import additionsData from "../content/additions.json";
import { Dd, Dl, Dt } from "../components/Dl";
import { toPrice } from "../utils";

function HomePage() {
  const { pizza } = pizzaData as Pizza;
  const posuchy = posuchyData as Posuchy;
  const { panuozzo } = panuozzoData as Panuozzo;
  const sticks = sticksData as Sticks;
  const { additions } = additionsData as Additions;

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
              <PageSection key={label} spaceTop="none" spaceBottom="none">
                <Row key={label}>
                  <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <H2 css={{ marginBottom: "$xxxsmall" }}>{label}</H2>
                    <p>{description}</p>

                    <PizzaPanuozzo products={products} />

                    <hr />
                  </Col>
                </Row>
              </PageSection>
            );
          })}

          <PageSection
            spaceTop="none"
            spaceBottom="none"
            // css={{ marginBottom: "$contentSpacing" }}
          >
            <Row>
              <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                <H2>Niečo iné z cesta</H2>

                <P
                  css={{
                    fontSize: "$h4",
                    fontWeight: "$bold",
                    marginBottom: 0,
                  }}
                >
                  {posuchy.label} · {posuchy.weight}g
                </P>
                <Dl>
                  {posuchy.products.map(({ label, price }) => (
                    <React.Fragment key={label}>
                      <Dt css={{ fontSize: "$h4", marginBottom: 0 }}>
                        {label}
                      </Dt>
                      <Dd>
                        <Span
                          css={{
                            fontSize: "$h4",
                            fontWeight: "$bold",
                            color: "$black",
                          }}
                        >
                          {toPrice(price)}
                        </Span>
                      </Dd>
                    </React.Fragment>
                  ))}
                </Dl>

                <PizzaPanuozzo products={panuozzo} />

                <P
                  css={{
                    fontSize: "$h4",
                    fontWeight: "$bold",
                    marginBottom: 0,
                  }}
                >
                  {sticks.label} ({sticks.pieces}ks)
                </P>
                <Dl>
                  {sticks.products.map(({ label, price }) => (
                    <React.Fragment key={label}>
                      <Dt css={{ fontSize: "$h4", marginBottom: 0 }}>
                        {label}
                      </Dt>
                      <Dd>
                        <Span
                          css={{
                            fontSize: "$h4",
                            fontWeight: "$bold",
                            color: "$black",
                          }}
                        >
                          {toPrice(price)}
                        </Span>
                      </Dd>
                    </React.Fragment>
                  ))}
                </Dl>

                <hr />
              </Col>
            </Row>
          </PageSection>

          <PageSection
            spaceTop="none"
            spaceBottom="none"
            css={{ marginBottom: "$contentSpacing" }}
          >
            <Row>
              <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                <H2>Prílohy</H2>

                <Dl>
                  {additions.map(({ label, price }) => (
                    <React.Fragment key={label}>
                      <Dt css={{ fontSize: "$h4" }}>{label}</Dt>
                      <Dd>
                        <Span
                          css={{
                            fontSize: "$h4",
                            fontWeight: "$bold",
                            color: "$black",
                          }}
                        >
                          {toPrice(price)}
                        </Span>
                      </Dd>
                    </React.Fragment>
                  ))}
                </Dl>
              </Col>
            </Row>
          </PageSection>
        </Container>
      </PageSection>
    </>
  );
}

export default HomePage;
