import React from "react";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="py-6 bg-pink-800 bg-opacity-20">
      <div className="container flex justify-center items-center flex-wrap gap-10 flex-col">
        <img src={logo} alt="" className="w-24" />
        <div className="flex items-center gap-6 flex-wrap">
          <a
            href="https://t.me/LSDork"
            className="uppercase font-bold bg-white text-black py-2 px-4 rounded-lg border-2 border-black"
          >
            join telegram
          </a>
          <a
            href="https://twitter.com/LSDorkETH"
            className="uppercase font-bold bg-white text-black py-2 px-4 rounded-lg border-2 border-black"
          >
            follow twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
