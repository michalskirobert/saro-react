import React from "react";
import { Spinner } from "reactstrap";

export const DefaultLoader = (): JSX.Element => {
  return (
    <div className={"loader"}>
      <Spinner animation={"border"} role={"status"}></Spinner>
    </div>
  );
};
