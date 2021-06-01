import styled from "styled-components";
import { animated } from "react-spring";

export const Input = styled.input`
  padding: 12px 40px 12px 14px;
  border: none;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  width: 100%;
`;

export const Container = styled(animated.div)`
  position: relative;
  width: 100%;
`;

export const SearchButton = styled.button`
  border: 0;
  background: transparent;
  position: absolute;
  right: 2ch;
  top: 50%;
  transform: translateY(-50%);
`;
