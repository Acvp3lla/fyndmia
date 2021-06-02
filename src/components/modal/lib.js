import styled from "styled-components";
import { animated } from "react-spring";

export const CloseButton = styled(animated.button)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  display: flex;
  border-radius: 15px;
  cursor: pointer;
`;
