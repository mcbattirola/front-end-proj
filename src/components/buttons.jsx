import React from "react";

//Stateless Functional Component

//props as argument and remove "this." from props
const Button = props => {
  return (
    <button
      onClick={() => {
        props.onClick === undefined ? void 0 : props.onClick();
      }}
      className="btn-order"
    >
      {props.text}
    </button>
  );
};
export default Button;
