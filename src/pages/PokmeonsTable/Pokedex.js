import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";

export default function Pokedex({ pokemon, id, type }) {
  const [speciePokemon, setSpeciePokemon] = useState();
  const navigate = useNavigate();

  function handleClick(id) {
    return () => {
      navigate(`/pokemon/${id}`);
    };
  }
  const fetchSpeciesPokemon = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setSpeciePokemon(result.color?.name);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(pokemon);

  useEffect(() => {
    fetchSpeciesPokemon();
  }, [fetchSpeciesPokemon]);

  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 shadow-2xl rounded-3xl p-4">
        <div className="flex-none lg:flex ">
          {/* imagen */}
          <div
            className=" h-full w-full lg:h-48 lg:w-48  lg:mb-0 mb-3 rounded-2xl"
            style={{ backgroundColor: speciePokemon }}
          >
            <img
              src={pokemon.sprites.other.home.front_default}
              alt="Just a flower"
              className="w-4/5 mx-auto py-1 lg:object-cover lg:h-50 rounded-2xl bg-contain "
            />
          </div>

          {/* info */}
          <div className="flex-auto ml-3 justify-evenly py-10">
            {/* nombre */}
            <div className="flex flex-wrap ">
              <h2 className="flex-auto text-2xl text-center font-medium uppercase">
                {pokemon.name}
              </h2>
            </div>
            {/* localizacion */}
            <p className="mt-3" />
            {/* tipo */}
            <div className="flex lg:px-8 px-4 pb-5 border-t border-gray-200 text-center ">
              <div className="flex-1 inline-flex items-center">
                <h2 className="text-lg mx-auto md:mb-0 bg-white px-5 uppercase py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-400 inline-flex items-center space-x-2 ">
                  {type}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right -my-3">
          <button
            onClick={handleClick(pokemon.id)}
            className="font-bold text-[#F9F4D0] bg-[#b1aeab] rounded-lg shadow-2xl px-3 my-1 uppercase border-b-8 border-[#c60606af] hover:bg-[#c60606af] hover:border-[#b1aeab] transition ease-in duration-150"
          >
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
}
