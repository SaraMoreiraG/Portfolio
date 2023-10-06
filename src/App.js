import './App.css';

import Home from './components/Home/home';
import About from './components/About/about';
import GetInTouch from './components/GetInTouch/getInTouch';
import Skills from './components/Skills/skills';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <GetInTouch></GetInTouch>
      <Skills></Skills>
    </div>
  );
}

export default App;
