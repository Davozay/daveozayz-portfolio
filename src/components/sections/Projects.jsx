import spiritschool from "../../assets/screen1.png";
import todo from "../../assets/todo.webp";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import bq from "../../assets/BibleQuiz.png"
import sent from "../../assets/sentinelle-thumbnail.png"
const variantses = {
  initial: {
    x: -100,
    opacity: 0,
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
  const appos = "/'"
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <motion.div
          variants={variantses}
          initial="initial"
          whileInView="animate"
          className="max-w-5xl mx-auto px-4"
        >
          {/* Up Arrow */}
          <div className="sticky top-0 z-50 p-4">
            <a
              href="#about"
              className="absolute left-5 md:left-[394px] lg:left-[52.5rem] bottom-8 cursor-pointer z-10"
            >
            </a>
          </div>

          <motion.h2
            variants={variantses}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-900 to-red-200 bg-clip-text text-transparent text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Kingdom School of The Spirit Web App
              </h3>
              <p className="text-gray-400 mb-4">
                A modern one-page website for Kingdom Rescue School of the
                Spirit, showcasing the mission, courses, and instructor with a
                seamless registration experience via Google Form. Built using
                HTML, TailwindCSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"].map((item, i) => (
                  <span
                    key={i}
                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://krschoolofthespirit.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 w-full"
                >
                  View Live Demo =&gt;
                  <img
                    src={spiritschool}
                    alt="Kingdom School Project"
                    className="w-full py-3 rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Davozay/krschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"
                >
                  View GitHub =&gt; <FaGithub className="ml-2" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Bible-Quiz Web App</h3>
              <p className="text-gray-400 mb-4">
                This is a Bible Quiz Web Application that tests your knowledge about God{appos}s Word and helps you know more things about the Bible, and how God concealed great mysteries in His Word.
              </p>
              <div className="flex flex-wrap gap-2 mt-11 mb-4">
                {["HTML5", "CSS3", "JavaScript"].map((item, i) => (
                  <span
                    key={i}
                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://biblequizzz.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 w-full"
                >
                  View Live Demo =&gt;
                  <img
                    src={bq}
                    alt="Bon-App-Etit"
                    className="w-full py-3 rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Davozay/Bible-Quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"
                >
                  View GitHub =&gt; <FaGithub className="ml-2" />
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Sentinelle</h3>
              <p className="text-gray-400 mb-4">
                Sentinelle is your intelligent defense tool against suspicious links, messages, and emails. Powered by real-time analysis and enhanced AI logic, this tool detects phishing, fake links, and online fraud tactics before they reach your wallet or your data.
              </p>
              <div className="flex flex-wrap gap-2 mt-11 mb-4">
                {["HTML5", "CSS3", "JavaScript","Python"].map((item, i) => (
                  <span
                    key={i}
                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://sentinellee.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 w-full"
                >
                  View Live Demo =&gt;
                  <img
                    src={sent}
                    alt="Sentinelle"
                    className="w-full py-3 rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Davozay/Sentinelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"
                >
                  View GitHub =&gt; <FaGithub className="ml-2" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(128,20,40,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">To-Do List App</h3>
              <p className="text-gray-400 mb-4">
                A gamified To-Do List app that enhances productivity through
                interactivity and rewards. Users can create, manage, and track
                tasks in an engaging way.
              </p>
              <div className="flex flex-wrap gap-2 mt-11 mb-4">
                {["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"].map((item, i) => (
                  <span
                    key={i}
                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://todoappiu3.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 w-full"
                >
                  View Live Demo =&gt;
                  <img
                    src={todo}
                    alt="To-Do List App"
                    className="w-full py-3 rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Davozay/Gamified-To-Do-List-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"
                >
                  View GitHub =&gt; <FaGithub className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Down Arrow */}
          <div className="sticky bottom-0 z-50 p-4">
            <a
              href="#about"
              className="absolute left-5 md:left-[394px] lg:left-[52.5rem] top-8 cursor-pointer z-10"
            >
            </a>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
