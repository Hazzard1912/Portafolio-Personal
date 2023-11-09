import "./App.css";
import { Hero, Navbar, About, Projects, Contact, Footer } from "./components";
import { ButtonToTop } from "./components/ButtonToTop";

function App() {
  return (
    <>
      <ButtonToTop />
      <Navbar />
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
