import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import throttle from "lodash.throttle";

export const useContainer = () => {
  const user = useSelector((state) => state.currentUser);
  const nav = useSelector((state) => state.database.init.nav);
  const userName = useSelector((state) => state.currentUser.name);
  const userIsLogged = useSelector((state) => state.currentUser.isLogged);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
