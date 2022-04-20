import styled from "styled-components";
import { colors } from "../colors";

const BackgroundLoading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: transparent;
  border: 5px solid transparent;
  border-right-color: ${colors.tertiary};
  animation: rotate-border 1s infinite;
  @keyframes rotate-border {
    to {
      transform: rotate(1turn);
    }
  }
`;

export { BackgroundLoading, Loading };
