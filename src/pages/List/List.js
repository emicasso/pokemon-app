import React, { createContext } from "react";
// import { getPokemonData, getPokemones } from "../../services/pokemons";
import PokemonTable from "../PokmeonsTable/PokemonTable";
import Navbar from "../Navbar";
import { useList } from "../../hooks/useList";

export const ListContext = createContext();

export default function List() {
  const {
    pokemons,
    loading,
    onLeftClick,
    onRightClick,
    pages,
    totalPages,
    setPages,
  } = useList();


  return (
    <ListContext.Provider
      value={{
        pokemons,
        loading,
        onLeftClick,
        onRightClick,
        pages,
        totalPages,
        setPages,
      }}
    >
      <div className="h-full bghero">
        <Navbar />
        <PokemonTable />
      </div>
    </ListContext.Provider>
  );
}
