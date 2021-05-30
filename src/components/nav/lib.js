import { Link as _Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  background-color: red;
`;

export const Link = styled(_Link)`
  font-size: 1rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

export const Search = styled.input`
  padding: 8px 12px;
  border: none;
  font-size: 16px;
  outline: none;

  :hover {
    border: 0.1px solid #dcdce3;
  }
`;
