import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, List, Login, NoMatch } from "./pages";
import InfoPokemon from "./pages/InfoPokemon";

export const AppContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("Logeado") === "true"
  );

  function onSuccess() {
    setIsLogged(true);
  }

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          onSuccess,
          isLogged,
          setIsLogged,
        }}
      >
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="pokemon/:id" element={<InfoPokemon />} />
          </Route>
          {isLogged ? null : <Route path="/login" element={<Login />} />}
          {isLogged ? <Route path="/list" element={<List />} /> : null}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
