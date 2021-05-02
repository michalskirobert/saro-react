import moment from "moment";

export const getRowId = (row) => row.id;

export const formatDate = (value) => {
  return moment(value).format("LLL");
};
