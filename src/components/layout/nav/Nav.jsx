import React, { useEffect, useState } from "react";
import throttle from "lodash.throttle";

import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../../utils/_actions";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu";
import Logo from "./Logo";

import UserIcon from "../../../assets/images/components/nav/UserIcon.svg";
import Hamburger from "../../../assets/images/components/nav/Hamburger.svg";
import House from "../../../assets/images/components/nav/House.svg";
import Cross from "../../../assets/images/components/nav/Cross.svg";
import MagnifyingGlass from "../../../assets/images/components/nav/MagnifyingGlass.svg";

const Nav = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.currentUser.name);
  const userIsLogged = useSelector((state) => state.currentUser.isLogged);
  const isNavOpen = useSelector((state) => state.isNavOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let prevPosition = window.pageYOffset;

    const handleScroll = throttle(() => {
      let currPosition = window.pageYOffset;
      if (currPosition > 400) {
        if (prevPosition > currPosition) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
        prevPosition = currPosition;
      } else {
        setScrolled(false);
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={
          scrolled
            ? { transform: "translateY(-100%)" }
            : { transform: "translateY(0)" }
        }
      >
        <section className="header-upper">
          <Logo className="header-logo" />
          <section className="user">
            {userIsLogged ? (
              <Link to="/dashboard">
                <img src={UserIcon} alt={userName} />
              </Link>
            ) : (
              <Link to="/sign-up">
                <button className="sign-up-btn">Sign Up</button>
              </Link>
            )}
          </section>
        </section>
        <section className="header-lower">
          <div className="header-search">
            <img src={MagnifyingGlass} alt="Search" />
          </div>
          <div className="header-home">
            <Link to="/">
              <img src={House} alt="Home" />
            </Link>
          </div>
          <nav className="header-nav">
            <button
              className="hamburger"
              onClick={() => dispatch(navActions.navToggle())}
            >
              {isNavOpen ? (
                <img src={Cross} alt="Close" />
              ) : (
                <img src={Hamburger} alt="Menu" />
              )}
            </button>
          </nav>
        </section>
      </header>
      <NavMenu />
    </>
  );
};

export default Nav;
