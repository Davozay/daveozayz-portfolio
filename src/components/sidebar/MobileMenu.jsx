// import { Sidebar } from "../sidebar/Sidebar";

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
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
     ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
    `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
          ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
         `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
          ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
         `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
     
          ${menuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-5"}
         `}
      >
        Contact
      </a>
    </div>
  );
};

// import { useState } from "react";
// import { motion } from "motion/react";

// import { useEffect } from "react"
// import "../../App.css";

// import { ToggleButton } from "./toggleButton/ToggleButton"
// import { delay } from "motion";
// import { clipPath } from "motion/react-m";

// export const Sidebar = (menuOpens) => {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const variants ={
//     open:{
//         clipPath: "circle(1200px at 50px 50px)",
//         transition:{
//             type:"spring",
//             stiffness:20,
//         },
//     },
//     closed: {
//         clipPath: "circle(360 at 50px 50px)",
//         transition:{
//             delay:0.5,

//             type:"string",
//             stiffness:400,
//             damping:40,

//         },
//     },
//   };

//   return <motion.div className="side-bar"animate={open? "open": "closed"}>

//         <motion.div className="bground" variants={variants}>
//             {/* <Links /> */}
//             </motion.div>

//       <ToggleButton setMenuOpen={setMenuOpen}/>
//     </motion.div>

// };
