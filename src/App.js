// import Navbar from "./components/navbar/Navbar";
// import '../src/components/navbar/Navbar.css'
// import './App.css';
// import Hero from '../src/components/hero/Hero';
// import Skills from "./components/skills/Skills";
// import WorkExperience from "./components/workExperience/WorkExperience";
// import ContactMe from "./components/contactMe/ContactMe";
// import Footer from "./components/footer/Footer";

// function App() {

//   return (
//     <>

//       <Navbar />
//       <div className="container">
//         <Hero />
//         <Skills />
//         <WorkExperience />
//         <ContactMe />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workExperience/WorkExperience";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Element name="home">
          <Hero />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="work-experience">
          <WorkExperience />
        </Element>
        <Element name="contact">
          <ContactMe />
        </Element>
      </div>
      <Footer />
    </>
  );
}

export default App;
