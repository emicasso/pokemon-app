import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export default function InfoPokemon() {
  const navigate = useNavigate();
  const [dataPokemon, setInfPokemon] = useState();
  const [locationPokemon, setLocationPokemon] = useState();
  const params = useParams();

  const initalUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const locationUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}/encounters`;

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

  useEffect(() => {
    fetchInfoPokemon(initalUrl);
    fetchLocationPokemon(locationUrl);
  }, [initalUrl, locationUrl]);

  function onClick() {
    navigate("/list");
  }

  if (dataPokemon === undefined || locationPokemon === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen container mx-auto font-Karla">
      <div className="">
        <button
          onClick={onClick}
          className="font-bold text-[#F9F4D0] bg-[#F2CB07] rounded-lg py-3 my-3 shadow-2xl px-10 uppercase border-b-8 border-[#C6A606] hover:bg-[#C6A606] hover:border-[#F2CB07] transition ease-in duration-150"
        >
          Volver a lista
        </button>
      </div>
      <div className="rounded-3xl mx-auto overflow-hidden shadow-2xl shadow-[#F2CB07] w-1/2 my-3 bg-black">
        <img alt="" src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
        <div className="flex justify-center -mt-20">
          <img
            alt=""
            src={dataPokemon.sprites.front_default}
            className="rounded-full border-solid w-1/3 border-white border-2 -mt-3"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2 ">
          <h3 className="text-white text-sm bold font-sans uppercase">
            {dataPokemon.name}
          </h3>
          <p className="mt-2 font-sans font-light text-white">
            {" "}
            Altura: {dataPokemon.height}mt
          </p>
        </div>
        <div className="flex justify-center pb-3 text-white">
          <div className="text-center mr-3 border-r pr-3">
            <span>Habiblidad 1</span>
            {dataPokemon.abilities.map((element, i) => (
              <h2>{element.ability.name}</h2>
            ))}
          </div>
          <div className="text-center">
            <span>Donde Encontrarlo:</span>
            {locationPokemon.map((element, i) => (
              
              <p className="mt-2 font-sans font-light text-white" key={i}>
                <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{element.location_area.name}</span>
              </div>
              </p>
            ))}
          </div>
        </div>
        <div className="text-start px-3 pb-6 pt-2 ">
          
        </div>
      </div>
    </div>
  );
}
