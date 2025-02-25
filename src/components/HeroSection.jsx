import React from "react"; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    
      <div
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 opacity-50"></div>
        
        <div className="relative text-center text-white px-6 mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            SEND PACKAGES ACROSS PAKISTAN
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-medium mt-2"
          >
            SAFELY & AFFORDABLY
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl mt-4"
          >
            Connect with verified travelers for Urgent delivery of documents,<br /> luggage and forgotten items around Pakistan.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6"
          >
            <Link
              to="/loginform"
              className="bg-[#0ac6ae] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#089f8d] transition underline"
            >
              Login/Register
            </Link>
            <Link
              to="/feedback"
              className="bg-[#0ac6ae] text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-[#089f8d] transition ml-4 underline"
            >
              Feedback
            </Link>
          </motion.div>
        </div>
      </div>

     
  
  );
};

export default HeroSection;
