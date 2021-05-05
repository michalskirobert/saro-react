import moment from "moment";

export const getRowId = (row) => row.id;

export const formatDate = (value) => {
  return moment(value).format("LLL");
};

export const TABLE_HELPER = Object.freeze({
  PUBLISHED_COLUMN_PROPERTY: "published",
  DIRECTION_DESCENDING: "desc",
})