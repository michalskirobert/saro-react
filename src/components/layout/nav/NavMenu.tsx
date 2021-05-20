import React from "react";
import { Link } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import { Accordion, Card } from "reactstrap";
import { FaAngleLeft } from "react-icons/fa";

import { DefaultLoader } from "@components/shared/custom-loadings/DefaultLoader";
import { useNavContainer } from "./container";

import * as S from "./style";


const NavMenu = ({ isNavOpen, toggleNav }) => {
  const { filteredNavData } = useNavContainer();
  const {isLoading} = useSelector(({database}: RootStateOrAny) => database);

  return (
    <>
      <Accordion className={`nav-container ${isNavOpen && "active"}`}>
        {isLoading && <DefaultLoader />}
        {filteredNavData.map(({ title, path, content }, index: number) => {
          return content ? (
            <Card key={index}>
              <Accordion.Toggle eventKey={title} as={Card.Header}>
                <FaAngleLeft className={"arrow"} /> {title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={title}>
                <Card.Body>
                  <Accordion>
                    {content.map(({ title, path, subcontent }, index) => {
                      return subcontent ? (
                        <Card key={index}>
                          <Accordion.Toggle as={Card.Header} eventKey={title}>
                            <FaAngleLeft className={"arrow inner-arrow"} />{" "}
                            {title}
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={title}>
                            <Card.Body className={"inner-body"}>
                              {subcontent.map(({ path, title }, index) => {
                                return path ? (
                                  <Link
                                    key={index}
                                    className={"inner-links"}
                                    to={path}
                                  >
                                    {title}
                                  </Link>
                                ) : (
                                  <button
                                    className={"inner-links-btn"}
                                    key={index}
                                  >
                                    {title}
                                  </button>
                                );
                              })}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ) : (
                        <Link key={index} to={path}>
                          {title}
                        </Link>
                      );
                    })}
                  </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ) : (
            <Accordion.Toggle key={index} as={Card.Header}>
              <Link to={path}>{title}</Link>
            </Accordion.Toggle>
          );
        })}
      </Accordion>
      {isNavOpen && <S.Overlay onClick={toggleNav} />}
    </>
  );
};

export default NavMenu;
