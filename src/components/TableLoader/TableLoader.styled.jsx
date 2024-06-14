import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background-color: var(--main-color);
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.$delay || "0s"};
`;
