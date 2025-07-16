import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";


function App() {
  return (
    <>
      <div className="bg-black overflow-x-hidden w-full">
        <Header />
        <Hero />
        <About />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
