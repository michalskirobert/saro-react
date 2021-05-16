import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => {
    return {
      message: state.alert.message,
      status: state.alert.status,
    };
  });
  return (
    <div className={`alert ${alert.status}`}>
      <p>{alert.message}</p>
      <button
        className={"close"}
        onClick={() => dispatch({ type: "ALERT_CLEAR" })}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Alert;
