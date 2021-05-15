import React from "react";
import { Breadcrumb } from "react-bootstrap";

import * as C from "@utils/constants";

const ManageUsers = (): JSX.Element => {
  return (
    <section className={"section manage-users"}>
      <Breadcrumb>
        <Breadcrumb.Item href={C.ROUTE_PATHS.HOME_ROUTE}>
          {C.GENERAL_CONSTANTS.HOME}
        </Breadcrumb.Item>
        <Breadcrumb.Item href={C.ROUTE_PATHS.PANEL_ROUTE}>
          {C.GENERAL_CONSTANTS.ADMIN_PANEL}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {C.GENERAL_CONSTANTS.MANAGE_USERS}
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2 className={"main-title"}>{C.GENERAL_CONSTANTS.MANAGE_USERS}</h2>
      <div>
        <p>Search for user</p>
      </div>
    </section>
  );
};

export default ManageUsers;
