
import About from "./components/About"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Gallery from "./components/Gallery";
import Cta from "./components/Cta";
import Contact from "./components/Contact";

function App() {

  return (
    <>
     
   <div className="main">
     <Hero/>
     <Menu/>
     <About/>
     <Gallery/>
     <Cta/>
     <Contact/>
   </div>

    </>
  )
}

export default App
