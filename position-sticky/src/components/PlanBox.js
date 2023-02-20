import React from "react";

const PlanBox = ({ children, ...restProps }) => {
  return <article {...restProps}>{children}</article>;
};

export default PlanBox;
