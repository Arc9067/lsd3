import React from "react";
import logo from "../assets/logo.webp";

const About = () => {
  return (
    <section className="py-28 bg-black bg-opacity-40 border-t-2 border-white">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={logo} alt="" className="mx-auto lg:mx-0" />
        <article className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-5xl text-white font-bold  capitalize">
            About LSD Dork
          </h1>
          <p>
            LicK mY BaCk aKa My AciDdd SacK wE FlyiN HIGHHH tO ThE MeWn BabyYyy
            LFGGGG
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <a
              href=""
              className="uppercase font-bold bg-white text-black py-2 px-4 rounded-lg border-2 border-black"
            >
              buy now
            </a>
            <a
              href=""
              className="uppercase font-bold bg-white text-black py-2 px-4 rounded-lg border-2 border-black"
            >
              live chart
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
