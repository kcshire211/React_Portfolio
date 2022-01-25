import React from "react";
import NavBar from "./Navbar";

import '../styles/Header.css'


const Header = (props) => {
  return (
    <header className="header">
      <section className="name">Korey Cheshire</section>
      <section className="navbar" style={{color: "red"}}>
        <NavBar {...props} />
      </section>
    </header>
  );
};

export default Header;