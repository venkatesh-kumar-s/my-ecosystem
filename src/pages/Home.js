import React from "react";
import Footer from "../components/Footer";
import Item from "../components/Item";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="frame">
      {/* Navbar */}
      <NavBar />

      {/* Modules */}
      <Item />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
