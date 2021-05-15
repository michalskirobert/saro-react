import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Tr = styled.tr`
  font-weight: bold;
`;

export const Overlay = styled.div`
  background: transparent;
  display: block;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 2;
`;

export const NotificationButton = styled.button`
  background: #2e4660;
  border: 2px solid #2e4660;
  border-radius: 2px;
  color: white;
  margin-right: 5px;
  margin-top: 10px;
  padding: 5px 7px;
`;

export const TableButton = styled(Button)`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0 5px 10px 4px;
  padding: 7px;
`;
