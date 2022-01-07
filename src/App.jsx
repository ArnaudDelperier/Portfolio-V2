import { useState } from "react";

import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

import "./app.scss"



function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
