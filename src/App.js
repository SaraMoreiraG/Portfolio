import React from "react";

import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import GetInTouch from "./components/GetInTouch/getInTouch";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Banner from "./components/Banner/banner";
import Contact from "./components/Contact/contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      {/* <Skills /> */}
      <Banner />
      {/* <GetInTouch /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
