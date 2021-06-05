import Fallback from "../../assets/tow-truck.svg";
import { Container, Message, FallbackImage } from "./lib";

function NotFound() {
  return (
    <Container>
      <FallbackImage
        alt="fallback for non-existent route"
        src={Fallback}
        width="400px"
        height="300px"
      />
      <Message>Oops.. seems this page doesn't exist</Message>
    </Container>
  );
}

export default NotFound;
