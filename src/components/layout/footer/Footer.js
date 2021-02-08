import React from "react";
import NavMenu from "./../../../components/layout/nav/NavMenu.js";
import Logo from "./../../../components/layout/nav/Logo";

const Footer = () => {
  return (
    <>
      <div className="newsletter">
        <form onClick={(e) => e.preventDefault()}>
          <label htmlFor="email">Sign up to newsletter</label>
          <input type="email" placeholder="your address email here" />
          <button className="btn newsletter-btn">Sign up</button>
        </form>
      </div>
      <footer>
        <Logo />
      </footer>
    </>
  );
};

export default Footer;
