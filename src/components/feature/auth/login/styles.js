import styled from "styled-components";

export const Feedback = styled.p`
  color: #dc3545;
  font-size: 80%;
  margin: 0.25rem auto;
  width: 100%;
  text-align: center;
`;

export const SignInContainer = styled.div`
  opacity: ${({ isLoading }) => (isLoading ? "0.5" : "1")};
  cursor: ${({ isLoading }) => (isLoading ? "none" : "pointer")};
  z-index: ${({ isLoading }) => (isLoading ? "-1" : "1")};
`;
