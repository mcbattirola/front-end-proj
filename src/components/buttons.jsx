import React from "react";

//Stateless Functional Component

//props as argument and remove "this." from props
const Button = props => {
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      className="orcamento-botao"
    >
      {props.text}
    </button>
  );
};

export default Button;
