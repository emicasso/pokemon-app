import React from "react";
import { Navbar } from "..";
import { useInfoPokemon } from "../../hooks/useInfoPokemon";

export default function InfoPokemon() {
  const { dataPokemon, locationPokemon, speciePokemon, onClick } =
    useInfoPokemon();

  if (dataPokemon === undefined || locationPokemon === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen mx-auto font-Karla bgcard">
      <Navbar />
      <button
        onClick={onClick}
        className="font-bold text-[#F9F4D0] bg-[#F2CB07] rounded-lg py-3 ml-16 my-3 shadow-2xl px-10 uppercase border-b-8 border-[#C6A606] hover:bg-[#C6A606] hover:border-[#F2CB07] transition ease-in duration-150"
      >
        Volver a lista
      </button>
      <div
        className="rounded-3xl mx-auto overflow-hidden shadow-2xl w-1/2"
        style={{ backgroundColor: speciePokemon }}
      >
        <div className="flex justify-center">
          <img
            alt=""
            src={dataPokemon.sprites.front_default}
            className="w-60"
          />
        </div>
        <div className="text-center">
          <h3 className="text-white text-4xl bold uppercase">
            {dataPokemon.name}
          </h3>
          <p className="mt-2  font-light text-white">
            Altura: {dataPokemon.height}mt
          </p>
        </div>
        <div
          className="flex text-2xl justify-around  text-white border mx-8 my-8 py-6  rounded-lg"
          style={{
            background:
              "linear-gradient(126deg, rgba(85,84,93,1) 0%, rgba(182,182,182,1) 50%, rgba(85,84,93,1) 100%)",
          }}
        >
          <div className="text-left">
            <span>HABILIDADES:</span>
            {dataPokemon.abilities.map((element, i) => (
              <h2 key={i} className="uppercase">
                -{element.ability.name}
              </h2>
            ))}
          </div>
          <div className="text-letf">
            <span>HP: {dataPokemon.stats[0].base_stat}</span>
            <br />
            <span>ATTACK: {dataPokemon.stats[1].base_stat}</span>
            <br />
            <span>DEFENSE: {dataPokemon.stats[2].base_stat}</span>
          </div>
        </div>

        <div className="text-start px-3 pb-6 pt-2 "></div>
      </div>
    </div>
  );
}
