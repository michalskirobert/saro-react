import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import throttle from "lodash.throttle";

import { NCMS, NReducers } from "@namespace";

export const useContainer = (): JSX.Element => {
  const user = useSelector(({currentUser}: NReducers.TCurrentUser) => currentUser);
  const nav = useSelector(({database}: NCMS.TDatabase) => database.init.nav);
  const {name: userName, isLogged: userIsLogged} = useSelector(({currentUser}: NReducers.TCurrentUser) => currentUser);

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    let prevPosition = window.pageYOffset;

    const handleScroll = throttle(() => {
      const currPosition = window.pageYOffset;
      if (currPosition > 400) {
        if (prevPosition > currPosition) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
        prevPosition = currPosition;
      } else {
        setScrolled(false);
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filterNavData = () => {
    if (user.status === 0) {
      return nav.filter((item) => item?.status?.includes(+user?.status));
    } else {
      return nav.filter(
        (item) => !item?.action && item?.status?.includes(+user?.status)
      );
    }
  };
  const filteredNavData = filterNavData();

  return {
    user,
    nav,
    userName,
    userIsLogged,
    isNavOpen,
    setIsNavOpen,
    scrolled,
    toggleNav,
    filterNavData,
    filteredNavData,
  };
};
