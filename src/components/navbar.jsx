import React from "react";

//Stateless Functional Component

//props as argument and remove "this." from props
const Navbar = ({ text }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">Hello {text}</div>
    </nav>
  );
};

export default Navbar;
