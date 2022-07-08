import React from "react";
import Item from "../components/Item";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="frame">
      {/* Navbar */}
      <NavBar />
      {/* Search */}

      {/* Modules */}
      <Item />
    </div>
  );
};

export default Home;
