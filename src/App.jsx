import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Product } from "./components/Product/Product";
import { Projects } from "./components/Projects/Projects";
import { Skill } from "./components/Skill/Skill";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Product />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
