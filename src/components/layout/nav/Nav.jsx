import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../../utils/_actions";

const Nav = () => {
  const changeBackground = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const isNavOpen = useSelector((state) => state.isNavOpen);

  const changeColor = () => {
    changeBackground.current.style.backgroundColor =
      window.scrollY < 100 ? "transparent" : "#2d2b2a";
  };

  useEffect(() => {
    if (location === "/") {
      document.title = "Welcome to Saro! - Home";
      changeBackground.current.style.backgroundColor = "transparent";
      document.addEventListener("scroll", changeColor);
    } else {
      document.title = `Welcome to Saro! ${location}`.replace("/", "- ");
      document.removeEventListener("scroll", changeColor);
      changeBackground.current.style.backgroundColor = "#2d2b2a";
    }
    return () => {
      document.removeEventListener("scroll", changeColor);
    };
  }, [location]);

  return (
    <header ref={changeBackground}>
      <Logo />
      <nav>
        <button
          className="hamburger"
          onClick={() => dispatch(navActions.navToggle())}
        >
          {isNavOpen ? <ImCross style={{height: "25px"}} /> : <FaBars />}
        </button>
        <NavMenu />
      </nav>
    </header>
  );
};

export default Nav;
