import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cmsActions } from "../../../utils/_actions";

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
      <p>{alert.message}</p>
      <button className="close" onClick={() => dispatch(cmsActions.clear())}>
        <FaTimes />
      </button>
    </div>
  );
};

export default CmsAlert;
