import Navbar from "./components/navbar/Navbar";
import '../src/components/navbar/Navbar.css'
import './App.css';
import Hero from '../src/components/hero/Hero';
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workExperience/WorkExperience";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";


function App() {


  return (
    <>
        
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
