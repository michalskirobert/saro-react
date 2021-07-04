import React from "react";
import { Link } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";
import { FaAngleLeft } from "react-icons/fa";

import { DefaultLoader } from "@components/shared/custom-loadings/DefaultLoader";
import { useNavContainer } from "./container";

import * as S from "./style";

const NavMenu = ({ isNavOpen, toggleNav }): JSX.Element => {
  const { filteredNavData, toggleAccordion, collapse, innerCollapse } =
    useNavContainer();
  const { isLoading } = useSelector(({ database }: RootStateOrAny) => database);
  return (
    <>
      <section {...{ className: `nav-container ${isNavOpen && "active"}` }}>
        {isLoading && <DefaultLoader />}
        {filteredNavData?.map(({ title, path, content }, index: number) => {
          return content ? (
            <Card {...{ key: index }}>
              <CardHeader onClick={() => toggleAccordion(index as number)}>
                <FaAngleLeft {...{ className: "arrow" }} /> {title}
              </CardHeader>
              <Collapse {...{ isOpen: collapse === index }}>
                <CardBody>
                  {content.map(({ title, path, subcontent }, index) => {
                    return subcontent ? (
                      <Card key={index}>
                        <CardHeader
                          onClick={() => toggleAccordion(index as number, true)}
                        >
                          <FaAngleLeft className={"arrow inner-arrow"} />{" "}
                          {title}
                        </CardHeader>
                        <Collapse isOpen={innerCollapse === index}>
                          <CardBody className={"inner-body"}>
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
                          </CardBody>
                        </Collapse>
                      </Card>
                    ) : (
                      <Link key={index} to={path}>
                        {title}
                      </Link>
                    );
                  })}
                </CardBody>
              </Collapse>
            </Card>
          ) : (
            <CardHeader key={index}>
              <Link to={path}>{title}</Link>
            </CardHeader>
          );
        })}
      </section>
      {isNavOpen && <S.Overlay onClick={toggleNav} />}
    </>
  );
};

export default NavMenu;
