import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardGroup, CardTitle } from "reactstrap";

import {NCMS, NReducers} from "@namespace"
import { auth } from "@fire";
import { DefaultLoader } from "@components/shared/custom-loadings/DefaultLoader";

const AdminPanel = () => { 
  const nav = useSelector(({ database }: NCMS.TDatabase) => database?.init?.nav[0]?.content);
  const { isLoading } = useSelector(({ currentUser }: NReducers.TCurrentUser) => currentUser);

  return (
    <section className={"section saro-panel"}>
      <h1>Saro CMS 1.0.0</h1>
      <h2>
        Welcome
        <span style={{ color: "red" }}>
          {auth?.currentUser?.displayName ?? " Saro-crew"}
        </span>
      </h2>
      {isLoading && <DefaultLoader />}
      <CardGroup>
        {nav &&
          nav.map(({ title, subcontent, path }) => {
            return subcontent ? (
              <Card {...{ key: title }}>
                <CardBody>
                  <CardTitle className={"title"}>{title}</CardTitle>
                  {subcontent.map(({ title, path }) => {
                    return path ? (
                      <Link {...{ to: path, key: path }}>{title}</Link>
                    ) : (
                      <p {...{ key: title }}>{title}</p>
                    );
                  })}
                </CardBody>
              </Card>
            ) : (
              <Card {...{ key: title }}>
                <CardBody>
                  <CardTitle>
                    <Link {...{ to: path, key: title }}>{title}</Link>
                  </CardTitle>
                </CardBody>
              </Card>
            );
          })}
      </CardGroup>
    </section>
  );
};

export default AdminPanel;
