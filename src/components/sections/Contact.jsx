import { motion, useInView } from "motion/react"
import { useRef, useState } from "react";
import emailjs from 'emailjs-com'
// import { RevealOnScroll } from "../RevealOnScroll";
// import { animate } from "motion";


const variants = {
  initial: {
    y: 200,
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

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      alert("✅Message Sent!🚀");
      setFormData({name:"", email:"", message:""})
    }).catch(() => alert("OOps! somthing went wrong. Please try again."))
  };

  const ref = useRef()

  const isInView = useInView(ref, { margin: "-100px" })
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-8"
    >

      <motion.div
        ref={ref}

        variants={variants} initial="initial" whileInView="animate" className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10">
        {/* Contact Info */}
        <motion.div id="contact" variants={variants} className="w-full md:w-1/2">
          <motion.h1 variants={variants} className="text-[50px] md:text-[100px] font-bold mb-6 bg-gradient-to-r from-red-900 to-red-200 bg-clip-text text-transparent">Get in touch</motion.h1>
          <motion.div variants={variants} className="mt-6 space-y-4">
            <motion.div variants={variants} className="item">
              <h2 className="text-xl font-semibold">Mail</h2>
              <span className="text-gray-300">doyaozie@gmail.com</span>
            </motion.div>
            <motion.div variants={variants} className="item">
              <h2 className="text-xl font-semibold">Phone</h2>
              <span>
                <a href="tel:+2348108712374" className="text-red-500">
                  +234 810 871 2374
                </a>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 ">
          <div className="above absolute">
            <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }} className="phoneSvg relative m-auto">
              <svg width="400px" height="400px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path strokeWidth={0.2} d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                />
              </svg>
            </motion.div>
          </div>


          <motion.form action="" className="space-y-6" onSubmit={handleSubmit}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}



          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:focus:border-red-500 focus:bg-red-500/5"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:focus:border-red-500 focus:bg-red-500/5"
                placeholder="mail@gmail.com..."
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:focus:border-red-500 focus:bg-red-500/5"
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button className="cursor-pointer w-full bg-red-500 text-white py-3 px-6
              rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(128,20,40,0.4)]
              
              ">
              Submit

            </button>
          </motion.form>
        </div>
      </motion.div>

    </section>
  );
};
