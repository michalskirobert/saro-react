import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import alertActions from "./../_actions/alert.actions";
import navActions from "./../_actions/nav.actions";

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
