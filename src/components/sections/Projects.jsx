import spiritschool from "../../assets/screen1.png";
import bonapp from "../../assets/screen2.png";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "motion/react"
import todo from "../../assets/todo.webp"



const variantses = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};





export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <motion.div variants={variantses} initial="initial" whileInView="animate" className="max-w-5xl mx-auto px-4">
          <motion.h2 variants={variantses} className="text-3xl font-bold mb-8 bg-gradient-to-r  from-red-900 to-red-200 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:sahdow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className=" text-xl font-bold mb-2">
                Kingdom School of The Spirit Web App
              </h3>
              <p className="text-gray-400 mb-4">
                A modern, one-page website for Kingdom Rescue School of the
                Spirit, showcasing the school&apos;s mission, courses, and
                instructor while providing a seamless registration experience
                through a Google Form. Designed with elegance and simplicity
                using HTML, TailwindCSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              {/* one */}
              <div className="flex justify-between items-center">
                <a
                  href="https://krschoolofthespirit.netlify.app"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Live Demo =&gt;
                  <img
                    src={spiritschool}
                    alt=""
                    className="w-[100%] py-3 rounded-3xl"
                  />
                </a>
              </div>

              {/* two */}
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Davozay/krschool"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Git hub =&gt;{" "}
                  <i id="jumper" className="ri-github-line"></i>
                </a>
              </div>
            </div>

            {/*Another */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:sahdow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className=" text-xl font-bold mb-2">Bon-App-Etit</h3>
              <p className="text-gray-400 mb-4">
                A campus-focused food delivery web application developed for
                Lincoln University in Abuja, Nigeria. The platform enables
                students and staff to order meals, snacks, and other food items
                from local vendors conveniently.
              </p>
              <div className="flex flex-wrap gap-2 mt-11 mb-4">
                {["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              {/* one */}
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Live Demo =&gt;
                  <img
                    src={bonapp}
                    alt=""
                    className="w-[100%] py-3 rounded-3xl"
                  />
                </a>
              </div>

              {/* two */}
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Davozay/Bon-AppEtit-Repo"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                  target="_blank"
                >
                  View Git hub =&gt;{"  "}
                  <i id="jumper" className=" ri-github-line "></i>
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:sahdow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className=" text-xl font-bold mb-2">To-Do List App</h3>
              <p className="text-gray-400 mb-4">
               
              </p>
              <div className="flex flex-wrap gap-2 mt-11 mb-4">
                {["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              {/* one */}
              <div className="flex justify-between items-center">
                <a
                  href="https://todoappiu3.netlify.app"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Live Demo =&gt;
                  <img
                    src={todo}
                    alt=""
                    className="w-[100%] py-3 rounded-3xl"
                  />
                </a>
              </div>

              {/* two */}
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Davozay/Gamified-To-Do-List-App"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Git hub =&gt;{" "}
                  <i id="jumper" className=" ri-github-line "></i>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
