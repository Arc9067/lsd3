import React from "react";
import emoji from "../assets/dance-rainbow.gif";
const Mics = () => {
  return (
    <section className="py-16">
      <div className="container w-full flex flex-col justify-center items-center ">
        <img src={emoji} alt="" className="w-10 animate-bounce" />
        <h1 className="text-5xl md:text-5xl text-center text-white font-bold  capitalize">
          Tokenomics Of LSD Dork{" "}
        </h1>

        <div className="flex flex-col md:flex-row  gap-8 gap-x-20 mt-10">
          <article className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl">xx420Mxx</h1>
            <h2 className="text-3xl">Total Supply 🤡</h2>
          </article>
          <article className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl">1/1</h1>
            <h2 className="text-3xl">Taxes 🌛</h2>
          </article>
          <article className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl">xx2%xx</h1>
            <h2 className="text-3xl">Max Wallet 🚀</h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Mics;
