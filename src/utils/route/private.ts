import { lazy } from "react";

import { ROUTE_PATHS } from "@utils/constants";

const Dashboard = lazy(() => import("../../pages/private/dashboard/Dashboard"));
const User = lazy(() => import("../../pages/private/profile/User"));

export const PRIVATE_ROUTE: readonly {path: string, exact?: boolean | undefined, component: React.LazyExoticComponent<() => JSX.Element>}[] = Object.freeze([
  {
    path: ROUTE_PATHS.DASHBOARD_ROUTE,
    component: Dashboard,
  },
  {
    path: ROUTE_PATHS.USER_ROUTE,
    component: User,
    exact: true,
  },
]);
