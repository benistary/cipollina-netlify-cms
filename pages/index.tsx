import { useEffect } from "react";
import { Container } from "react-bootstrap";

function HomePage() {
  useEffect(() => {
    if (window && window.location.hash.includes("_token=")) {
      window.location.replace("/admin/" + window.location.hash);
    }
  }, []);

  return (
    <Container>
      <h1>Welcome to Next.js!</h1>
      <h2>Welcome to Next.js!</h2>
      <h3>Welcome to Next.js!</h3>
      <h4>Welcome to Next.js!</h4>
      <h5>Welcome to Next.js!</h5>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus
        aspernatur architecto. Nesciunt quidem tempora, est rem ad unde
        voluptatibus et cupiditate quaerat laudantium blanditiis, ullam
        praesentium <b>nam numquam voluptas.</b>
      </p>
    </Container>
  );
}

export default HomePage;
