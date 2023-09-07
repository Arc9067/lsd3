import React from "react";
import buy from "../assets/buy.gif";

const Buy = () => {
  return (
    <section className="py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center w-full gap-16">
        <article className="flex flex-col gap-5 justify-center items-center lg:justify-start lg:items-start">
          <img src={buy} alt="" className="w-[80%]" />
          <h1 className="text-4xl md:text-5xl text-white font-bold  capitalize animate-pulse">
            How to
          </h1>
          <h1 className="text-5xl md:text-5xl text-white font-bold  capitalize animate-bounce">
            Buy $LSDork
          </h1>

          <p className="text-center lg:text-start">
            Buy $LSDork premium for the LOW-LOW! Use the sWap below to TriP
            hArdEr and purchase easier. Trade your xxMoNieS420xx to reCeive a
            PURE bag of $LSDork, wagmi.
          </p>
        </article>
        <iframe
          width="100%"
          height="720"
          frameborder="0"
          allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
          src="https://flooz.xyz/embed/trade?swapDisabled=false&swapLockToToken=false&onRampDisabled=true&onRampAsDefault=true&onRampTokenAddress=eth&onRampLockToken=false&stakeDisabled=true&network=eth&lightMode=true&primaryColor=%23e00022&backgroundColor=transparent&roundedCorners=10&padding=20"
        ></iframe>
      </div>
    </section>
  );
};

export default Buy;
