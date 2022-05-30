import React from "react";
import { useNavigate } from "react-router";

export default function Pokedex({ pokemon, type }) {
  const navigate = useNavigate(); 

  function handleClick(id){
    return () =>{
      navigate(`/pokemon/${id}`)
    }
  }
  const style = {type};
  console.log(style)
  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 shadow-2xl rounded-3xl p-4" onClick={handleClick(pokemon.id)}>
        <div className="flex-none lg:flex ">
          {/* imagen */}
          <div className=" h-full w-full lg:h-48 lg:w-48  lg:mb-0 mb-3 rounded-2xl" >
            <img
              src={pokemon.sprites.front_default}
              alt="Just a flower"
              className="w-full  lg:object-cover lg:h-50 rounded-2xl bg-contain "
            />
          </div>

          {/* info */}
          <div className="flex-auto ml-3 justify-evenly py-2">
            {/* nombre */}
            <div className="flex flex-wrap ">
              <h2 className="flex-auto text-lg font-medium uppercase">
                {pokemon.name}
              </h2>
            </div>
            {/* localizacion */}
            <p className="mt-3" />
            <div className="flex py-4  text-sm text-gray-500">
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
                <span>{pokemon.location_area_encounters.name}localizacion</span>
              </div>
            </div>
            {/* tipo */}
            <div className="flex lg:px-4 px-40 pb-2 border-t border-gray-200 " />
           
              <div className="flex-1 inline-flex items-center" >
                <span className="mx-2 md:mb-0 bg-white px-1 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-400 inline-flex items-center space-x-2 ">
                {type}
                </span>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
