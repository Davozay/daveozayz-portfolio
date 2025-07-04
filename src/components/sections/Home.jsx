// import { animate, stagger } from "motion";
// eslint-disable-next-line no-unused-vars
import { delay } from "motion";
import christian from "../../assets/mainShock.jpg";
import { motion } from "motion/react";
import Button from "../Button";

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 4,
      duration: 1,
      stagger: 0.1,
    },
  },
};



export const Home = () => {
  const tryn = ' Let\'s';
  const hyph = "'"

  return (
    <section
      id="home"
      className="mt-6 mx-auto min-h-[500px] flex flex-col md:flex-row items-center justify-center relative gap-10 text-center md:text-left h-[100dvh] px-4 "
    >

      <br />

      <a
        href="#about"
        className=" md:left-[394px]
         md:bottom-8 lg:left-[52.5rem]
          lg:bottom-14
           left-5 absolute cursor-pointer angle-down z-11" >
        {/* <span className="
             bottom-full 
             left-1/2 transform
              -translate-x-1/2
               mb-2 px-2 py-1
                text-white
             bg-black rounded
             opacity-1
             group-hover:opacity-100 transition
             ">
          Explore About?
        </span> */}
      </a>
      {/* Profile Image */}
      <div className="relative rounded-full  w-[150px] md:w-[225px] lg:w-[450px]  border-none p-2 shadow-lg hover:shadow-red-900 ">
        <img
          src={christian}
          alt="Christian Icon"
          className="w-full rounded-full z-1 "
        />

      </div>

      {/* Text Content */}


      <motion.div
        initial="initial"
        animate="animate"
        variants={textVariants}
        className="z-10 px-4 max-w-xl"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-900 to-red-200 bg-clip-text text-transparent animate-fade-in"
        >
          Hey, I{hyph}m David Ayozie
        </motion.h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          A full-stack developer and creative thinker passionate about blending aesthetics with functionality.
          I build seamless, scalable solutions from front to back, crafting engaging user experiences with precision and innovation.
          {tryn} build something amazing together!
        </p>



        <motion.div
          className="flex justify-center md:justify-start space-x-4"
          variants={textVariants}
        >


          <motion.a
            variants={textVariants}
            href=""
          //             className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 
          // hover:shadow-[0_0_15px_rgba(128,20,40,0.8)] "
          >
            <Button />

          </motion.a>
          <motion.a
            variants={textVariants}
            href="#contact"
            className="h-[50px] border border-red-500/50 text-red-500 py-3 px-6 overflow-hidden rounded font-medium transition-all duration-100 hover:translate-y-0.5 
hover:shadow-[0_0_15px_rgba(128,20,40,0.2)] hover:bg-red-600/30 hover:text-white "
          >
            Contact Me
          </motion.a>
        </motion.div>

      </motion.div>

    </section>
  );
};
