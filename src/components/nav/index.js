import { Container, Link, Button, Form } from "./lib";
import { useSpring } from "react-spring";
import { Modal, ModalContent, ModalOpenButton } from "../modal";
import Login from "../login";

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
          <Modal>
            <ModalOpenButton>
              <Button style={{ marginRight: "20px" }}>Login</Button>
            </ModalOpenButton>
            <ModalContent>
              <Login />
            </ModalContent>
          </Modal>

          <Modal>
            <ModalOpenButton>
              <Button>Register</Button>
            </ModalOpenButton>
            <ModalContent></ModalContent>
          </Modal>
        </div>
      </Form>
    </Container>
  );
}

export default Nav;
