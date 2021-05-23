import styled from "styled-components";

export const Overlay = styled.div`
  background: transparent;
  display: block;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 19;
`;

export const Header = styled.header<{ scrolled: boolean }>`
  transform: ${({ scrolled }) =>
    scrolled ? "translateY(-100%)" : "translateY(0)"};
`;
