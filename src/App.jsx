
import About from "./components/About"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Gallery from "./components/Gallery";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
     <Footer/>
   </div>

    </>
  )
}

export default App
