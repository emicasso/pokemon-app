import React from "react";
import { useContext } from "react";
import { LandingContext } from "./Landing";

export default function LandingInfo() {
  const { onClick } = useContext(LandingContext);

  return (
    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none font-Karla">
      <div className="max-w-xl w-full space-y-12">
        <div className="lg:text-left text-center">
          <div className="flex items-center justify-center ">
            <div className=" flex flex-col px-8 py-10">
              <div className="flex flex-col space-y-8 mt-10">
                <h1 className="font-bold text-center text-7xl tracking-wider leading-none">
                  ¡Bienvenido Entrenador Pokemon!
                </h1>
                <p className="text-lg">
                  Tenemos para ti una <span className="font-bold">pokedex</span>{" "}
                  muy especial. Donde podras ver todos los pokemonos que te
                  faltan atrapar con todos sus{" "}
                  <span className="font-bold">
                    detalles, habilidades y locacion
                  </span>
                  .
                </p>
                <button
                  onClick={onClick}
                  className="font-bold text-[#F9F4D0] bg-[#73D677] rounded-lg py-3 shadow-2xl mr-2 uppercase border-b-8 border-[#5EAF62] hover:bg-[#5EAF62] hover:border-[#73D677] transition ease-in duration-150"
                >
                  Empeza tu Aventura
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
