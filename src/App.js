import "./App.css";

import Home from "./components/Home/home";
import About from "./components/About/about";
import GetInTouch from "./components/GetInTouch/getInTouch";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Banner from "./components/Banner/banner";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <GetInTouch />
      <Skills />
      <Projects />
      <Banner />
    </div>
  );
}

export default App;
