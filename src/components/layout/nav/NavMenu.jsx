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
      return nav.filter(item => item?.status?.includes(+user?.status))
    }
    else {
       return nav.filter(item => !item?.action && item?.status?.includes(+user?.status) )
    }
  }
  const filteredNavData = filterNavData()

  return (
    <>
      <Accordion className={`nav-container ${isNavOpen && "active"}`}>
        {filteredNavData.map(({ title, path, content }, index) => {
          return content ? (
            <React.Fragment key={index}>
            <Card>
              <Accordion.Toggle eventKey={title} as={Card.Header}>
              <FaAngleLeft className="arrow" /> {title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={title}>
                <Card.Body>
                <Accordion>
                  {content.map(({ title, path, subcontent }, index) => {
                    return subcontent ? ( 
                      <React.Fragment key={index}>                    
                        <Card >
                          <Accordion.Toggle as={Card.Header} eventKey={title}>
                            {title}
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={title}>
                            <Card.Body className="inner-body">
                              {subcontent.map(({path, title}, index) => {
                                return path ? (<Link key={index} className="inner-links" to={path}>{title}</Link>) : (<button className="inner-links-btn" key={index}>{title}</button>)
                              })}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>     
                        </React.Fragment>                  
                    ) : (
                      <React.Fragment key={index}>
                      <Link  to={path}>{title}</Link>
                      </React.Fragment>
                    );
                  })}
                  </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
            <Accordion.Toggle as={Card.Header}>
              <Link to={path}>
              <FaAngleLeft className="arrow" /> {title}
              </Link>
            </Accordion.Toggle>
            </React.Fragment>
          );
        })}
      </Accordion>
      {isNavOpen && <S.Overlay onClick={toggleNav}></S.Overlay>}
    </>
  );
};

export default NavMenu;
