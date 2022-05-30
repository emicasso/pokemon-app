import React from "react";
import LogoNav from "./LogoNav.png";

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}
