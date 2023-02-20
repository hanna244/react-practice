import React from "react";

const Radio = ({ id, name, label, ...restProps }) => {
  return (
    <div {...restProps}>
      <label for={id}>{label}</label>
      <input id={id} name={name} type="radio" />
    </div>
  );
};

export default Radio;
