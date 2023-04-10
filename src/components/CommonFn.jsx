import { throttle } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CommonFn = ({ children }) => {
  return <>{children}</>;
};

export default CommonFn;
