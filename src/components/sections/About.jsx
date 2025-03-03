import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "motion/react";

const variantssas = {
  initial: {
    y:100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const About = () => {
  const skills = {
    "Frontend Development": {
      Languages: ["HTML5", "CSS3", "JavaScript", "PHP"],
      Frameworks: ["React.js", "Tailwind CSS", "Laravel"],
      Tools: ["Vite", "Webpack", "npm"],
    },
    "Backend Development": {
      Technologies: ["Node.js", "Express.js"],
      Databases: ["MongoDB", "MySQL"],
      Security: ["JWT Authentication", "bcrypt hashing", "Protected Routes"],
    },
    DevOps: {
      "Version Control": ["Git", "GitHub"],
      Deployment: ["Netlify", "Vercel", "Laragon"],
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <motion.div className="max-w-3xl  mx-auto px-4"
         variants={variantssas} initial="initial" whileInView="animate"
        
        >
          <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-red-900 to-red-200 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <p className="text-gray-300 mb-6 text-center">
            I&apos;m passionate about crafting stunning designs, solving
            challenges, and bringing ideas to life. Whether coding, refining
            concepts, or enhancing user experiences, I thrive on creativity.
            Beyond tech, I express my artistry through dance, beatboxing, and
            sketching—because creativity knows no limits.
          </p>
          <br />
          <div
            className="top-80 sliderText absolute text-[10vh] sm:left-[300px] lg:left-[46rem] bottom-32 whitespace-nowrap text-[#ffffff09] w-[25%] z-[-1] "
          //   variants={sliderVariants2}
          //   initial="initial"
          //   animate="animate"
          >
            {" Designer "}
          </div>

          <div
            className="top-2 sliderText absolute text-[10vh] bottom-32 whitespace-nowrap text-[#ffffff09] w-[25%] z-[-1] "
          // variants={sliderVariants1}
          // initial="initial"
          // animate="animate"
          >
            {" <Web developer/>"}
          </div>

          <div
            className="top-55 sliderText absolute text-[10vh] self-center sm:left-[200px] lg:left-[24rem] bottom-32 whitespace-nowrap text-[#ffffff09] w-[25%] z-[-1] "
          // variants={sliderVariants}
          // initial="initial"
          // animate="animate"
          >
            {"Comic-Illustrator"}
          </div>


          <div
            className="top-12 sliderText absolute self-center sm:left-[300px] lg:left-[-10rem] text-[10vh] bottom-32 whitespace-nowrap text-[#ffffff09] w-[25%] z-[-1] "
          // variants={sliderVariants3}
          // initial="initial"
          // animate="animate"
          >
            {" Dancer"}
          </div>
          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {Object.entries(skills).map(([cat, subcat]) => (
              <div
                key={cat}
                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:sahdow-[0_2px_8px_rgba(128,20,40,0.2)] transition-all"
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r  from-red-900 to-red-200 bg-clip-text text-transparent">
                  {cat}
                </h3>
                {Object.entries(subcat).map(([subcat, items]) => (
                  <div key={subcat} className="mb-4">
                    <strong className="text-gray-200">{subcat}:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {items.map((item, i) => (
                        <span
                          key={i}
                          className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
            <div className="p-6 rounded-xl  border  border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:sahdow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-4 ">
                🏛️{" "}
                <span className="bg-gradient-to-r  from-red-900 to-red-200 bg-clip-text text-transparent">
                  Education
                </span>
              </h3>
              <ul className="list-disc list-inside to-gray-300 space-y-2">
                <li>
                  <strong>Diploma in Computer Science</strong> - Lincoln College
                  Of Science and Management Technology (2023-2025)
                </li>
                <li>
                  Relevant Coursework: Web Development, Responsive Design &
                  UI/UX, Data Structures & Algorithms...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:sahdow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-4 ">
                🏢{" "}
                <span className="bg-gradient-to-r  from-red-900 to-red-200 bg-clip-text text-transparent">
                  Work Experince
                </span>{" "}
              </h3>

              <div className="space-y-4 text-gray-300">
                <div>
                  <ul className="list-disc list-inside to-gray-300 space-y-2">
                    <h4 className="font-semibold">
                      {" "}
                      FrontEnd Developer at ISAY TECHNOLOGY - (2023-2024)
                    </h4>
                    <li>
                      {" "}
                      Developed and Maintained the company&apos;s ICT
                      webservices
                    </li>{" "}
                    <li>
                      Built features for users to learn tech skills and purchase
                      computer-based gadgets
                    </li>{" "}
                    <li>
                      Ensured websites responsiveness and optimized perfomances
                    </li>{" "}
                  </ul>
                </div>
                {/* <ul className="list-disc list-inside to-gray-300 space-y-2">
                  <h4> FrontEnd Developer at ISAY TECHNOLOGY - (2023-2024)</h4>
                  <li>
                    {" "}
                    Developed and Maintained the company&apos;s ICT webservices
                  </li>{" "}
                  <li>
                    Built features for users to learn tech skills and purchase
                    computer-based gadgets
                  </li>{" "}
                  <li>
                   Ensured websites responsiveness and optimized perfomances
                  </li>{" "}
                </ul>
              </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
