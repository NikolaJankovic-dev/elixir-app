import React from "react";
import circle from "../assets/circle.jpg";
import ce from "../assets/ce.jpg";
import elixir from "../assets/elixir.jpg";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img
        src={circle}
        alt="circle"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <div className={style.inner}>
        <img src={elixir} alt="elixir" />
        <img src={ce} alt="ce" />
      </div>
    </div>
  );
};

export default Navbar;
