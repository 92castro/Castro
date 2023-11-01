import "./App.css";
import About from "./Components/About/About";
// import Background from "./Background";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
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
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
