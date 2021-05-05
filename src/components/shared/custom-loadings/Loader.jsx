import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <div className="loader loader-container">
      <div className="loader loader-icon">
        <Spinner animation="border" role="status"></Spinner>
      </div>
    </div>
  );
};
