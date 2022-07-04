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
import { toPhoneNumber, toPrice } from "../utils";
import Link from "next/link";

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
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <Logo
                css={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "263px",
                  marginBottom: "$default",

                  "@sm": {
                    width: "150px",
                  },
                }}
              />
              {/* <hr /> */}

              <P
                css={{
                  fontStyle: "italic",
                  // color: "$grey",
                  // textAlign: "center",
                }}
              >
                Naše cesto je výsledkom pomalého kysnutia. Zreje 2 dni, čo cestu
                dodá arómu a chuť. Takto vyzreté cesto je pre organizmus ľahšie
                stráviteľné. Používame výberové talianske suroviny.
              </P>
              <P
                css={{
                  fontStyle: "italic",
                  // color: "$grey",
                  // textAlign: "center",
                }}
              >
                Pizza je naša vášeň, pripravujeme ju s láskou.
              </P>

              {/* <hr /> */}
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

          <PageSection spaceTop="none" spaceBottom="none">
            <Row>
              <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                <H2>Niečo iné z cesta</H2>

                <P
                  css={{
                    fontSize: "$h4",
                    lineHeight: "$h4",
                    fontWeight: "$bold",
                    marginBottom: 0,
                  }}
                >
                  {posuchy.label} · {posuchy.weight}g
                </P>
                <Dl>
                  {posuchy.products.map(({ label, price }) => (
                    <React.Fragment key={label}>
                      <Dt
                        css={{
                          fontSize: "$h4",
                          lineHeight: "$h4",
                          marginBottom: 0,
                        }}
                      >
                        {label}
                      </Dt>
                      <Dd>
                        <Span
                          css={{
                            fontSize: "$h4",
                            lineHeight: "$h4",
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
                    lineHeight: "$h4",
                    fontWeight: "$bold",
                    marginBottom: 0,
                  }}
                >
                  {sticks.label} ({sticks.pieces}ks)
                </P>
                <Dl>
                  {sticks.products.map(({ label, price }) => (
                    <React.Fragment key={label}>
                      <Dt
                        css={{
                          fontSize: "$h4",
                          lineHeight: "$h4",
                          marginBottom: 0,
                        }}
                      >
                        {label}
                      </Dt>
                      <Dd>
                        <Span
                          css={{
                            fontSize: "$h4",
                            lineHeight: "$h4",
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
                      <Dt css={{ fontSize: "$h4", lineHeight: "$h4" }}>
                        {label}
                      </Dt>
                      <Dd>
                        <Span
                          css={{
                            fontSize: "$h4",
                            lineHeight: "$h4",
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

          <PageSection
            spaceTop="none"
            spaceBottom="none"
            css={{ marginBottom: "$contentSpacing" }}
          >
            <Row>
              <Col
                xs={{ span: 6, offset: 3 }}
                sm={{ span: 6, offset: 0 }}
                md={4}
                lg={3}
              >
                <Dl
                  css={{
                    "& dt": {
                      flex: "0 0 calc(40% - $space$xsmall)",
                    },
                    "& dd": {
                      flex: "0 0 60%",
                    },
                  }}
                >
                  <Dt>
                    <b>UT-ŠT</b>
                  </Dt>
                  <Dd>16:00 - 20:00</Dd>
                  <Dt>
                    <b>PI-SO</b>
                  </Dt>
                  <Dd>16:00 - 22:00</Dd>
                  <Dt>
                    <b>NE-PO</b>
                  </Dt>
                  <Dd>ZATVORENÉ</Dd>
                </Dl>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <Dl vertical css={{ textAlign: "center" }}>
                  <Dd>
                    <b>Objednávky</b>
                  </Dd>
                  <Dt>
                    <Link href={`tel:${toPhoneNumber("910 643 980")}`}>
                      <a rel="noopener noreferrer">910 643 980</a>
                    </Link>
                  </Dt>
                </Dl>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <Dl vertical css={{ textAlign: "center" }}>
                  <Dd>
                    <b>Adresa</b>
                  </Dd>
                  <Dt>
                    <Link href="https://goo.gl/maps/MvTJ1TeQ5dmXs1Sk7">
                      <a rel="noopener noreferrer" target="_blank">
                        Bývalá Viecha <br />
                        Hlavná 46/2, 927 01 Šaľa
                      </a>
                    </Link>
                  </Dt>
                </Dl>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <Dl vertical css={{ textAlign: "center" }}>
                  <Dd>
                    <b>Sociálne siete</b>
                  </Dd>
                  <Dt
                    css={{
                      "& a": {
                        display: "block",
                      },
                    }}
                  >
                    <Link href="https://www.facebook.com/PizzaCipollina">
                      <a rel="noopener noreferrer" target="_blank">
                        Facebook
                      </a>
                    </Link>
                    <Link href="https://www.instagram.com/pizzacipollina/">
                      <a rel="noopener noreferrer" target="_blank">
                        Instagram
                      </a>
                    </Link>
                  </Dt>
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
