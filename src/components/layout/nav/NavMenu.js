import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navData = [
  {
    title: "Home",
    path: "/",
    classLink: "",
    icon: "",
  },
  {
    title: "About",
    path: "/about",
    classLink: "",
    icon: "",
  },
  {
    title: "Lessons",
    path: "/lessons",
    classLink: "",
    icon: "",
  },
  {
    title: "Contact",
    path: "/contact",
    classLink: "",
    icon: "",
  },
  {
    title: "Sign-up",
    path: "/sign-up",
    classLink: "",
    icon: "",
  },

  {
    title: "Sign-in",
    path: "/sign-in",
    classLink: "sign-in",
    icon: "",
  },
];

const NavMenu = ({ classRemover }) => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const isNavOpen = useSelector((state) => state.isNavOpen);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isNavOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isNavOpen]);

  return (
    <ul className={`nav-links ${isNavOpen && "active"}`} ref={linksRef}>
      {navData.map((link, index) => {
        const { title, path, classLink, icon } = link;
        return (
          <li key={index} ref={linksContainerRef}>
            <Link to={path} className={`${classRemover || classLink}`}>
              {icon} {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
