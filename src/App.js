import Navbar from "./components/navbar/Navbar";
import '../src/components/navbar/Navbar.css'
import './App.css';
import Hero from '../src/components/hero/Hero';
import Skills from "./components/skills/Skills";


function App() {


  return (
    <>
        
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
      </div>
    </>
  );
}

export default App;
