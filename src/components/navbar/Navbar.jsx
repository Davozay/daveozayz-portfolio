// import { Sidebar } from "../sidebar/Sidebar";
// import { TbBurger } from "react-icons/tb";
import "../../App.css"
import { useEffect } from "react";
import {  HiMiniBars3BottomRight} from "react-icons/hi2";



export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(()=>{
      document.body.style.overflow = menuOpen?"hidden": "";
  },[menuOpen])



  return (
    <nav className="fixed top-0 w-full z-40 bg-[var(--Primary-bg-color)] backdrop-blur-lg border-b border-white/10 shadow-lg opacity-99">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className=" letssee  relative left-7">
          <a href="#home" className="  font-mono text-xl font-bold text-white">
            {" "}
            Zay<span className="text-red-500">.ART</span>
            {"nTech"}
          </a>
          </div>

             
        <div className="afterina w-7 h-5  relative cursor-pointer z-40 md:hidden " onClick={()=> setMenuOpen((prev)=>!prev)}>
            <HiMiniBars3BottomRight className="text-2xl"/>
          </div>
          



          {/*desktop sizing */}

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="link py-1 relative text-gray-300 hover:text-white transition-colors "
            >
              Home
            </a>
            <a
              href="#about"
              className="link py-1 relative text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="link py-1 relative text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className=" py-1 link relative text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
