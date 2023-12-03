import React from "react";
import NavStyles from "../styles/Nav.module.css";
import BrandImg from "../assets/img/logo-bg.png";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={NavStyles.nav}>
      <ul>
        <li>
          <a href="index.html" className={NavStyles.brand}>
            <img src={BrandImg} alt="Learn with Ashis Logo" />
            <h3>Learn with Ashis</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
