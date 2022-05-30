import React from "react";
import { useNavigate } from "react-router";
import error404 from "./404.png";

export default function NoMatch() {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/")
    }

  return (
    <main className="h-screen bg-[#D93E30]">
      <section className="container mx-auto">
        <img alt="error 404" src={error404} />
        <div className="mx-auto justify-center flex">
          <button onClick={handleClick} className="font-bold text-[#F9F4D0] bg-[#F2CB07] rounded-lg py-3 my-3 shadow-2xl px-10 uppercase border-b-8 border-[#C6A606] hover:bg-[#C6A606] hover:border-[#F2CB07] transition ease-in duration-150">
            volver al inicio
          </button>
        </div>
      </section>
    </main>
  );
}
