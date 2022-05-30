import React from "react";

export default function SearchPokemon() {
  return (
        <div className="flex items-center max-w-md mx-auto bg-gray-200 rounded-lg ">
          <div className="w-full">
            <input type="text" className="w-full px-4 py-1 text-gray-800 rounded-full" placeholder="search" value={"te"} />
          </div>
          <div>
            <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg" >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
      </div>
  );
}
