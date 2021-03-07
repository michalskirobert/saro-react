import React from "react";
import { useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

const CmsAlert = () => {
  const alert = useSelector((state) => {
    return {
      type: state.CMS.alertType,
      message: state.CMS.alertMsg,
    };
  });
  return (
    <div className={`alert ${alert.type}`}>
      <p>{alert.message}</p>
      <button className="close" onClick={() => alert("close")}>
        <FaTimes />
      </button>
    </div>
  );
};

export default CmsAlert;
