import * as C from "@utils/constants";

export const BUTTON_ACTIONS: Record<string, string> = Object.freeze({
  DELETE: "DELETE",
  EDIT: "EDIT",
  IS_ALL: "IS_ALL",
  UNCHECK: "UNCHECK",
  ADD: "/add/",
});

export const BUTTONS_HELPER = Object.freeze([
  {
    action: BUTTON_ACTIONS.ADD,
    color: C.GENERAL_CONSTANTS.B_SUCCESS,
    content: "Add",
    type: "button",
    isActive: () => true,
  },
  {
    action: BUTTON_ACTIONS.DELETE,
    color: C.GENERAL_CONSTANTS.B_DANGER,
    content: "Delete",
    type: "button",
    isActive: (selectedRowId: string) => !!selectedRowId,
  },
  {
    status: BUTTON_ACTIONS.EDIT,
    action: BUTTON_ACTIONS.EDIT,
    color: C.GENERAL_CONSTANTS.B_PRIMARY,
    content: "Edit",
    type: "button",
    isActive: (selectedRowId: string) => !!selectedRowId,
  },
  {
    status: BUTTON_ACTIONS.IS_ALL,
    action: BUTTON_ACTIONS.IS_ALL,
    color: C.GENERAL_CONSTANTS.B_DARK,
    content: "Select fields",
    type: "button",
    isActive: (selectedRowId: string) => !!selectedRowId,
  },
]);

export const TABLE_COLUMN_PROPERTIES: Record<string, string> = Object.freeze({
  TITLE: "title",
  MODIFIED: "modified",
  PUBLISHED: "published",
  AUTHOR: "crew",
});
export const TABLE_COLUMN: Record<string, string> = Object.freeze({
  TITLE: "Title",
  MODIFIED: "Last modified",
  PUBLISHED: "Published date",
  AUTHOR: "Author",
});

export const COLUMNS = Object.freeze([
  { name: TABLE_COLUMN_PROPERTIES.TITLE, title: TABLE_COLUMN.TITLE },
  { name: TABLE_COLUMN_PROPERTIES.MODIFIED, title: TABLE_COLUMN.MODIFIED },
  { name: TABLE_COLUMN_PROPERTIES.PUBLISHED, title: TABLE_COLUMN.PUBLISHED },
  { name: TABLE_COLUMN_PROPERTIES.AUTHOR, title: TABLE_COLUMN.AUTHOR },
]);

export const crew = [
  { status: 0, label: "guest" },
  { status: 10, label: "user" },
  { status: 20, label: "VIP user" },
  { status: 30, label: "translator" },
  { status: 40, label: "crew" },
  { status: 50, label: "developer" },
  { status: 60, label: "admin" },
];
