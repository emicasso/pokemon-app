import React, { useContext } from "react";
import { ListContext } from "../List/List";
import Paginacion from "./Paginacion";
import Pokedex from "./Pokedex";
// import SearchPokemon from "./SearchPokemon";

export default function PokemonTable() {
  const { pokemons, loading } = useContext(ListContext);

  return (
    <div className="pt-20 pb-10">
      {loading ? (
        <div>Cargando Pokedex</div>
      ) : (
        <div className="relative min-h-screen flex flex-col items-center justify-center">
          <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 ">
            {/* card */}
            {pokemons.map((pokemon, i) => (
              <Pokedex
                pokemon={pokemon}
                key={i}
                type={pokemon.types[0].type.name}
                id={pokemon.id}
              />
            ))}
          </div>
        </div>
      )}
      <Paginacion />
    </div>
  );
}
