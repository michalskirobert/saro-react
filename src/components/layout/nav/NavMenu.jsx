import React, { useRef, useEffect } from "react";
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
  }, 
  {
    title: "Tests",
    path: "/tests",
    classLink: "",
    isLogged: true,
  },
  {
    title: "Stuff",
    path: "",
    classLink: "",
    isLogged: true,
  },
  {
    title: "Community",
    path: "",
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
const levels = [
  {
    title: "Begginer",
    path: "",
  },
  {
    title: "Elementary",
    path: "",
  },
  {
    title: "Pre-intermediate",
    path: "",
  },
  {
    title: "Low Intermediate",
    path: "",
  },
  {
    title: "Intermediate",
    path: "",
  },
  {
    title: "Upper Intermediate",
    path: "",
  },
  {
    title: "Pre-advanced",
    path: "",
  },
  {
    title: "Advanced",
    path: "",
  },
  {
    title: "Very Advanced",
    path: "",
  },
]

const stuff = [
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
 
]


const NavMenu = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.isNavOpen);
  const user = useSelector((state) => state.currentUser);  

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isNavOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isNavOpen]);

  const publicMap = nav.filter((item) => {
    return item.isLogged === false;
  });


  // let navData = user.isLogged ? loggedMap : nav;
  let navData = true ? nav : publicMap;

  return (
    <div
      className={`nav-container ${isNavOpen && "active"}`}
      // className={`nav-container active `}
      ref={linksContainerRef}
    >
      <ul className="nav-links" ref={linksRef}>
        {navData.map((link, index) => {
          const { title, path } = link;
          return (
            <li key={index} className="nav-link">              
              <Link to={path}>              
                <FaAngleLeft className="icon"/>
                {title}               
              </Link> 
            </li>
          );
        })}        
      </ul>      
    </div>
  );
};

export default NavMenu;
