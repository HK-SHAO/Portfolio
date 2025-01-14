import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, 
  Works, StarsCanvas } from "./components"
const App = () => {
  return (
    <HashRouter>
      <div className="relative z-30 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
      </div>
      <About />
      <Experience/>
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-10">
        <Contact />
        <StarsCanvas />
      </div>
    </HashRouter>
    

  )
}

export default App
