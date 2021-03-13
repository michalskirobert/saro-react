import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./../../../components/feature/firebase";
import { navActions } from "../../../utils/_actions";

const nav = [
  {
    title: "Home",
    path: "/",
    classLink: "",
    isLogged: true,
  },
  {
    title: "About",
    path: "/about",
    classLink: "",
    isLogged: true,
  },
  {
    title: "Lessons",
    path: "/lessons",
    classLink: "",
    isLogged: true,
  },
  {
    title: "Contact",
    path: "/contact",
    classLink: "",
    isLogged: true,
  },
  {
    title: "Sign-up",
    path: "/sign-up",
    isLogged: false,
  },

  {
    title: "Sign-in",
    path: "/sign-in",
    classLink: "sign-in",
    isLogged: false,
  },
];

const panel = [
  {
    title: "My page",
    path: "/profile",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Messages",
    path: "/profile/messages",
  },
  {
    title: "Friends",
    path: "/profile/friends",
  },
  {
    title: "Notifications",
    path: "/profile/notifications",
  },
  {
    title: "Settings",
    path: "/profile/settings",
  },
  {
    title: "logout",
    path: "/sign-in",
  },
];

const NavMenu = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const isNavOpen = useSelector((state) => state.isNavOpen);
  const user = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const seeMore = useSelector((state) => state.general.profileToggle);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isNavOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isNavOpen]);

  const loggedMap = nav.filter((item) => {
    return item.isLogged !== false;
  });

  const emptyPicture = "https://via.placeholder.com/50px";

  let navData = user.isLogged ? loggedMap : nav;

  return (
    <div
      className={`nav-container ${isNavOpen && "active"}`}
      ref={linksContainerRef}
    >
      <ul className="nav-links" ref={linksRef}>
        {navData.map((link, index) => {
          const { title, path, classLink } = link;
          return (
            <li key={index}>
              <Link to={path} className={`${classLink || "links"}`}>
                {title}
              </Link>
            </li>
          );
        })}
        {user.isLogged && (
          <li>
            <button
              onClick={() => dispatch(navActions.profileToggle())}
              className="btn profile-btn"
            >
              <img
                src={
                  auth.currentUser ? auth.currentUser.photoURL : emptyPicture
                }
                alt="profile"
                className="profile-picture profile-picture-nav"
              />
              {auth.currentUser ? auth.currentUser.displayName : "uknown"}
              <span>▼</span>
            </button>
          </li>
        )}
      </ul>
      {seeMore && (
        <ul className="nav-links nav-links--user">
          <li>
            <img
              src={auth.currentUser ? auth.currentUser.photoURL : emptyPicture}
              alt="profile"
              className="profile-picture"
            />
          </li>
          {panel.map((item, index) => {
            const { title, path } = item;
            return (
              <li key={index}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavMenu;
