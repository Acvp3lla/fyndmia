import styled, { createGlobalStyle } from "styled-components";
import { backgroundColor, fontColor } from "../styles/colors";
import "@reach/dialog/styles.css";
import { Dialog as ReachDialog } from "@reach/dialog";

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Rubik", sans-serif;
    overflow: hidden;
    background-color: ${backgroundColor};
    color: ${fontColor};
    width: 100vw;
    height: 100vh;
    padding: 6ch 4ch;
  }

  #root {
    min-height: 100%;
  }
`;

export const Dialog = styled(ReachDialog)`
  max-width: 500px;
  border-radius: 5px;
`;
