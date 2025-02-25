import React from "react";
import { FaUser, FaShippingFast, FaBox } from "react-icons/fa";
import { FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function HowItWorks() {
  return (
    <section className="flex flex-col items-center text-center py-16 bg-white">
      <h2 className="text-3xl font-bold mb-10">How does it work?</h2>

      {/* Top Row - Fellow-Traveller & Client */}
      <div className="flex justify-center items-center space-x-32">
        {/* Fellow-Traveller */}
        <div className="flex flex-col items-center w-64">
          <FaUser className="text-6xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold">Fellow-Traveller</h3>
          <p className="text-gray-600 text-sm">
            Traveler can deliver some parcels on his way. So he registers with PakCarry, sets his routes, and defines order conditions.
          </p>
        </div>

        {/* Arrows towards PakCarry Service */}
        <div className="flex flex-col items-center">
          <FaArrowRight className="text-6xl text-[#6ae0ae] rotate-[60deg] mt-24 mr-16" />
          <FaArrowLeft className="text-6xl text-[#6ae0ae] -rotate-[60deg] " />
        </div>

        {/* Client */}
        <div className="flex flex-col items-center w-64">
          <FaUser className="text-6xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold">Client</h3>
          <p className="text-gray-600 text-sm">
            The client wants to send a parcel or document. He registers with PakCarry and searches for a fellow-traveler.
          </p>
        </div>
      </div>

      {/* Middle - PakCarry Service */}
      <div className="flex flex-col items-center mt-10">
        <FaShippingFast className="text-6xl text-teal-500 mb-4" />
        <h3 className="text-xl font-semibold">PakCarry Service</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Accepts requests from clients and provides a list of verified fellow-travelers. Payments are secured until delivery is completed.
        </p>
      </div>

      {/* Downward Arrow */}
      <FaArrowDown className="text-4xl text-[#6ae0ae] mt-6" />

      {/* Bottom Row - Parcel */}
      <div className="flex flex-col items-center mt-6">
        <FaBox className="text-6xl text-teal-500 mb-4" />
        <h3 className="text-xl font-semibold">Letter, Parcel, or Luggage</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          The sender’s payment is secured and released after successful delivery.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
