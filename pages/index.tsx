import React from "react";
import { useEffect } from "react";
import Logo from "../components/Logo/Logo";
import PageSection from "../components/PageSection/PageSection";
import PizzaPanuozzo from "../components/PizzaPanuozzo/PizzaPanuozzo";
import { H1, H2, P, Span } from "../components/Typography/Typography";
import {
  Additions,
  OpeningHours,
  Panuozzo,
  Pizza,
  Posuchy,
  Sticks,
} from "../types";
import pizzaData from "../content/pizza.json";
import posuchyData from "../content/posuchy.json";
import panuozzoData from "../content/panuozzo.json";
import sticksData from "../content/sticks.json";
import additionsData from "../content/additions.json";
import informationsData from "../content/informations.json";
import { Dd, Dl, Dt } from "../components/Dl";
import { getOpeningHours, toPrice } from "../utils";
import Link from "next/link";
import { Col, Container, Row } from "../components/Grid";
import seoConfig from "../next-seo.config";
import { contact } from "../constants";

function HomePage() {
  const { pizza } = pizzaData as Pizza;
  const posuchy = posuchyData as Posuchy;
  const { panuozzo } = panuozzoData as Panuozzo;
  const sticks = sticksData as Sticks;
  const { additions } = additionsData as Additions;
  const { openingHours } = informationsData as OpeningHours;

  useEffect(() => {
    if (window && window.location.hash.includes("_token=")) {
      window.location.replace("/admin/" + window.location.hash);
    }
  }, []);

  return (
    <>
      <H1
        css={{
          clip: "auto",
          height: "auto",
          margin: 0,
          overflow: "visible",
          position: "static",
        }}
        aria-label={seoConfig.titl}
      />
      <PageSection spaceBottom="none">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <Logo
                css={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "263px",
                  marginBottom: "$contentSpacing",

                  "@sm": {
                    width: "150px",
                  },
                }}
              />

              <P
                css={{
                  fontStyle: "italic",
                }}
              >
                Naše cesto je výsledkom pomalého kysnutia. Zreje 2 dni, čo cestu
                dodá arómu a chuť. Takto vyzreté cesto je pre organizmus ľahšie
                stráviteľné. Používame výberové talianske suroviny.
              </P>
              <P
                css={{
                  fontStyle: "italic",
                  marginBottom: 0,
                }}
              >
                Pizza je naša vášeň, pripravujeme ju s láskou.
              </P>
            </Col>
          </Row>
        </Container>
      </PageSection>

      {pizza.map(({ description, label, products }) => {
        return (
          <React.Fragment key={label}>
            <PageSection>
              <Container>
                <Row key={label}>
                  <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <H2 css={{ marginBottom: "$small" }}>{label}</H2>
                    <p>{description}</p>

                    <PizzaPanuozzo products={products} />
                  </Col>
                </Row>
              </Container>
            </PageSection>
            <Container>
              <Row>
                <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                  <hr />
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        );
      })}

      <PageSection>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <H2>Niečo iné z cesta</H2>

              <P
                css={{
                  fontSize: "$h5",
                  lineHeight: "$h5",
                  fontWeight: "$bold",
                  marginBottom: 0,
                }}
              >
                {posuchy.label} · {posuchy.weight}g
              </P>

              <Dl css={{ marginBottom: "$xxxlarge" }}>
                {posuchy.products.map(({ label, price }) => (
                  <React.Fragment key={label}>
                    <Dt
                      css={{
                        fontSize: "$h5",
                        lineHeight: "$h5",
                        marginBottom: "$small",
                      }}
                    >
                      {label}
                    </Dt>
                    <Dd>
                      <Span
                        css={{
                          fontSize: "$h5",
                          lineHeight: "$h5",
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

              <PizzaPanuozzo
                products={panuozzo}
                css={{ marginBottom: "$xxxlarge" }}
              />

              <P
                css={{
                  fontSize: "$h5",
                  lineHeight: "$h5",
                  fontWeight: "$bold",
                  marginBottom: 0,
                }}
              >
                {sticks.label} ({sticks.pieces}ks)
              </P>
              <Dl css={{ marginBottom: 0 }}>
                {sticks.products.map(({ label, price }) => (
                  <React.Fragment key={label}>
                    <Dt
                      css={{
                        fontSize: "$h5",
                        lineHeight: "$h5",
                        marginBottom: "$small",
                      }}
                    >
                      {label}
                    </Dt>
                    <Dd>
                      <Span
                        css={{
                          fontSize: "$h5",
                          lineHeight: "$h5",
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
        </Container>
      </PageSection>

      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <hr />
          </Col>
        </Row>
      </Container>

      <PageSection>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <H2>Prílohy</H2>

              <Dl css={{ marginBottom: 0 }}>
                {additions.map(({ label, price }) => (
                  <React.Fragment key={label}>
                    <Dt css={{ fontSize: "$h5", lineHeight: "$h5" }}>
                      {label}
                    </Dt>
                    <Dd>
                      <Span
                        css={{
                          fontSize: "$h5",
                          lineHeight: "$h5",
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
        </Container>
      </PageSection>

      <PageSection backgroundColor="black">
        <Container>
          <Row>
            <Col
              xs={{ span: 8, offset: 2 }}
              sm={{ span: 6, offset: 0 }}
              md={4}
              lg={3}
            >
              <Dl
                css={{
                  "& dt": {
                    flex: "0 0 calc(40% - $space$xsmall)",
                    marginBottom: "$xsmall",
                  },
                  "& dd": {
                    flex: "0 0 60%",
                  },
                }}
              >
                {getOpeningHours(openingHours).map(({ days, openingHours }) => (
                  <React.Fragment key={days}>
                    <Dt>
                      <b>{days}</b>
                    </Dt>
                    <Dd>{openingHours}</Dd>
                  </React.Fragment>
                ))}
              </Dl>
            </Col>
            <Col sm={6} md={4} lg={3}>
              <Dl vertical css={{ textAlign: "center" }}>
                <Dd>
                  <b>Objednávky</b>
                </Dd>
                <Dt>
                  <Link href={`tel:${contact.telephone.replace(" ", "")}`}>
                    <a rel="noopener noreferrer">{contact.telephone}</a>
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
                      {contact.address.streetAddress},{" "}
                      {contact.address.postalCode}{" "}
                      {contact.address.addressLocality}
                    </a>
                  </Link>
                </Dt>
              </Dl>
            </Col>
            <Col sm={6} md={4} lg={3}>
              <Dl
                vertical
                css={{ textAlign: "center", marginBottom: "$xxxlarge" }}
              >
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

            <Col css={{ display: "flex", justifyContent: "center" }}>
              <P
                css={{
                  marginBottom: 0,
                  textAlign: "center",
                  fontSize: "$small",
                }}
              >
                © CIPOLLINA s. r. o. {new Date().getFullYear()}. Všetky práva
                vyhradené.
                <br />
                Vytvoril{" "}
                <Link href="https://linktr.ee/benjamin.stary">
                  <a rel="noopener noreferrer" target="_blank">
                    @benjamin.stary
                  </a>
                </Link>
              </P>
            </Col>
          </Row>
        </Container>
      </PageSection>
    </>
  );
}

export default HomePage;
