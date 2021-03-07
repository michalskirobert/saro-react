import React from "react";
import { Spinner } from "react-bootstrap";

export const DefaultLoader = () => {
  return (
    <div className="loader loader--modal">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};
