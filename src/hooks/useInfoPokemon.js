import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

export function useInfoPokemon() {
  const [dataPokemon, setInfPokemon] = useState();
  const [locationPokemon, setLocationPokemon] = useState();
  const [speciePokemon, setSpeciePokemon] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const initalUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const locationUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}/encounters`;
  const specielUrl = `https://pokeapi.co/api/v2/pokemon-species/${params.id}`;

  const fetchSpeciesPokemon = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setSpeciePokemon(result.color?.name);
      })
      .catch((error) => console.log(error));
  };
  const fetchInfoPokemon = (url) => {
    fetch(url)
      .then((response) =>
        // console.log(response)
        response.json()
      )
      .then((result) => {
        setInfPokemon(result);
      })
      .catch((error) => console.log(error));
  };
  const fetchLocationPokemon = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setLocationPokemon(result);
      })
      .catch((error) => console.log(error));
  };

  function onClick() {
    navigate("/list");
  }

  useEffect(() => {
    fetchInfoPokemon(initalUrl);
    fetchLocationPokemon(locationUrl);
    fetchSpeciesPokemon(specielUrl);
  }, [initalUrl, locationUrl, specielUrl]);


  return {
    dataPokemon,
    locationPokemon,
    speciePokemon,
    onClick,
  };
}
