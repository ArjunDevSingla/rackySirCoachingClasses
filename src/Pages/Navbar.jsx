import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold text-indigo-700">Racky Sir Classes</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-indigo-700 font-semibold">
          <li>
            <Link to="/" className="hover:text-indigo-900 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-900 transition duration-200">About Us</Link>
          </li>
          <li>
            <Link to="/batch" className="hover:text-indigo-900 transition duration-200">Our Batches</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-900 transition duration-200">Contact Us</Link>
          </li>
          <li>
            <Link to="/review" className="hover:text-indigo-900 transition duration-200">Review Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-indigo-700 text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </motion.nav>

      {/* Animated Sidebar for Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-10 left-0 h-full w-3/4 bg-white shadow-lg z-40 px-6 py-8"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <ul className="space-y-6 text-indigo-700 font-semibold text-lg">
              <li onClick={toggleMenu}>
                <Link to="/" className="hover:text-indigo-900 transition duration-200">Home</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/about" className="hover:text-indigo-900 transition duration-200">About Us</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/batch" className="hover:text-indigo-900 transition duration-200">Our Batches</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/contact" className="hover:text-indigo-900 transition duration-200">Contact Us</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/review" className="hover:text-indigo-900 transition duration-200">Review Us</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
