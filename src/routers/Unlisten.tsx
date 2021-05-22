import React, { Fragment, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { alertActions } from "../store/actions";

const Unlisten = ({ history, children }: any): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      dispatch(alertActions.clear());
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, [history]);

  return <Fragment>{children}</Fragment>;
};

export default withRouter(Unlisten);
