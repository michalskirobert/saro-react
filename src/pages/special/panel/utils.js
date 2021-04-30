export const BUTTONS_HELPER = Object.freeze({
  ALIGN_LEFT: "left",
  ALIGN_CENTER: "center",
  ALIGN_RIGHT: "right",
});

export const TABLE_COLUMN_PROPERTIES = Object.freeze({
  TITLE: "title",
  MODIFIED: "lastModified",
  AUTHOR: "author",
  MANAGE: "manage",
});
export const TABLE_COLUMN = Object.freeze({
  TITLE: "Title",
  MODIFIED: "Last modified",
  AUTHOR: "Author",
  MANAGE: "Edit",
});

export const COLUMNS = Object.freeze([
  { name: TABLE_COLUMN_PROPERTIES.TITLE, title: TABLE_COLUMN.TITLE },
  { name: TABLE_COLUMN_PROPERTIES.MODIFIED, title: TABLE_COLUMN.MODIFIED },
  { name: TABLE_COLUMN_PROPERTIES.AUTHOR, title: TABLE_COLUMN.AUTHOR },
  { name: TABLE_COLUMN_PROPERTIES.MANAGE, title: TABLE_COLUMN.MANAGE },
]);
export const tableColumnExtentions = [
  {
    columnName: TABLE_COLUMN_PROPERTIES.TITLE,
    align: BUTTONS_HELPER.ALIGN_LEFT,
    wordWrapEnabled: true,
  },
  {
    columnName: TABLE_COLUMN_PROPERTIES.MODIFIED,
    align: BUTTONS_HELPER.ALIGN_LEFT,
    wordWrapEnabled: true,
  },
  {
    columnName: TABLE_COLUMN_PROPERTIES.AUTHOR,
    align: BUTTONS_HELPER.ALIGN_LEFT,
    wordWrapEnabled: true,
  },
  {
    columnName: TABLE_COLUMN_PROPERTIES.MANAGE,
    align: BUTTONS_HELPER.ALIGN_RIGHT,
    wordWrapEnabled: true,
    width: 60,
  },
];
