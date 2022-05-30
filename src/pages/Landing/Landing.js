import React from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import LandingHero from "./LandingHero";
import LandingInfo from "./LandingInfo";

export const LandingContext = createContext();

export default function Landing() {
  const navigate = useNavigate();

  function onClick() {
    navigate("login");
  }

  return (
    <LandingContext.Provider
      value={{
        onClick,
      }}
    >
      <main className="h-screen bg-[#F5DB13] justify-center align-center flex flex-col content-center">
        <Navbar />
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto content-center">
          
          {/* LoginForm */}
          <LandingInfo />

          {/* imagen pikachu */}
          <LandingHero />
        </div>
      </main>
    </LandingContext.Provider>
  );
}
