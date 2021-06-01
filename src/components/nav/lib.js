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
  font-size: 1.5rem;
  color: ${fontColor};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 1.2ch;
  text-align: center;
  font-size: 0.75em;
  font-weight: bold;
  border-radius: 7px;
  background-color: #03a678;
  color: white;
  white-space: nowrap;
  width: 12ch;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
