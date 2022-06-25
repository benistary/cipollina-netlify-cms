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
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />

              <hr />
            </Col>
          </Row>

          {category.map(({ description, label, products }) => (
            <Row key={label}>
              <Col
                sm={{
                  span: 10,
                  offset: 1,
                }}
                lg={{ span: 6, offset: 3 }}
              >
                <H2 css={{ marginBottom: "$xxxsmall" }}>{label}</H2>
                <p>{description}</p>

                <ProductsMenu products={products} />

                <hr />
              </Col>
            </Row>
          ))}
        </Container>
      </PageSection>
    </>
  );
}

export default HomePage;
