import styled from "styled-components";
import { animated } from "react-spring";

export const Hero = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  z-index: -1;
  height: 100%;
  object-fit: cover;
`;

export const Heading = styled(animated.h1)`
  font-size: min(12vw, 50px);
  line-height: 130%;
  margin-bottom: 1ch;
  width: min(350px, 100%);
  white-space: normal;
`;

export const Messaging = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SubHeading = styled.p`
  line-height: 2.5ch;
  font-size: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;
