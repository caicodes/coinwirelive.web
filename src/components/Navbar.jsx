import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div style={{ fontSize: "2rem", color: "#6800ff" }}>
        <FaCoins />
        coinwire<span style={{ color: "#cc0000" }}>live</span>
      </div>
    </Link>
  );
};

export default Navbar;
