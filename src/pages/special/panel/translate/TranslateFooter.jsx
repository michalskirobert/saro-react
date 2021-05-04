import React from "react";
import { Breadcrumb } from "react-bootstrap";

import { useEdit } from "../../edit/container";
import CmsAlert from "@components/shared/alerts/CmsAlert";

import * as C from "@utils/constants";

const TranslateFooter = () => {
  const { alert } = useEdit();

  return (
    <section className="section translate">
      {alert && <CmsAlert />}
      <Breadcrumb>
        <Breadcrumb.Item href={C.ROUTE_PATHS.HOME_ROUTE}>{C.GENERAL_CONSTANTS.HOME}</Breadcrumb.Item>
        <Breadcrumb.Item href={C.ROUTE_PATHS.PANEL_ROUTE}>{C.GENERAL_CONSTANTS.ADMIN_PANEL}</Breadcrumb.Item>
        <Breadcrumb.Item active>{C.GENERAL_CONSTANTS.TRANSLATE}</Breadcrumb.Item>
      </Breadcrumb>      
    </section>
  );
};

export default TranslateFooter;
