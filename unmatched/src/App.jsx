import About from "./components/about/About"
import Button from "./components/Button/Button"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import HowItWorks from "./components/HowItWorks/HowItWorks"



function App() {
 

  return (
    <div className="pt-[3%] pb-[3%]  flex flex-col justify-center gap-6">
     <Header/>
     <Hero/>
     <About/>
     <HowItWorks/>

    </div>
  )
}

export default App
