import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";

import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Home/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
