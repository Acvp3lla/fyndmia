import Search from "../../components/search";
import Image from "../../assets/geom-17.png";
import { Container, Heading, Hero, SubHeading, Messaging } from "./lib";

function Home(props) {
  return (
    <Container>
      <Messaging>
        <Heading>Let's get stuff done</Heading>
      </Messaging>
      <Search style={{ marginBottom: "250px" }} />
    </Container>
  );
}

export default Home;
