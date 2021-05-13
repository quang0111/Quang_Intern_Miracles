import "./App.css";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skill />
      <Experience />
      <Activities />
      <Contact />
    </div>
  );
}

export default App;
