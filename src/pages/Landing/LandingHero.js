import React from "react";
import LogoHero from "./Logo.png";

export default function LandingHero() {
  return (
    <div className="relative sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-end justify-end align-center overflow-hidden bg-no-repeat bg-cover content-center bg-center">
      <div className="absolute opacity-25 inset-0 z-0 " />
      <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-end  ">
        <div className=" font-bold  mb-6 mx-auto w-full">
          <img src={LogoHero} alt="pikachu" />
        </div>
      </div>
    </div>
  );
}
