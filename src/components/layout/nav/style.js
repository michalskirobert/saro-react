import styled from "styled-components";

export const Overlay = styled.div`
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  background: transparent;
  z-index: 19;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  transform: ${(props) =>
    props.scrolled ? "translateY(-100%)" : "translateY(0)"};
`;
