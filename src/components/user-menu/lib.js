import styled from "styled-components";
import { animated } from "react-spring";
import { BiUserCircle } from "react-icons/bi";

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  width: min(12ch);
  display: flex;
  justify-content: center;
`;

export const UserIcon = styled(BiUserCircle)`
  cursor: pointer;
`;

UserIcon.defaultProps = {
  size: "2.7ch"
};

export const Menu = styled(animated.ul)`
  background-color: white;
  top: 30px;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  cursor: pointer;
  font-size: 1.3ch;
  user-select: none;

  list-style: none;

  li:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  li:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  :focus {
    outline: none;
    border: 1px solid gray;
  }
`;

export const MenuItem = styled.li`
  color: black;
  padding: 10px;
  transition: 0.3s background-color;
  :hover {
    background-color: gray;
  }
`;

MenuItem.defaultProps = {
  tabIndex: "0"
};
