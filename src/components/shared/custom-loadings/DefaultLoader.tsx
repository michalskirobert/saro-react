import React from "react";
import { Spinner } from "react-bootstrap";

export const DefaultLoader = () => {
  return (
    <div className={"loader"}>
      <Spinner animation={"border"} role={"status"}></Spinner>
    </div>
  );
};
