import React from "react";

function ServiceBookingForm() {
  return (
    <section className="flex justify-center items-center py-12">
      <div className="w-full max-w-lg bg-[#F2C119] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Want Any Service?
        </h2>
        <form className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 mb-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            required
          />
          <input
            type="date"
            placeholder="Reservation Date"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            required
          />
          <input
            type="time"
            placeholder="Reservation Time"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            required
          />
          <select
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            required
          >
            <option value="">Select A Service</option>
            <option value="pet-adoption">Pet Adoption</option>
            <option value="grooming">Pet Grooming</option>
            <option value="training">Pet Training</option>
            <option value="vet-service">Veterinary Service</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[purple] text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default ServiceBookingForm;
