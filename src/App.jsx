import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";

const App = () => (
  <main className="bg-background text-foreground">
    <Toaster position="top-right" reverseOrder={false} />

    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Certificates />
    <Contact />
    <Footer />
  </main>
);

export default App;
