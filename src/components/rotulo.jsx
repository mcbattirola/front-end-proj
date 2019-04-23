import React from "react";

//Stateless Functional Component

//props as argument and remove "this." from props
const Rotulo = props => {
  const labelType = "label label-" + props.label;
  return (
    <div className={labelType}>
      <span>{props.label.toUpperCase()}</span>
    </div>
  );
};

export default Rotulo;
