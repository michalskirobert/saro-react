import React from "react";
import { Table } from "react-bootstrap";

export const CustomTableCell = ({ row }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {row.map(({ name }, index) => {
            return <th key={index}>{name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {row.map(({ value }, index) => {
            return <td key={index}>{value}</td>;
          })}
        </tr>
      </tbody>
    </Table>
  );
};
