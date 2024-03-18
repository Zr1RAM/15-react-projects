import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  // console.log(type, msg);
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
