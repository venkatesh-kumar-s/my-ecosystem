import React from "react";
import LogOff from "./LogOff";

const NavBar = () => {
  return (
    <div
      className="px-4 py-3 py-md-2 d-flex justify-content-center shadow"
      style={{ background: "#000000" }}
    >
      <p
        className="my-auto display-5"
        style={{ fontFamily: "Titan One, cursive", color: "#62b6cb" }}
      >
        <span className="text-light">M</span>ECO
        <span className="text-warning">SYS</span>
      </p>
      {/* <LogOff /> */}
    </div>
  );
};

export default NavBar;
