import React from "react";

export const NavBar = ({ toggle, toggleHandler, navCol, fullName }) => {


  const GetFirstName = () => {
    const Name = fullName.split(' ')
    return Name[0].concat('.')
  }
  return (
    <>
      <nav
        className="hidden md:flex justify-between items-center px-20 py-6 text-white text-center w-full fixed z-50"
        style={{ backgroundColor: "#4DBCE9" }}>
        <div className="text-4xl font-semibold subpixel-antialiased">{fullName ? GetFirstName() : "Calvino."}</div>
        <div className="space-x-8 font-semibold text-lg">
          <a href="#Home">Home</a>
          <a href="#Work">Work</a>
          <a href="#Service">Service</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div>
        <div>
          <button className="rounded-full border-2 border-white font-semibold px-10 py-2 hover:bg-white hover:text-blue-400">
            Let,s Talk
          </button>
        </div>
      </nav>
      <div className="w-full" >
        <div class={"md:hidden flex justify-between items-center p-5"} style={{ backgroundColor: navCol }}>
          <div className="text-2xl font-semibold subpixel-antialiased">{fullName ? GetFirstName() : "Calvino."}</div>
          <button class="outline-none mobile-menu-button" onClick={toggleHandler}>
            <svg
              class="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {
          toggle &&
          <div class="mobile-menu block md:hidden">
            <ul class="">
              <li class="active"><a href="#Home" class="block text-sm px-2 py-4 text-white bg-blue-400 font-semibold">Home</a></li>
              <li><a href="#Work" class="block text-sm px-2 py-4 hover:bg-blue-400 transition duration-300">Work</a></li>
              <li><a href="#Service" class="block text-sm px-2 py-4 hover:bg-blue-400 transition duration-300">Services</a></li>
              <li><a href="#About" class="block text-sm px-2 py-4 hover:bg-blue-400 transition duration-300">About</a></li>
              <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-blue-400 transition duration-300">Contact Us</a></li>
            </ul>
          </div>
        }
      </div>
    </>
  );
};
