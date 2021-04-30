import React from "react";

import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { formatDate } from "./utils";

const DateFormatter = ({ value }) => (value ? formatDate(value) : "");

export const DateTypeProvider = (props) => (
  <DataTypeProvider formatterComponent={DateFormatter} {...props} />
);
