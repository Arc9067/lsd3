import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Mics from "./components/Mics";
import Footer from "./components/Footer";
import Buy from "./components/Buy";

const App = () => {
  return (
    <div
      id="parent"
      className="min-h-screen w-full relative bg-black text-white font-comicNeue shake"
    >
      <Header />
      <Hero />
      <About />
      <Mics />
      <Buy />
      <Footer />
    </div>
  );
};

export default App;
