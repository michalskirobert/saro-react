import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";

import { auth } from "@fire";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import { DefaultLoader } from "@components/shared/loadings/DefaultLoader";

const AdminPanel = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const nav = useSelector((state) => state.database?.init?.nav[0]?.content);
  const isLoading = useSelector((state) => state.currentUser.isLoading);

  return (
    <section className="section saro-panel">
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
          nav.map(({ title, subcontent, path }, index) => {
            return subcontent ? (
              <Card key={index}>
                <Card.Body>
                  <Card.Title className="title">{title}</Card.Title>
                  {subcontent.map(({ title, path }) => {
                    return <Link to={path}>{title}</Link>;
                  })}
                </Card.Body>
              </Card>
            ) : (
              <Card key={index}>
                <Card.Body>
                  <Card.Title>
                    <Link to={path}>{title}</Link>
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
