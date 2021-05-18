import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import throttle from "lodash.throttle";

import { NNav } from "@namespace/nav";

export const useNavContainer = (): NNav.TNavContainer => {
  const user = useSelector(({ currentUser }: RootStateOrAny) => currentUser);
  const nav = useSelector(({ database }: RootStateOrAny) => database.init.nav);
  const { name: userName, isLogged: userIsLogged } = useSelector(
    ({ currentUser }: RootStateOrAny) => currentUser
  );

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
    nav,
    userName,
    userIsLogged,
    isNavOpen,
    setIsNavOpen,
    scrolled,
    toggleNav,
    filteredNavData,
  };
};
