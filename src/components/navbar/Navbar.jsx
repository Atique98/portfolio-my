
// import { Link as RouterLink } from "react-router-dom"; 
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import MobileNav from "./mobilNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [isHovering, setIsHovering] = useState(false)
  let timeout;

  const handleMouseMove = (e) => {
    setShowNavbar(true);
    resetTimeout();
    
    // If mouse is within the nav element, set isHovering true
    if (e.target.closest('.nav-wrapper')) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setShowNavbar(false);
    setIsHovering(false);
  };

  const resetTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!isHovering) {
        setShowNavbar(false);
      }
    }, 2000);
  };



  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {/* <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> */}

      <nav
        className={`nav-wrapper ${showNavbar ? "visible" : "hidden"}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} 
      >
        <div className="nav-content">
          <h2 className="stylish-text">Atique</h2>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500} className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="work-experience" smooth={true} duration={500} className="menu-item">
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="menu-item">
                Contact Me
              </Link>
            </li>
            <button className="contact-button" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          {/* <button className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={openMenu ? faTimes : faBars}
              style={{ fontSize: "1.8rem" }}
            />
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

