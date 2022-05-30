import React from "react";
import { useContext } from "react";
import { UsersContext } from "../List/List";

export default function Paginacion() {
  const { onLeftClick, onRightClick, pages, totalPages } =
    useContext(UsersContext);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center px-4 mx-auto pt-16">
        <div className="font-sans flex justify-end space-x-1 select-none">
          {pages !== 0 ? (
            <button
              onClick={onLeftClick}
              className="font-bold text-[#F9F4D0] bg-[#73D677] rounded-lg  px-4 shadow-2xl uppercase border-b-8 border-[#5EAF62] hover:bg-[#5EAF62] hover:border-[#73D677] transition ease-in duration-150"
            >
              Previous
            </button>
          ) : null}
          <span
            className="px-4 py-2  text-gray-700 bg-gray-200 rounded-md hover:bg-[#F5DB13] hover:text-black font-Karla"
            style={{ transition: "all 0.2s ease" }}
          >
            {pages + 1} de {totalPages}
          </span>
          {pages + 1 === totalPages ? null : (
            <button
              onClick={onRightClick}
              className="font-bold text-[#F9F4D0] bg-[#73D677] rounded-lg  px-4 shadow-2xl uppercase border-b-8 border-[#5EAF62] hover:bg-[#5EAF62] hover:border-[#73D677] transition ease-in duration-150"
              style={{ transition: "all 0.2s ease" }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
