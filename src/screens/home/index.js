import Search from "../../components/search";
import Image from "../../assets/geom-17.png";
import { Container, Heading, Hero } from "./lib";

function Home(props) {
  return (
    <Container>
      <Search style={{ marginBottom: "250px" }} />
      <Hero src={Image} />
    </Container>
  );
}

export default Home;
