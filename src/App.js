import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer /> 
    </div>
  );
}

export default App;
