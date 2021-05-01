import { lazy } from "react";

import { ROUTE_PATHS } from "@utils/constants";

const Dashboard = lazy(() => import("../../pages/private/dashboard/Dashboard"));
const ProfileSettings = lazy(() =>
  import("../../pages/private/profile/Settings")
);

const User = lazy(() => import("../../pages/private/profile/User"));

export const PRIVATE_ROUTE = Object.freeze([
  {
    path: ROUTE_PATHS.DASHBOARD_ROUTE,
    component: Dashboard,
  },
  {
    path: ROUTE_PATHS.PROFILE_SETTING_ROUTE,
    component: ProfileSettings,
    exact: true,
  },
  {
    path: ROUTE_PATHS.USER_ROUTE,
    component: User,
    exact: true,
  },
]);
