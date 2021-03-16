import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./../../../components/feature/firebase";
import { navActions } from "../../../utils/_actions";
import { FaAngleLeft } from "react-icons/fa";

const nav = [
  {
    title: "Home",
    path: "/",
    classLink: "",
    isLogged: false,
  },
  {
    title: "Lessons",
    path: "/lessons",
    classLink: "",
    isLogged: true,
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
    isLogged: true,
  },
  {
    title: "Stuff",
    path: "/stuff",
    classLink: "",
    isLogged: true,
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

const NavMenu = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.isNavOpen);
  const [isInnerOpen, setIsInnerOpen] = useState(false);
  const contentRef = useRef(null);
  const contentContainerRef = useRef(null);
  const user = useSelector((state) => state.currentUser);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isNavOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isNavOpen]);

  useEffect(() => {
    if (isInnerOpen) {
      contentContainerRef.current.style.display = "block";
    } else {
      contentContainerRef.current.style.display = "none";
    }
  }, [isInnerOpen]);

  const publicMap = nav.filter((item) => {
    return item.isLogged === false;
  });
  const toggleInnerMenu = () => {
    setIsInnerOpen(!isInnerOpen);
  };

  // let navData = user.isLogged ? loggedMap : nav;
  let navData = true ? nav : publicMap;

  return (
    <div
      className={`nav-container ${isNavOpen && "active"}`}
      // className="nav-container active"
      ref={linksContainerRef}
    >
      <ul className="nav-links" ref={linksRef}>
        {navData.map((link, index) => {
          const { title, path, content } = link;
          return (
            <li key={index} className="nav-link">
              {content ? (
                <>
                  <button onClick={toggleInnerMenu}>
                    <FaAngleLeft className="icon" />
                    {title}
                  </button>

                  <div
                    ref={contentContainerRef}
                    style={{ display: "none" }}
                    className={`nav-inner-container`}
                  >
                    {content?.map((link, index) => {
                      const { title, path } = link;
                      return (
                        <ul
                          className="nav-links-inner"
                          ref={contentRef}
                          key={index}
                        >
                          <li className="nav-link-inner">
                            <Link to={path}>{title}</Link>
                          </li>
                        </ul>
                      );
                    })}
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
  );
};

export default NavMenu;
