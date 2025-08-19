import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {  TiTimes } from "react-icons/ti";
export const Modal = ({ image, title, onClose }) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full max-h-[90vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute -top-10 right-0 text-white hover:text-red-400 transition-colors"
            onClick={onClose}
          >
           <TiTimes className="text-4xl -mt-7 -left-6 border-0"/>
          </button>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
          />
          <p className="text-white text-center mt-2">{title}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};