import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { alertActions, navActions } from "./../_actions";

function Unlisten({ history, children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      dispatch(navActions.closeNav());
      dispatch(navActions.closeProfile());
      dispatch(alertActions.clear());
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(Unlisten);
