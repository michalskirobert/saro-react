import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";

import { auth } from "@fire";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import { DefaultLoader } from "@components/shared/custom-loadings/DefaultLoader";

const AdminPanel = () => {
  const { alert } = useSelector(({ CMS }) => CMS);
  const nav = useSelector(({ database }) => database?.init?.nav[0]?.content);
  const { isLoading } = useSelector(({ currentUser }) => currentUser);

  return (
    <section className={"section saro-panel"}>
      {alert && <CmsAlert />}
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
                <Card.Body>
                  <Card.Title className={"title"}>{title}</Card.Title>
                  {subcontent.map(({ title, path }) => {
                    return path ? (
                      <Link {...{ to: path, key: path }}>{title}</Link>
                    ) : (
                      <p {...{ key: title }}>{title}</p>
                    );
                  })}
                </Card.Body>
              </Card>
            ) : (
              <Card {...{ key: title }}>
                <Card.Body>
                  <Card.Title>
                    <Link {...{ to: path, key: title }}>{title}</Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
      </CardGroup>
    </section>
  );
};

export default AdminPanel;
