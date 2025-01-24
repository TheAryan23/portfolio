import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeContextProvider } from "./Components/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Experience from "./Components/Experience";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <motion.div
            className="z-40 fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left"
            style={{ scaleX: scrollYProgress }}
          />
          
            <Navbar />
            <Home />
            <About />
            <Education />
            <Skills />
            <Project/>
            <Contact />
            <Footer />
          <Toaster />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
