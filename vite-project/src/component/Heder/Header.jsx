import React from "react";
import LandSup from "../Login and SignUp/LandSup";
import Logo from "../../assets/imge/logoLandin.svg";
import List from "../List/List";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <section id="header">
        <div id="LoginB">
          <LandSup />
        </div>
        <div id="Meno">
          <List />
        </div>
        <div id="Logo">
       <Link to='/'><img src={Logo} alt="" /></Link>
        </div>
      </section>
    </>
  );
}

export default Header;
