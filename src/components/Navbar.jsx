import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // Use useRef to track scroll position without re-renders

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      lastScrollY.current = currentScrollY; // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white text-black shadow-md z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex-1 flex justify-center py-2">
        <Link to="/" className="text-3xl font-bold font-orbitron text-[#111D32] underline">
          <span className="text-[#0ac6ae]">Pak</span>
          <span className="logo-carry">Carry</span>
        </Link>
      </div>

      <nav className="hidden md:flex justify-center space-x-6 text-lg py-2">
        <Link to="/" className="hover:text-gray-800 links">Home</Link>
        <Link to="/about" className="hover:text-gray-400 links">About Us</Link>
        <Link to="/contact" className="hover:text-gray-400 links">Contact</Link>
        <Link to="/feedback" className="hover:text-gray-400 links">Feedback</Link>
        {/* <Link to="/medicines" className="hover:text-gray-400 links">Medicines</Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
