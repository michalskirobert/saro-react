import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaAngleLeft } from "react-icons/fa";

import * as S from "./style";

const nav = [
  {
    title: "Home",
    path: "/",
    classLink: "",
    isLogged: false,
  },
  {
    title: "Sign In",
    path: "/sign-in",
    classLink: "",
    isLogged: false,
  },
  {
    title: "Sign Out",
    path: "/sign-in",
    classLink: "",
    isLogged: true,
  },
  {
    title: "Lessons",
    path: "/lessons",
    classLink: "",
    isLogged: false,
    content: [
      {
        title: "Begginer",
        path: "/lessons",
      },
      {
        title: "Elementary",
        path: "lessons/",
      },
      {
        title: "Pre-intermediate",
        path: "/lessons",
      },
      {
        title: "Low Intermediate",
        path: "/lessons",
      },
      {
        title: "Intermediate",
        path: "/lessons",
      },
      {
        title: "Upper Intermediate",
        path: "/lessons",
      },
      {
        title: "Pre-advanced",
        path: "/lessons",
      },
      {
        title: "Advanced",
        path: "/lessons",
      },
      {
        title: "Very Advanced",
        path: "/lessons",
      },
    ],
  },
  {
    title: "Tests",
    path: "/tests",
    classLink: "",
    isLogged: false,
  },
  {
    title: "Stuff",
    path: "/stuff",
    classLink: "",
    isLogged: false,
    content: [
      {
        title: "Foods",
        path: "",
      },
      {
        title: "Curiosities",
        path: "",
      },
      {
        title: "Traditions",
        path: "",
      },
      {
        title: "Media",
        path: "",
      },
      {
        title: "Tools",
        path: "",
      },
      {
        title: "Quiz",
        path: "",
      },
      {
        title: "Dialogue",
        path: "",
      },
      {
        title: "Beauty",
        path: "",
      },
    ],
  },
  {
    title: "Community",
    path: "/community",
    classLink: "",
    isLogged: false,
  },
  {
    title: "About Us",
    path: "/about",
    classLink: "",
    isLogged: false,
  },
];

const NavMenu = ({ isNavOpen, setIsNavOpen }) => {
  const linksRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const user = useSelector((state) => state.currentUser);

  const publicMap = nav.filter((item) => {
    return item.isLogged === false;
  });

  const toggleInnerMenu = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  let navData = user.isLogged ? nav : publicMap;


  return (
    <>
      <div className={`nav-container ${isNavOpen && "active"}`}>
        <ul className="nav-links" ref={linksRef}>
          {navData.map((link, index) => {
            const { title, path, content } = link;
            return (
              <li key={index} className="nav-link">
                {content ? (
                  <>
                    <button
                      onClick={() => {
                        toggleInnerMenu(index);
                      }}
                    >
                      <FaAngleLeft
                        className={selected === index ? "icon rotate" : "icon"}
                      />
                      {title}
                    </button>

                    <div
                      className={
                        selected === index
                          ? "nav-inner-container open"
                          : "nav-inner-container"
                      }
                    >
                      <ul className="nav-links-inner">
                        {content?.map((link, index) => {
                          const { title, path } = link;
                          return (
                            <li key={index} className="nav-link-inner">
                              <Link to={path}>{title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link to={path}>
                    <FaAngleLeft className="icon" />
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {isNavOpen && <S.Overlay onClick={handleClick}></S.Overlay>}
    </>
  );
};

export default NavMenu;
