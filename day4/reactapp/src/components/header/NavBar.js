import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div
        onClick={handleClick}
        style={{ cursor: "pointer", fontSize: 40, color: "red" }}
      >
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;
