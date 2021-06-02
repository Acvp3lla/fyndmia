import Search from "../../components/search";
import Image from "../../assets/geom-17.png";
import { Container, Heading, Hero, SubHeading, Messaging } from "./lib";
import { config, useSpring } from "react-spring";
import { useState } from "react";

function Home(props) {
  const searchProps = useSpring({
    position: "absolute",
    transform: props.isSearchFocused ? "translateY(-100px)" : "translateY(0px)",
    marginBottom: "250px"
  });

  function handleSearchFocus() {
    props.setIsSearchFocused(true);
  }
  function handleSearchBlur() {
    props.setIsSearchFocused(false);
  }

  return (
    <Container>
      <Messaging>
        <Heading>In development</Heading>
      </Messaging>
      <Search
        style={searchProps}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
      />
    </Container>
  );
}

export default Home;
