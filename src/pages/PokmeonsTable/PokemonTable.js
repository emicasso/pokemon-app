import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../App";
import { UsersContext } from "../List/List";
import Paginacion from "./Paginacion";
import Pokedex from "./Pokedex";
// import SearchPokemon from "./SearchPokemon";

export default function PokemonTable() {
  const navigate = useNavigate();
  const { pokemons, loading } = useContext(UsersContext);
  const { setIsLogged } = useContext(AppContext);

  function onLogout() {
    setIsLogged(false);
    window.localStorage.removeItem("Logeado");
    window.localStorage.removeItem("User");
    navigate("/");
  }

  return (
    <div className="pt-20 pb-10">
      {loading ? (
        <div>Cargando Pokedex</div>
      ) : (
        <div className="relative min-h-screen flex flex-col items-center justify-center">
          <button
            onClick={onLogout}
            className="font-bold text-[#F9F4D0] bg-[#F2CB07] rounded-lg py-3 my-3 shadow-2xl px-10 uppercase border-b-8 border-[#C6A606] hover:bg-[#C6A606] hover:border-[#F2CB07] transition ease-in duration-150"
          >
            Cerrar sesion
          </button>
          <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 ">
            {/* card */}
            {pokemons.map((pokemon, i) => (
              <Pokedex pokemon={pokemon} key={i} type = {pokemon.types[0].type.name} />
            ))}
          </div>
        </div>
      )}
      <Paginacion />
    </div>
  );
}
