import React from "react";

import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { formatDate } from "./utils";

import * as CONSTANTS from "@utils/constants";

const DateFormatter = ({ value }) =>
  value === CONSTANTS.GENERAL_CONSTANTS.NOT_APPLICABLE_MESSAGE
    ? value
    : formatDate(value);

export const DateTypeProvider = (props) => (
  <DataTypeProvider formatterComponent={DateFormatter} {...props} />
);
