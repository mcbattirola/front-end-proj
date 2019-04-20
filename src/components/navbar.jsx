import React, { PureComponent } from "react";

//Stateless Functional Component

//props as argument and remove "this." from props
const Navbar = ({ text }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Hello {text}
      </a>
    </nav>
  );
};

export default Navbar;
