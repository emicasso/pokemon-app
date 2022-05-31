import { useCallback, useEffect, useState } from "react";
import { getPokemonData, getPokemones } from "../services/pokemons";

export function useList() {
  const [pages, setPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 20;

  const fetchPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getPokemones(itensPerPage, itensPerPage * pages);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fechPokemons error: ", error);
    }
  }, [pages])

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  //paginacion
  const onLeftClick = () => {
    if (pages > 0) {
      setPages(pages - 1);
    }
  };

  const onRightClick = () => {
    if (pages + 1 !== totalPages) {
      setPages(pages + 1);
    }
  };

  return {
    pokemons,
    loading,
    onLeftClick,
    onRightClick,
    pages,
    totalPages,
    setPages,
  };
}
