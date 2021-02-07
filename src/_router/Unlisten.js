import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

function Unlisten({ history, children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      dispatch({ type: "CLOSE_NAV" });
      dispatch({ type: "ALERT_CLEAR" });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(Unlisten);
