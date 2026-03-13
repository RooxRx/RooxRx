import Header from "./components/Header"
import SpotlightBackground from "./components/SpotlightBackground" // Zid hada
import Hero from "./pages/Hero/Hero"
import About from "./pages/About/About"
import Project from "./pages/Project/Project"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"

function App() {
  return (
    <div className="app-container">
      {/* L-effect dyal l-pixels w d-dwya */}
      <SpotlightBackground />
      
      <Header />

      <main>
        <Hero />
        <About />
        <Project />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App