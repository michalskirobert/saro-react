import { lazy } from "react";

import { ROUTE_PATHS } from "@utils/constants";

const Panel = lazy(() => import("../../pages/special/panel/AdminPanel"));
const AdminEdit = lazy(() => import("../../pages/special/edit/Edit"));
const AdminAddArticle = lazy(() =>
  import("../../pages/special/add/AddArticle")
);
const AdminAddEvents = lazy(() => import("../../pages/special/add/AddEvents"));
const AdminAddNews = lazy(() => import("../../pages/special/add/AddNews"));
const AdminTranslate = lazy(() =>
  import("../../pages/special/edit/AdminTranslate")
);
const AdminTranslateFooter = lazy(() =>
  import("../../pages/special/panel/translate/TranslateFooter")
);
const AdminManageArticle = lazy(() =>
  import("../../pages/special/panel/manage/ManageArticles")
);
const AdminManageNews = lazy(() =>
  import("../../pages/special/panel/manage/ManageNews")
);
const AdminManageEvents = lazy(() =>
  import("../../pages/special/panel/manage/ManageEvents")
);
const AdminManageUsers = lazy(() =>
  import("../../pages/special/panel/manage/ManageUsers")
);

export const SARO_ROUTE = Object.freeze([
  {
    path: ROUTE_PATHS.PANEL_ROUTE,
    component: Panel,
    exact: true,
  },
  {
    path: ROUTE_PATHS.EDIT_ROUTE,
    component: AdminEdit,
  },
  {
    path: ROUTE_PATHS.ADD_NEW_ARTICLES_ROUTE,
    component: AdminAddArticle,
    exact: true,
  },
  {
    path: ROUTE_PATHS.ADD_NEW_EVENTS_ROUTE,
    component: AdminAddEvents,
  },
  {
    path: ROUTE_PATHS.ADD_NEW_NEWS_ROUTE,
    component: AdminAddNews,
  },
  {
    path: ROUTE_PATHS.TRANSLATE_ROUTE,
    component: AdminTranslate,
  },
  {
    path: ROUTE_PATHS.TRANSLATE_FOOTER_ROUTE,
    component: AdminTranslateFooter,
  },
  {
    path: ROUTE_PATHS.MANAGE_ARTICLES_ROUTE,
    component: AdminManageArticle,
  },
  {
    path: ROUTE_PATHS.MANAGE_NEWS_ROUTE,
    component: AdminManageNews,
  },
  {
    path: ROUTE_PATHS.MANAGE_EVENTS_ROUTE,
    component: AdminManageEvents,
  },
  {
    path: ROUTE_PATHS.MANAGE_USERS_ROUTE,
    component: AdminManageUsers,
  },
]);
