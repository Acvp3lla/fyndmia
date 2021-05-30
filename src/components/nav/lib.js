import { Link as _Link } from "react-router-dom";
import { fontColor } from "../../styles/colors";
import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
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

export const Search = styled.input`
  padding: 8px 10px;
  border: none;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  padding: 1.5ch 1.7ch;
  font-size: 0.75em;
  font-weight: bold;
  border-radius: 7px;
  background-color: #03a678;
  color: white;
  white-space: nowrap;
  cursor: pointer;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-gap: 3ch;
  align-items: center;
`;
