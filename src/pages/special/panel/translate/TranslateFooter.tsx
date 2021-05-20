import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import * as C from "@utils/constants";

const TranslateFooter = (): JSX.Element => {
  return (
    <section className={"section saro-panel"}>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href={C.ROUTE_PATHS.HOME_ROUTE}>{C.GENERAL_CONSTANTS.HOME}</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href={C.ROUTE_PATHS.PANEL_ROUTE}>
            {C.GENERAL_CONSTANTS.ADMIN_PANEL}
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>{C.GENERAL_CONSTANTS.TRANSLATE}</BreadcrumbItem>
      </Breadcrumb>
    </section>
  );
};

export default TranslateFooter;
