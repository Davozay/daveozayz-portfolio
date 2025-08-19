import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from 'prop-types';
import cert1 from "../../../assets/Python_beginners_siwes.png";
import cert2 from "../../../assets/Python_advance_siwes.png";
import { Modal } from "./Modal/Modal.jsx";
import "./Certificate.css";

const certificates = [
  {
    id: 1,
    title: "Python Beginner Certification",
    issuer: "NITDA & NCAIR",
    fullIssuer: "NATIONAL INFORMATION TECHNOLOGY DEVELOPMENT AGENCY & NATIONAL CENTRE FOR ARTIFICIAL INTELLIGENCE AND ROBOTICS",
    image: cert1,
    date: "June 2023"
  },
  {
    id: 2,
    title: "Python Advanced Certification",
    issuer: "NITDA & NCAIR",
    fullIssuer: "NATIONAL INFORMATION TECHNOLOGY DEVELOPMENT AGENCY & NATIONAL CENTRE FOR ARTIFICIAL INTELLIGENCE AND ROBOTICS",
    image: cert2,
    date: "5th June 2025"
  },

  {
    id: 1,
    title: "Python Beginner Certification",
    issuer: "NITDA & NCAIR",
    fullIssuer: "NATIONAL INFORMATION TECHNOLOGY DEVELOPMENT AGENCY & NATIONAL CENTRE FOR ARTIFICIAL INTELLIGENCE AND ROBOTICS",
    image: cert1,
    date: "June 2023"
  },
  {
    id: 2,
    title: "Python Advanced Certification",
    issuer: "NITDA & NCAIR",
    fullIssuer: "NATIONAL INFORMATION TECHNOLOGY DEVELOPMENT AGENCY & NATIONAL CENTRE FOR ARTIFICIAL INTELLIGENCE AND ROBOTICS",
    image: cert2,
    date: "5th June 2025"
  },
];

export const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-[var(--Primary-bg-color)] overflow-hidden relative"
    >
      <motion.h2
        className="text-3xl font-bold mb-12 bg-gradient-to-r from-red-900 to-red-200 bg-clip-text text-transparent text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Certificates
      </motion.h2>

      <div className="w-full overflow-hidden">
        <div className="relative h-[450px] w-[200%]">
          <div className="infinite-scroll-container absolute top-0 left-0 h-full flex items-center">
            {[...certificates, ...certificates].map((cert, index) => (
              <motion.div
                key={`${cert.id}-${index}`}
                className="certificate-item flex-shrink-0 mx-4 w-[320px] h-[420px] bg-white/5 p-6 rounded-xl border border-white/10 hover:border-red-500/30 transition-all backdrop-blur-sm flex flex-col cursor-pointer"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 8px 20px -5px rgba(239, 68, 68, 0.2)",
                  y: -5
                }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="h-[220px] overflow-hidden rounded-lg mb-4 border border-white/10 flex items-center bg-white">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="relative group flex-grow">
                    <p className="text-gray-300 text-sm mb-1">Issued by: {cert.issuer}</p>
                    {cert.fullIssuer && (
                      <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 rounded text-xs z-30 w-full mt-1">
                        {cert.fullIssuer}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Date: {cert.date}</p>
                  <div className="mt-auto">
                    <button className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors flex items-center">
                      View Details <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <Modal
            image={selectedCert.image}
            title={selectedCert.title}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--Primary-bg-color)] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--Primary-bg-color)] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

Certificate.propTypes = {
  certificates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      issuer: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      fullIssuer: PropTypes.string
    })
  )
};