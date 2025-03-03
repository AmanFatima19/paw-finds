import React from "react";
import { FaDog, FaCat, FaPaw, FaHome } from "react-icons/fa";

function Choices() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 "
      
    >
      <div className="bg-[purple] bg-opacity-60 absolute inset-0"></div> 
      
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-bold mb-2" style={{color:'#F2C119'}}>Find your new best friend</h2>
        <p className="text-lg mb-8">
          Browse pets from our network of shelters and rescues. <br />What you want?
        </p>

        <div className="flex flex-wrap justify-center gap-6">
         
          <div className="group bg-white text-[purple] rounded-xl py-6 px-10 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <FaDog className="text-4xl mb-2 group-hover:text-[#F2C119]" />
            <p className="font-semibold">Dogs</p>
          </div>

          <div className="group bg-white text-[purple] rounded-xl py-6 px-10 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <FaCat className="text-4xl mb-2 group-hover:text-[#F2C119]" />
            <p className="font-semibold">Cats</p>
          </div>

          <div className="group bg-white text-[purple] rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <FaPaw className="text-4xl mb-2 group-hover:text-[#F2C119] ml-8" />
            <p className="font-semibold">Other Animals</p>
          </div>

        
          <div className="group bg-white text-[purple] rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <FaHome className="text-4xl mb-2 group-hover:text-[#F2C119] ml-12" />
            <p className="font-semibold">Shelters & Rescues</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choices;
