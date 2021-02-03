import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/images/components/nav/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src={logo} alt="SARO.website" />
        <p className="logo-title">iSaro</p>
      </div>
    </Link>
  );
};

export default Logo;
