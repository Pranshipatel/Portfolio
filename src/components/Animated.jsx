import React from 'react';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AnimatedPage = ({ closeMenu }) => {
  const menuVariants = {
    hidden: { y: '-50vh', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
    exit: {
      y: '-50vh',
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center py-10 max-h-screen overflow-hidden"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-black"
        onClick={closeMenu}
      >
        <IoMdClose />
      </button>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-6 text-2xl font-semibold text-gray-800 text-center">
        <Link to="/skill" className="hover:text-blue-600">
          Skills
        </Link>
        <Link to="/projects" className="hover:text-blue-600">
          Projects
        </Link>
        <Link to="/experience" className="hover:text-blue-600">
          Experience
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default AnimatedPage;
