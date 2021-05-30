import { createGlobalStyle } from "styled-components";
import { backgroundColor, fontColor } from "../styles/colors";

export const Global = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  body{
    font-family: Poppins;
    overflow: hidden;
    background-color: ${backgroundColor};
    color: ${fontColor};
  }
`;
