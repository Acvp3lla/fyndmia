import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  height: 100%;
`;

export const Tabs = styled.ul`
  list-style: none;
  width: max-content;
  display: grid;
  grid-gap: 30px;
`;
export const Tab = styled(animated.li)`
  padding: 8px 8px;
  cursor: pointer;

  border-bottom: ${(props) => (props.$isactive ? "2px solid white" : "none")};

  :hover {
    border-bottom: ${(props) => (props.$isactive ? "2px" : "1px")} solid white;
    margin-bottom: ${(props) => (props.$isactive ? "0px" : "-1px")};
  }
`;

export const TabView = styled.div`
  width: 100%;
  padding: 0px 20px;
  border-left: 2px solid white;
`;
