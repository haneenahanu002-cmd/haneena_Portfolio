
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutMe from "./pages/AboutMe";
import Skills from "./components/Skills";
import SkillsPage from "./pages/SkillsPage";
import Projects from "./components/Projects";
import AllProjects from "./pages/AllProjects";
import Education from "./components/Education";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<AllProjects />}
         />
         <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;