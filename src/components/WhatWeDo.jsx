import React from 'react';
import { FaPaw, FaTruck, FaShieldAlt } from 'react-icons/fa';

function WhatWeDo() {
  return (
    <section className="back py-26">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          What We Do?
        </h2>
        <p className="max-w-2xl mx-auto mb-12">
          At **Paw Finds**, we are dedicated to connecting loving pets with caring owners through a reliable and efficient platform. Explore our services designed to make pet adoption easy and trustworthy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaPaw className="text-[purple] group-hover:text-[#F2C119] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Pet Adoption</h3>
            <p className="text-gray-600">
              We help you find the perfect furry friend by connecting you with trusted pet adopters.
            </p>
          </div>
         
          <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaTruck className="text-[purple] group-hover:text-[#F2C119] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Secure Delivery</h3>
            <p className="text-gray-600">
              Ensuring safe and timely delivery of your new companion to your doorstep.
            </p>
          </div>
         
          <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaShieldAlt className="text-[purple] group-hover:text-[#F2C119] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Trusted Platform</h3>
            <p className="text-gray-600">
              We verify every adopter and pet to build a secure community for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;

