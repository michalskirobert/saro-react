import React, { ReactElement } from "react";

import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { formatDate } from "./utils";

import * as CONSTANTS from "@utils/constants";

const DateFormatter = ({ value }: { value: string }): string =>
  value === CONSTANTS.GENERAL_CONSTANTS.NOT_APPLICABLE_MESSAGE
    ? value
    : formatDate(value);

export const DateTypeProvider = (props: any): ReactElement => (
  <DataTypeProvider formatterComponent={DateFormatter} {...props} />
);
