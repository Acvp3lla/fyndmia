import { Container, Link, Search, Button, Form } from "./lib";
import { FaSearch } from "react-icons/fa";
import {} from "styled-components/macro";

function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Link to="/">fyndmia</Link>
        <div
          css={`
            position: relative;
          `}
        >
          <Search placeholder="Plumber..." />
          <button
            type="submit"
            css={`
              border: 0;
              background: transparent;
              position: absolute;
              right: 2ch;
              top: 50%;
              transform: translateY(-50%);
            `}
          >
            <FaSearch />
          </button>
        </div>

        <Button>Get early access</Button>
      </Form>
    </Container>
  );
}

export default Nav;
