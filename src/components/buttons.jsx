import React from "react";

//Stateless Functional Component

//props as argument and remove "this." from props
const Button = ({ text }) => {
  return <button className="orcamento-botao">{text}</button>;
};

export default Button;
