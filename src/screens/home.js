import styled from "styled-components/macro";
import Image from "../assets/engineer.svg";

const Hero = styled.img`
  width: 100%;
  display: block;
`;

const Heading = styled.h1`
  font-size: 2.4em;
  margin-bottom: 1ch;
`;

const SubHeading = styled.p`
  line-height: 2.5ch;
  font-size: 1rem;
`;

function Home(props) {
  return (
    <div
      css={`
        margin-top: 6ch;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2ch;
      `}
    >
      <div css={``}>
        <Heading>Helping you find those you need.</Heading>
        <SubHeading>
          Stop delaying projects because you can't find good workers. Fyndmia
          helps connect you to best in their respective industries.
        </SubHeading>
      </div>
      <Hero src={Image} alt="hero image" />
    </div>
  );
}

export default Home;
