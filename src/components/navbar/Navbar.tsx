import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-scroll";
import { ReactComponent as LogoIcon } from "./assets/fairy.svg";
import classNames from "classnames";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive)
  }
  const closeMenu = () => {
    console.log("click");
  };
  return (
    <nav className={styles.main}>
      <div className={styles.inner_width}>
        <Link to="/" className={styles.logo}>
          <LogoIcon />
        </Link>
        <button className={classNames(styles.menu_toggler, {[styles.active]:isActive}) } onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={classNames(styles.nav_menu, {[styles.active]:isActive}) }>
          <li className={styles.nav_menu_item}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Домой
            </Link>
          </li>
          <li className={styles.nav_menu_item}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Кто я?
            </Link>
          </li>
          <li className={styles.nav_menu_item}>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
