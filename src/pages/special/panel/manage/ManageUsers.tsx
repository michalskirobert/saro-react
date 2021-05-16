import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import * as C from "@utils/constants";

const ManageUsers = (): JSX.Element => {
  return (
    <section className={"section manage-users"}>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href={C.ROUTE_PATHS.HOME_ROUTE}>{C.GENERAL_CONSTANTS.HOME}</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href={C.ROUTE_PATHS.PANEL_ROUTE}>
            {C.GENERAL_CONSTANTS.ADMIN_PANEL}
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          {C.GENERAL_CONSTANTS.MANAGE_USERS}
        </BreadcrumbItem>
      </Breadcrumb>
      <h2 className={"main-title"}>{C.GENERAL_CONSTANTS.MANAGE_USERS}</h2>
      <div>
        <p>Search for user</p>
      </div>
    </section>
  );
};

export default ManageUsers;
