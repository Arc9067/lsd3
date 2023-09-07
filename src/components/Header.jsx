import React from "react";
import logo from "../assets/logo.webp";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="py-2 w-full absolute top-0 flex justify-center items-center px-3 ">
      <nav className="container w-full py-4 bg-black bg-opacity-50 rounded-md">
        <a
          href=""
          className="uppercase text-3xl text-white flex items-center gap-2
         font-medium"
        >
          <img src={logo} alt="" className="w-14" />
          lsd dork
        </a>
      </nav>
    </header>
  );
};

export default Header;
