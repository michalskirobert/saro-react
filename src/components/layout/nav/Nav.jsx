import React from "react";
import { Link } from "react-router-dom";
import { auth } from "@fire";

import NavMenu from "./NavMenu";
import Logo from "./Logo";

import UserIcon from "@assets/images/components/nav/UserIcon.svg";
import Hamburger from "@assets/images/components/nav/Hamburger.svg";
import House from "@assets/images/components/nav/House.svg";
import Cross from "@assets/images/components/nav/Cross.svg";
import MagnifyingGlass from "@assets/images/components/nav/MagnifyingGlass.svg";

import { useContainer } from "./container";

import { Header } from "./style";

const Nav = () => {
  const {
    userName,
    userIsLogged,
    isNavOpen,
    scrolled,
    toggleNav,
  } = useContainer();

  return (
    <>
      <Header
        // style={
        //   scrolled
        //     ? { transform: "translateY(-100%)" }
        //     : { transform: "translateY(0)" }
        // }
        {...{ scrolled }}
      >
        <section className="header-upper">
          <Logo className="header-logo" />
          <section className="user">
            {userIsLogged ? (
              <Link to="/dashboard">
                <img
                  src={auth?.currentUser?.photoURL ?? UserIcon}
                  alt={userName}
                />
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
            <button className="hamburger" onClick={toggleNav}>
              {isNavOpen ? (
                <img src={Cross} alt="Close" />
              ) : (
                <img src={Hamburger} alt="Menu" />
              )}
            </button>
          </nav>
        </section>
      </Header>
      <NavMenu {...{ isNavOpen, toggleNav }} />
    </>
  );
};

export default Nav;
