import "./App.css";
import { Hero, Navbar, About, Projects, Contact, Footer } from "./components";

function App() {
  return (
    <>
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
