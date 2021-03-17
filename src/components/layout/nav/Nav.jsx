import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../../utils/_actions";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu";
import Logo from "./Logo";

import UserIcon from '../../../assets/images/components/nav/UserIcon.svg'
import Hamburger from '../../../assets/images/components/nav/Hamburger.svg'
import House from '../../../assets/images/components/nav/House.svg'
import Cross from '../../../assets/images/components/nav/Cross.svg'
import MagnifyingGlass from '../../../assets/images/components/nav/MagnifyingGlass.svg'

const Nav = () => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.isNavOpen);

  return (
    <header>
      <section className="header-upper">
        <Logo className="header-logo" />
        <section className="user">
        <img src={UserIcon} alt="User"/>
        {/* add ternary userLogged ? userIcon : singUpBtn */}
        </section>
       
      </section>
      <section className="header-lower">
        <div className="header-search"><img src={MagnifyingGlass} alt="Search"/></div>
        <div className="header-home"><Link to="/"><img src={House} alt="Home"/></Link></div>
        <nav className="header-nav">
          <button
            className="hamburger"
            onClick={() => dispatch(navActions.navToggle())}
          >
            {isNavOpen ? <img src={Cross} alt="Close"/> : <img src={Hamburger} alt="Menu"/> }
          </button>
          <NavMenu />
        </nav>
      </section>
    </header>
  );
};

export default Nav;
