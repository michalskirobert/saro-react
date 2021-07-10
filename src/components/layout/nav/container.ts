import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import throttle from "lodash.throttle";

import { NNav } from "@namespace/nav";
import { NReducers } from "@namespace/reducers";

export const useNavContainer = (): NNav.TNavContainer => {
  const user = useSelector(({ currentUser }: RootStateOrAny) => currentUser);
  const nav = useSelector(
    ({ database }: RootStateOrAny) => database?.dictionary?.nav
  );
  const { name: userName, isLogged: userIsLogged } = useSelector(
    ({ currentUser }: RootStateOrAny) => currentUser
  );
  const [collapse, setCollapse] = useState<number>(-1);
  const [innerCollapse, setInnerCollapse] = useState<number>(-1);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleAccordion = (index: number, inner?: boolean): void =>
    inner
      ? setInnerCollapse(innerCollapse === Number(index) ? -1 : Number(index))
      : setCollapse(collapse === Number(index) ? -1 : Number(index));

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

  const filterNavData = (): NReducers.TNav[] => {
    if (user?.status === 0) {
      return nav?.filter((item: NReducers.TNav) =>
        item?.status?.includes(+user?.status)
      );
    } else {
      return nav?.filter(
        (item: NReducers.TNav) =>
          !item?.action && item?.status?.includes(+user?.status)
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
    toggleAccordion,
    collapse,
    setCollapse,
    innerCollapse,
    setInnerCollapse,
  };
};
