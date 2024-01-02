import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./mobilNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  console.log(openMenu);

  return (
    <>
      <MobileNav
       isOpen={openMenu} toggleMenu={toggleMenu}
        />

      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img className="logo" src="./assets/images/Foody Zone.svg" alt="" /> */}
          <h2 className="stylish-text">Atique</h2>
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-button" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          {/* <Button
            className="menu-btn"
            onClick={toggleMenu}
            startIcon={
              openMenu ? <CloseIcon /> : <MenuIcon />
            }
          >
          </Button> */}

          <button className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={openMenu ? faTimes : faBars}
              style={{ fontSize: "1.8rem" }}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
