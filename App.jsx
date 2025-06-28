import Navbar from "./src/components/Navbar";
import Hero from "./src/sections/Hero";
import Projects from "./src/sections/Projects";
import Services from "./src/sections/Services";
import About from "./src/sections/About";
import Contact from "./src/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


