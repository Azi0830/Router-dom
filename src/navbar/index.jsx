import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex gap-10 justify-center items-center bg-green-500 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>
  );
};

export default Navbar;
