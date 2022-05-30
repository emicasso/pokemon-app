import React from "react";
import { useContext } from "react";
import { LoginContex } from "./Login";

export default function LoginForm({ onSuccess }) {
  const { email, password, onEmailChange, onPasswordChange, setError, error } =
    useContext(LoginContex);

  function handleClick(e) {
    e.preventDefault();
    if (email !== "") {
      if (password !== "") {
        setError("");

        window.localStorage.setItem("Logeado", true);
        window.localStorage.setItem("User", email);

        onSuccess();
        return;
      }
    }

    window.localStorage.setItem("Logeado", false);
    setError("Datos Incorrectos");
  }

  return (
    <div className="flex flex-col items-center justify-center  py-36 ">
      <div className="flex flex-col bg-[#F5F5F5] shadow-md sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-Karla font-bold self-center text-center text-xl sm:text-6xl text-[#545644]">
          TU POKEDEX
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Ingresa tus datos como entreandor Pokemon
        </div>
        {error.length > 0 ? (
          <div className="w-full text-center text-red-700 font-Karla border border-red-700 py-3 mt-5">
            {error}
          </div>
        ) : null}
        <div className="mt-6">
          <form action="#">
            <div className="flex flex-col mb-5 text-[#545644]">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Correo:
              </label>
              <div className="relative">
                <div className=" inline-flexf items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-user text-blue-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Ingresa tu correo"
                  onChange={onEmailChange}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Contraseña:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <i className="fas fa-lock text-blue-500" />
                  </span>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  onChange={onPasswordChange}
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className=" font-bold bg-[#73D677] py-3 shadow-2xl border-b-8 border-[#5EAF62] flex mt-2 items-center justify-center focus:outline-none text-[#F9F4D0] text-sm sm:text-base hover:bg-[#5EAF62] hover:border-[#73D677] rounded-2xl w-full transition duration-150 ease-in"
                onClick={handleClick}
              >
                <span className="mr-2 uppercase">Login</span>
                {/* svg flecha */}
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
