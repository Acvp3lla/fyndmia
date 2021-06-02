import { Link as _Link } from "react-router-dom";
import { fontColor } from "../../styles/colors";
import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.nav)`
  width: 100%;
  position: sticky;
  top: 0;
`;

export const Link = styled(_Link)`
  font-size: min(5vw, 20px);
  color: ${fontColor};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 1ch;
  text-align: center;
  font-size: min(4vw, 12px);
  font-weight: bold;
  border-radius: 7px;
  background-color: #03a678;
  color: white;
  white-space: nowrap;
  width: min(45%, 12ch);
  cursor: pointer;
  margin-right: 20px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
`;
