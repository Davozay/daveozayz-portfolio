// import { animate, stagger } from "motion";
import { delay } from "motion";
import christian from "../../assets/mainShock.jpg";
import { motion } from "motion/react";

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
  return (
    <section
      id="home"
      className="mt-6 mx-auto min-h-[500px] flex flex-col md:flex-row items-center justify-center relative gap-10 text-center md:text-left h-[100dvh] px-4 "
    >
      <br />
      {/* Profile Image */}
      <div className="relative rounded-full w-[150px] md:w-[225px] lg:w-[450px]  border-none p-2 shadow-lg hover:shadow-red-900 ">
        <img
          src={christian}
          alt="Christian Icon"
          className="w-full rounded-full z-1"
        />
        <i className="ri-sun-line text-yellow-400 text-2xl absolute top-2 right-2 hover:cursor-pointer"></i>
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
          Hey, I&apos;m David Ayozie
        </motion.h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          A front-end developer and creative thinker passionate about blending
          aesthetics with functionality. I craft engaging, user-friendly
          experiences and bring ideas to life with innovation and precision.
          Let&apos;s build something amazing together!
        </p>
        

        <motion.div
          className="flex justify-center md:justify-start space-x-4"
          variants={textVariants}
        >
          <motion.a
            variants={textVariants}
            href="#projects"
            className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 
hover:shadow-[0_0_15px_rgba(128,20,40,0.8)] "
          >
            View Projects
          </motion.a>
          <motion.a
            variants={textVariants}
            href="#contact"
            className="border border-red-500/50 text-red-500 py-3 px-6 overflow-hidden rounded font-medium transition-all duration-100 hover:translate-y-0.5 
hover:shadow-[0_0_15px_rgba(128,20,40,0.2)] hover:bg-red-600/30 hover:text-white"
          >
            Contact Me
          </motion.a>
        </motion.div>
        
      </motion.div>
     
    </section>
  );
};
