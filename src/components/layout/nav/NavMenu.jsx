import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion, Card } from "react-bootstrap";

import { FaAngleLeft } from "react-icons/fa";

import * as S from "./style";

const NavMenu = ({ isNavOpen, setIsNavOpen }) => {
  const user = useSelector((state) => state.currentUser); 
  const nav = useSelector((state) => state.database.init.nav);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const filterNavData = () => {
    if (user.status === 0 ) {
      return nav.filter(item => item?.status?.includes(user?.status))
    }
    else {
       return nav.filter(item => !item?.action && item?.status?.includes(user?.status) )
    }
  }
  const filteredNavData = filterNavData()

  return (
    <>
      <Accordion className={`nav-container ${isNavOpen && "active"}`}>
        {filteredNavData.map(({ title, path, content }) => {
          return content ? (
            <Card key={title}>
              <Accordion.Toggle eventKey={title} as={Card.Header}>
              <FaAngleLeft className="arrow" /> {title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={title}>
                <Card.Body>
                <Accordion>
                  {content.map(({ title, path, subcontent }) => {
                    return subcontent ? (                      
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey={title}>
                            {title}
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={title}>
                            <Card.Body className="inner-body">
                              {subcontent.map(({path, title}) => (
                                <Link className="inner-links" to={path}>{title}</Link>
                              ))}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>                      
                    ) : (
                      <Link to={path}>{title}</Link>
                    );
                  })}
                  </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ) : (
            <Accordion.Toggle as={Card.Header}>
              <Link to={path}>
              <FaAngleLeft className="arrow" /> {title}
              </Link>
            </Accordion.Toggle>
          );
        })}
      </Accordion>
      {isNavOpen && <S.Overlay onClick={toggleNav}></S.Overlay>}
    </>
  );
};

export default NavMenu;
