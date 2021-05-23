import styled from "styled-components";

import { Table } from "@devexpress/dx-react-grid-bootstrap4";
import { Card } from "reactstrap";

export const TableContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  padding: 0 30px;
`;

export const TableCard = styled(Card)`
  background-clip: border-box;
  background-color: #fff;
  border-radius: 0.25rem;
  cursor: auto;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: 0;
  padding: 1rem;
  position: relative;
  word-wrap: break-word;
`;

export const TableColumn = styled(Card)`
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
`;

export const TableRow = styled(Table.Row)`
  cursor: pointer;
`;
