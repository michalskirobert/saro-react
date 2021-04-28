import styled from "styled-components";

export const Tr = styled.tr`
font-weight: bold;
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  background: transparent;
  z-index: 2;
  width: 100vw;
  height: 100vh;
`;

export const NotificationButton = styled.button`
border: 2px solid #2e4660;
border-radius: 2px;
padding: 5px 7px;
background: #2e4660;
color: white;
margin-top: 10px;
margin-right: 5px;
`;

export const TableButton = styled.button`
border: 1px solid #2e4660;
border-radius: 5px;
background: #2e4660;
color: white;
padding: 7px;
font-size: 0.75rem;
margin-bottom: 5px;
`;