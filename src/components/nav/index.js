import { Container, Link, Button, Form } from "./lib";

import {} from "styled-components/macro";

function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Link to="/">fyndmia</Link>
        <div>
          <Button style={{ marginRight: "20px" }}>Login</Button>
          <Button>Register</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Nav;
