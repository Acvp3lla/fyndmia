import { Container, Link, Button, Form } from "./lib";
import { useSpring } from "react-spring";
import { Modal, ModalContent, ModalOpenButton } from "../modal";
import Login from "../forms/login";
import Register from "../forms/register";
import UserMenu from "../user-menu";

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
        <div style={{ whiteSpace: "nowrap", justifySelf: "end" }}>
          {props.user ? (
            <UserMenu />
          ) : (
            <>
              <Modal>
                <ModalOpenButton>
                  <Button>Sign In</Button>
                </ModalOpenButton>
                <ModalContent>
                  <Login />
                </ModalContent>
              </Modal>

              <Modal>
                <ModalOpenButton>
                  <Button>Sign Up</Button>
                </ModalOpenButton>
                <ModalContent>
                  <Register />
                </ModalContent>
              </Modal>
            </>
          )}
        </div>
      </Form>
    </Container>
  );
}

export default Nav;
