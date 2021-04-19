import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion, Card } from "react-bootstrap";

import { FaAngleLeft } from "react-icons/fa";

import * as S from "./style";

const nav1 = [
  {
    classLink: "",
    content: [
      {
        path: "/panel",
        title: "Admin panel",
      },
      {
        status: [40, 50, 60],
        subcontent: [
          {
            path: "/panel/add/events",
            title: "Events",
          },
          {
            path: "/panel/add/news",
            title: "News",
          },
          {
            path: "/panel/add/article",
            title: "Article",
          },
        ],
        title: "Add",
      },
      {
        status: [40, 50, 60],
        subcontent: [
          {
            path: "/panel/manage/events",
            title: "Events",
          },
          {
            path: "/panel/manage/news",
            title: "News",
          },
          {
            path: "/panel/manage/article",
            title: "Article",
          },
        ],
        title: "Managment",
      },
      {
        subcontent: [
          {
            title: "General",
          },
          {
            path: "/panel/translate/footer",
            title: "Footer",
          },
        ],
        title: "Translations",
      },
    ],
    isLogged: true,
    status: [30, 40, 50, 60],
    title: "CMS SARO",
  },
  {
    classLink: "",
    isLogged: false,
    path: "/",
    status: [0],
    title: "Home",
  },
  {
    classLink: "",
    content: [
      {
        path: "/lessons",
        title: "Begginer",
      },
      {
        path: "lessons/",
        title: "Elementary",
      },
      {
        path: "/lessons",
        title: "Pre-intermediate",
      },
      {
        path: "/lessons",
        title: "Low Intermediate",
      },
      {
        path: "/lessons",
        title: "Intermediate",
      },
      {
        path: "/lessons",
        title: "Upper Intermediate",
      },
      {
        path: "/lessons",
        title: "Pre-advanced",
      },
      {
        path: "/lessons",
        title: "Advanced",
      },
      {
        path: "/lessons",
        title: "Very Advanced",
      },
    ],
    isLogged: false,
    path: "/lessons",
    status: [0],
    title: "Lessons",
  },
  {
    classLink: "",
    isLogged: false,
    path: "/tests",
    status: [0],
    title: "Tests",
  },
  {
    classLink: "",
    content: [
      {
        path: "",
        title: "Foods",
      },
      {
        path: "",
        title: "Curiosities",
      },
      {
        path: "",
        title: "Traditions",
      },
      {
        path: "",
        title: "Media",
      },
      {
        path: "",
        title: "Tools",
      },
      {
        path: "",
        title: "Quiz",
      },
      {
        path: "",
        title: "Dialogue",
      },
      {
        path: "",
        title: "Beauty",
      },
    ],
    isLogged: false,
    path: "/stuff",
    status: [0],
    title: "Stuff",
  },
  {
    classLink: "",
    isLogged: false,
    path: "/community",
    status: [0],
    title: "Community",
  },
  {
    classLink: "",
    isLogged: false,
    path: "/about",
    status: [0],
    title: "About Us",
  },
  {
    action: 10,
    classLink: "",
    isLogged: false,
    path: "/sign-in",
    status: [0],
    title: "Sign In",
  },
  {
    classLink: "",
    isLogged: true,
    path: "/sign-in",
    title: "Sign Out",
    status: [10, 20, 30, 40, 50, 60],
  },
];

const NavMenu = ({ isNavOpen, setIsNavOpen }) => {
  const user = useSelector((state) => state.currentUser);
  const nav = useSelector((state) => state.database.init.nav);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // const filterNavData = () => {
  //   if (!user.isLogged) {
  //     return nav.filter(item => !item.isLogged)
  //   }
  //   else {
  //      return nav.filter(item => !item.action && (item?.status?.includes(user?.status) || item?.status.includes(0)) )
  //   }
  // }

  // const navData = filterNavData()

  return (
    <>
      <Accordion className={`nav-container ${isNavOpen && "active"}`}>
        {nav.map(({ title, path, content }) => {
          return content ? (
            <Card key={title}>
              <Accordion.Toggle eventKey={title} as={Card.Header}>
                {title} <p>level1</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={title}>
                <Card.Body>
                  {content.map(({ title, path, subcontent }, index) => {
                    return subcontent ? (
                      <Accordion>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey={title}>
                            {title} level2a
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={title}>
                            <Card.Body>
                              {subcontent.map((item) => (
                                <Link to={item.path}>{item.title}</Link>
                              ))}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    ) : (
                      <Link to={path}>{title} level2b</Link>
                    );
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ) : (
            <Accordion.Toggle as={Card.Header}>
              <Link to={path} style={{ color: "white" }}>
                {title}
              </Link>
            </Accordion.Toggle>
          );
        })}
      </Accordion>
      {isNavOpen && <S.Overlay onClick={handleNavClick}></S.Overlay>}
    </>
  );
};

export default NavMenu;
