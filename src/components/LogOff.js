import React from "react";
import off from "../assets/icons/off.ico";
import { Avatar } from "@mui/material";

const LogOff = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <button
        className="btn btn-light shadow p-0 my-auto"
        onClick={logout}
        style={{ borderRadius: 100 }}
      >
        <Avatar
          className="m-auto"
          src={off}
          alt="logout"
          sx={{ height: "auto", width: 40 }}
        />
      </button>
    </>
  );
};

export default LogOff;
