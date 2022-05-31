import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../App";
import LogoNav from "./LogoNav.png";

export default function Navbar() {
  const navigate = useNavigate();
  const { setIsLogged, isLogged } = useContext(AppContext);

  function onLogout() {
    setIsLogged(false);
    window.localStorage.removeItem("Logeado");
    window.localStorage.removeItem("User");
    navigate("/");
  }

  return (
    <nav className="bg-[#F5DB13] shadow-2xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className=" lg:block h-12 w-auto"
                src={LogoNav}
                alt="Pokemon"
              />
            </div>
          </div>
          {isLogged === true ? (
            <button
              onClick={onLogout}
              className="font-bold text-[#F9F4D0] bg-[#3a351c] rounded-lg py-1 shadow-2xl px-4 uppercase border-b-8 border-[#C6A606] hover:bg-[#C6A606] hover:border-[#3a351c] transition ease-in duration-150"
            >
              Cerrar sesion
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
