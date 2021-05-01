import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion, Card } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

import { auth } from "@fire";
import CmsAlert from "@components/shared/alerts/CmsAlert";

const AdminPanel = () => {
  const cmsNavData = useSelector(
    (state) => state.database?.init?.nav[0]?.content
  );
  const user = useSelector((state) => state.currentUser);
  const alert = useSelector((state) => state.CMS.alert);

  const filterNavData = () => {
    return (
      cmsNavData &&
      cmsNavData.filter(
        (item) => !item.status || item?.status?.includes(+user?.status)
      )
    );
  };
  const filteredData = filterNavData();

  return (
    <Router>
      <section className="section saro-panel">
        {alert && <CmsAlert />}
        <h1>Saro CMS 1.0.0</h1>
        <h2>
          Welcome{" "}
          <span style={{ color: "red" }}>
            {auth?.currentUser?.displayName ?? "Saro-crew"}
          </span>
        </h2>
        <div className="cms-wrapper">
          <p>Admin main page</p>
        </div>
      </section>
    </Router>
  );
};

export default AdminPanel;
