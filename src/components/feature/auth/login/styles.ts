import styled from "styled-components";

export const Feedback = styled.p`
  color: #dc3545;
  font-size: 80%;
  margin: 0.25rem auto;
  text-align: center;
  width: 100%;
`;

export const SignInContainer = styled.div<{ isLoading: boolean }>`
  cursor: ${({ isLoading }) => (isLoading ? "none" : "pointer")};
  opacity: ${({ isLoading }) => (isLoading ? "0.5" : "1")};
  z-index: ${({ isLoading }) => (isLoading ? "-1" : "1")};
`;
