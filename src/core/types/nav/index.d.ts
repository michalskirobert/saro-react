
import { NReducers } from "@namespace/reducers";

export declare namespace NNav {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TNavContainer = {
    nav: NReducers.TNav[];
    userName: S;
    userIsLogged: B;
    isNavOpen: B;
    setIsNavOpen: React.Dispatch<React.SetStateAction<B>>;
    scrolled: B;
    toggleNav: () => void;
    filteredNavData: NReducers.TNav[];
    toggleAccordion: (index: N, inner?: B)=>void;
    collapse: N;
    setCollapse: React.Dispatch<React.SetStateAction<N>>,
    innerCollapse: N,
    setInnerCollapse: React.Dispatch<React.SetStateAction<N>>,
  };

}