import React from "react";

//Stateless Functional Component

//props as argument and remove "this." from props
const Rotulo = props => {
  const labelType = "label label-" + props.label;
  return <span className={labelType}>{props.label}</span>;
};

export default Rotulo;
