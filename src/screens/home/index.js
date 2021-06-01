import Search from "../../components/search";
import Image from "../../assets/engineer.svg";
import { Container, Heading } from "./lib";

function Home(props) {
  return (
    <Container>
      <Search style={{ marginBottom: "250px" }} />
    </Container>
  );
}

export default Home;
