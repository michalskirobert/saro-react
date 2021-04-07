import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaAngleLeft } from "react-icons/fa";

import * as S from "./style";

const NavMenu = ({ isNavOpen, setIsNavOpen }) => {
  const [selected, setSelected] = useState(null);
  const user = useSelector((state) => state.currentUser);
  const nav = useSelector((state) => state.database.init.nav);

  const publicMap = nav.filter((item) => !item.isLogged);

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
        <ul className="nav-links">
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
