import React from "react";
import { Spinner } from "reactstrap";

export const Loader = (): JSX.Element => {
  return (
    <div className={"loader loader-container"}>
      <div className={"loader loader-icon"}>
        <Spinner animation={"border"} role={"status"}></Spinner>
      </div>
    </div>
  );
};
