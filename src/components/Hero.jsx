import React from "react";
import logo from "../assets/logo.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-28 w-full h-screen flex justify-center items-center"
    >
      <div className="container flex justify-center  items-center flex-col">
        <h1 className="text-6xl text-white  md:text-9xl capitalize text-center">
          meet lsd toad
        </h1>
        <p className="text-3xl text-center">
          xxxDrugLordToadxxx entered the chat{" "}
        </p>
        <img src={logo} alt="" />

        <div className="flex items-center gap-6 flex-wrap">
          <a
            href=""
            className="uppercase font-bold bg-white text-black py-2 px-4 rounded-lg border-2 border-black"
          >
            join telegram
          </a>
          <a
            href=""
            className="uppercase font-bold bg-white text-black py-2 px-4 rounded-lg border-2 border-black"
          >
            follow twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
