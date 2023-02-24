import React from "react";

const PlanBox = ({ headingLevel, title, children, ...restProps }) => {
  return (
    <article {...restProps}>
      <h3 as={headingLevel} className="title_planBox">
        {title}
      </h3>
      <div className="content_planBox">{children}</div>
    </article>
  );
};

export default PlanBox;
