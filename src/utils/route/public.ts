import { lazy } from "react";

import { ROUTE_PATHS } from "@utils/constants";

const Home = lazy(() => import("../../pages/public/home/Home"));
const About = lazy(() => import("../../pages/public/about/About"));
const Lessons = lazy(() => import("../../pages/public/lessons/Lessons"));
const Blog = lazy(() => import("../../pages/public/blog/Blog"));
const Contact = lazy(() => import("../../pages/public/contact"));
const SignIn = lazy(() => import("@components/feature/auth/login/Login"));
const NotAuthorizedPage = lazy(() => import("../../pages/public/not-authorized-page"));
const CustomStepsComponent = lazy(
  () => import("@components/feature/auth/signup/index")
);
const NotFound = lazy(() => import("../../pages/public/404/Error"));

export const PUBLIC_ROUTE: readonly {path: string, exact?: boolean, component: React.LazyExoticComponent<() => JSX.Element>}[] = Object.freeze([
  {
    path: ROUTE_PATHS.HOME_ROUTE,
    exact: true,
    component: Home,
  },
  {
    path: ROUTE_PATHS.ABOUT_ROUTE,
    component: About,
  },
  {
    path: ROUTE_PATHS.SIGN_IN_ROUTE,
    component: SignIn,
  },
  {
    path: ROUTE_PATHS.SIGN_UP_ROUTE,
    component: CustomStepsComponent,
  },
  {
    path: ROUTE_PATHS.LESSONS_ROUTE,
    component: Lessons,
  },
  {
    path: ROUTE_PATHS.BLOG_ROUTE,
    component: Blog,
  },
  {
    path: ROUTE_PATHS.CONTACT_ROUTE,
    component: Contact,
  },
  {
    path: ROUTE_PATHS.NOT_AUTH_PAGE,
    component: NotAuthorizedPage,
  },
  {
    path: "*",
    component: NotFound
  }
]);
