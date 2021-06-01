import { Container, Link, Button, Form } from "./lib";
import { useSpring } from "react-spring";

function Nav(props) {
  const navProps = useSpring({
    filter: `blur(${props.isSearchFocused ? "40px" : "0px"})`,
    opacity: props.isSearchFocused ? 0.5 : 1
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container style={navProps}>
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
