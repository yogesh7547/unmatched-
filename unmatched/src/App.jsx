import React, { useState, useEffect } from "react";
import About from "./components/about/About"
import Button from "./components/Button/Button"
import Footer from "./components/footer/Footer"
import Form from "./components/form/Form"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import Loader from "./components/Loader/Loader"

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Allow a tick for the content to mount before animating
      const showTimer = setTimeout(() => setShowContent(true), 10);
      return () => clearTimeout(showTimer);
    } else {
      setShowContent(false);
    }
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <div
      className={`pt-[3%] pb-[3%] flex flex-col justify-center gap-6 transform transition-all duration-700 ease-out
        ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Form />
      <hr />
      <Footer />
    </div>
  )
}

export default App
