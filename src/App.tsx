import { MotionConfig } from "framer-motion";
import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { RoboticsAssociation } from "./components/RoboticsAssociation";
import { Skills } from "./components/Skills";
import { Thesis } from "./components/Thesis";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-[#f7f9fb] text-slate-950 transition-colors duration-500 dark:bg-[#05070a] dark:text-white">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(34,211,238,0.10),transparent_26%),radial-gradient(circle_at_92%_8%,rgba(74,222,128,0.08),transparent_24%)] dark:bg-[radial-gradient(circle_at_14%_12%,rgba(34,211,238,0.09),transparent_26%),radial-gradient(circle_at_92%_8%,rgba(59,130,246,0.09),transparent_24%)]" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Thesis />
          <RoboticsAssociation />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
