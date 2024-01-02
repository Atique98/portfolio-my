import React,{useEffect} from "react";
import './MobileNav.css'
import { Margin } from "@mui/icons-material";

const MobileNav = ({isOpen, toggleMenu}) => {



  return (
    <>

<div 
className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}
 >
        <div className="mobile-menu-container">
          {/* <img
            src="./assets/images/Foody Zone.svg"
            className="logo"
            alt="logoo"
          /> */}
           <h1 className="stylish-text" style={{marginBottom:"10px"}}>Atique</h1>
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
        </div>
      </div>
    </>
  );
};

export default MobileNav;
