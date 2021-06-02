import styled, { createGlobalStyle, keyframes } from "styled-components";
import { backgroundColor, fontColor } from "../styles/colors";
import { Dialog as ReachDialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { FaSpinner } from "react-icons/fa";

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
    padding: 6ch 4ch !important;
  }

  #root {
    min-height: 100%;
  }
`;

export const Dialog = styled(ReachDialog)`
  width: min(900px, 90vw);
  border-radius: 5px;
  margin: 20vh auto !important;
`;

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;
export const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;
Spinner.defaultProps = {
  "aria-label": "loading"
};
