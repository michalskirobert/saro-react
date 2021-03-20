import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { FaTimes, FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { cmsActions } from "../../../store/actions";
import { alertConstants } from "../../../utils/constants";

const CmsAlert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => {
    return {
      type: state.CMS.alertType,
      message: state.CMS.alertMsg,
    };
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(cmsActions.clear());
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={`alert ${alert.type}`}>
      {alert.type === alertConstants.SUCCESS ? (
        <FaRegCheckCircle className="icon" />
      ) : (
        <FaRegTimesCircle className="icon" />
      )}
      <p>{alert.message}</p>
      <button className="close" onClick={() => dispatch(cmsActions.clear())}>
        <FaTimes />
      </button>
    </div>
  );
};

export default CmsAlert;
