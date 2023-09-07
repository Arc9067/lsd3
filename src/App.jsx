import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Mics from "./components/Mics";
import Footer from "./components/Footer";
import Buy from "./components/Buy";

const App = () => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    document.querySelectorAll(".yes").forEach((ele) => {
      ele.addEventListener("click", () => {
        const audio = new Audio("/audio.mp3");
        audio.play();
        setHide(true);
      });
    });
  }, []);

  return (
    <>
      {" "}
      <section
        id="player"
        className={`h-screen ${
          hide ? "hidden" : "block"
        } font-comicNeue scale w-full fixed top-0 z-50 left-0 bg-black bg-opacity-30 flex justify-center items-center`}
      >
        <div className="container  w-full flex justify-center items-center">
          <article
            className="p-10 gap-5 text-white rounded-md flex flex-col justify-center items-center bg-black border-2 border-white w-max
          "
          >
            <h1 className="text-3xl text-center">
              YOU’VE BEEN INVITED ACCEPT YOUR INVITATION
            </h1>
            <div className="flex items-center gap-6 flex-wrap justify-center items-center">
              <button className="uppercase yes font-bold bg-[#0000ff] text-white py-2 px-8 rounded-lg border-2 border-white">
                ACCEPT
              </button>
              <button
                href=""
                className="uppercase yes font-bold bg-[#ff0000] text-black py-2 px-8 rounded-lg border-2 border-white"
              >
                DECLINE
              </button>
            </div>
          </article>
        </div>
      </section>
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
    </>
  );
};

export default App;
