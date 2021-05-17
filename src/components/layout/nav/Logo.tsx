import React from "react";
import { Link } from "react-router-dom";

const Logo = (): JSX.Element => {
  return (
    <Link to={"/"}>
      <div className={"logo"}>
        <p className={"logo-title"}>Saro</p>
      </div>
    </Link>
  );
};

export default Logo;
