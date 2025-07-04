// import { Sidebar } from "../sidebar/Sidebar";
// import PropTypes from "prop-types"
import {  TiTimes } from "react-icons/ti";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[var(--menu-x-color)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      {/*close this menu */}

      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <TiTimes className="text-4xl absolute -left-6 border-0"/>
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`sm:hover:text-red-500/50 hover:scale-150 text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
     ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
    `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`sm:hover:text-red-500/50 hover:scale-150 text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
          ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
         `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`sm:hover:text-red-500/50 hover:scale-150 text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
          ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
         `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`sm:hover:text-red-500/50 hover:scale-150 text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
          ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
         `}
      >
        Contact
      </a>
    </div>
  );
};
//  MobileMenu.prototype={
//   menuOpen: PropTypes.bool.isRequired,
//   setMenuOpen: PropTypes.bool.isRequired

//  }