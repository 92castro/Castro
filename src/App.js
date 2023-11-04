import "./App.css";
import About from "./Components/About/About";
import Background from "./Components/Background/Background";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import Mobile from "./Components/Nav/Mobile";

function App() {
  return (
    <div>
      {/* <Background /> */}
      <Nav />
      <Mobile />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
