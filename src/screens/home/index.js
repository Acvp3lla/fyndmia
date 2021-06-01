import Search from "../../components/search";
import Image from "../../assets/engineer.svg";
import { Container } from "./lib";

function Home(props) {
  return (
    <Container>
      <Search style={{ marginBottom: "350px" }} />
    </Container>
  );
}

export default Home;
