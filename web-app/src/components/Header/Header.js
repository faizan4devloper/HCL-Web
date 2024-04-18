// Header.js
import React from "react";
import styles from "./Header.module.css";
import logoImage from "./HCL Tech.svg";

const Header = () => {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <img src={logoImage} alt="" />
        </div>
        <div className={styles.right}>
          <button className={styles.button}>Request for live demo</button>
        </div>
      </nav>
      <div className={styles.border}></div>
    </div>
  );
};

export default Header;
